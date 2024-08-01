function Label({required, style, onBlur, onFocus, id, classDiv ,type, msg, classNameLabel, classNameInput, value, onChange, placeholder}){
    return(
        <div className={classDiv}>
            <label className={classNameLabel}>{msg}</label>
            <input required={required} style={style} onBlur={onBlur} onFocus={onFocus} id={id} value={value} placeholder={placeholder} className={classNameInput} type={type} onChange={onChange}/>
            
        </div>
    );
}

export default Label;