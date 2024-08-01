class ReconnectingWebSocket {
  private url: string;
  private protocols?: string | string[];
  private socket: WebSocket | null;
  private reconnectInterval: number;
  private maxReconnectInterval: number;
  private reconnectDecay: number;
  private timeout: NodeJS.Timeout | null;
  private onOpenHandler: (() => void) | null;
  private onMessageHandler: ((event: MessageEvent) => void) | null;
  private onCloseHandler: (() => void) | null;

  constructor(url: string, protocols?: string | string[]) {
    this.url = url;
    this.protocols = protocols;
    this.reconnectInterval = 1000; // Intervalo de reconexión inicial (1 segundo)
    this.maxReconnectInterval = 30000; // Intervalo de reconexión máximo (30 segundos)
    this.reconnectDecay = 1.5; // Factor de multiplicación para el intervalo de reconexión
    this.timeout = null;
    this.socket = null;
    this.onOpenHandler = null;
    this.onMessageHandler = null;
    this.onCloseHandler = null;
    this.connect();
  }

  private connect(): void {
    this.socket = new WebSocket(this.url, this.protocols);

    this.socket.onopen = () => {
      console.log('Conectado al servidor WebSocket');
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.reconnectInterval = 1000; 
      if (this.onOpenHandler) {
        this.onOpenHandler();
      }
    };

    this.socket.onmessage = (event: MessageEvent) => {
      // Manejar los mensajes recibidos del servidor
      if (this.onMessageHandler) {
        this.onMessageHandler(event);
      }
    };

    this.socket.onclose = (event: CloseEvent) => {
      console.log('Conexión WebSocket cerrada, intentando reconectar...', event.reason);
      this.reconnect();
      if (this.onCloseHandler) {
        this.onCloseHandler();
      }
    };

    this.socket.onerror = (error: Event) => {
      console.error('Error WebSocket', error);
      // Cierra el socket para activar el reconector
      if (this.socket) {
        this.socket.close();
      }
    };
  }

  private reconnect(): void {
    if (this.reconnectInterval < this.maxReconnectInterval) {
      console.log(`Intentando reconectar en ${this.reconnectInterval / 1000} segundos...`);
      this.timeout = setTimeout(() => {
        this.reconnectInterval = Math.min(this.reconnectInterval * this.reconnectDecay, this.maxReconnectInterval);
        this.connect();
      }, this.reconnectInterval);
    } else {
      console.log('Intervalo de reconexión máximo alcanzado.');
    }
  }

  public send(message: string): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
    } else {
      console.error('WebSocket no está abierto. Estado de ReadyState: ' + (this.socket ? this.socket.readyState : 'NO SOCKET'));
    }
  }

  public close(): void {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    if (this.socket) {
      this.socket.close();
    }
  }

  public isConnected(): boolean {
    return this.socket?.readyState === WebSocket.OPEN;
  }

  public setOnOpenHandler(handler: () => void): void {
    this.onOpenHandler = handler;
  }

  public setOnMessageHandler(handler: (event: MessageEvent) => void): void {
    this.onMessageHandler = handler;
  }

  public setOnCloseHandler(handler: () => void): void {
    this.onCloseHandler = handler;
  }
}

export default ReconnectingWebSocket;
