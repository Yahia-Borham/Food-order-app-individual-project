







const Input = ({ lableName, name, type, defaultValue }) => {
    return (

        <>
            <div className="control-row ">
                <label htmlFor={name} >{lableName}</label>
            </div>

            <div className="control-row ">
                <input id={name} name={name} type={type} defaultValue={defaultValue} />
            </div >

        </>
    );
}

export default Input;