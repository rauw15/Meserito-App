import React, { useState } from 'react';
import axios from 'axios';
import '../../../assets/styles/TableSelection.css';

interface Table {
  id: number;
  color: string;
}

const tables: Table[] = [
  { id: 1, color: 'red' },
  { id: 2, color: 'blue' },
  { id: 3, color: 'green' },
  { id: 4, color: 'yellow' },
];

const TableSelection: React.FC = () => {
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);

  const handleTableClick = (table: Table) => {
    setSelectedTable(table);
  };

  const handleSendToRobot = async () => {
    if (selectedTable) {
      try {
        const response = await axios.post('http://localhost:3000/sendToRobot', {
          tableId: selectedTable.id,
          color: selectedTable.color,
        });
        console.log('Response from robot:', response.data);
      } catch (error) {
        console.error('Error sending to robot:', error);
      }
    }
  };

  return (
    <div className="table-selection-container">
      <h2>Select a Table</h2>
      <div className="tables">
        {tables.map((table) => (
          <div
            key={table.id}
            className={`table ${table.color} ${selectedTable?.id === table.id ? 'selected' : ''}`}
            onClick={() => handleTableClick(table)}
          >
            {table.color}
          </div>
        ))}
      </div>
      <button onClick={handleSendToRobot} disabled={!selectedTable}>
        Send to Robot
      </button>
    </div>
  );
};

export default TableSelection;
