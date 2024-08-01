function Button({className ,type, msg}){
    return(
        <button className={className} type={type}>{msg}</button>
    );
}

export default Button;