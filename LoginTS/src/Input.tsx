
interface InputProps {
    type:string,
    id:string,
    placeholder:string,
    value:any,
    onChange:any,
    required:any
}

const Input: React.FC<InputProps> = ({type,id,placeholder,value,onChange,required}) =>{

    return (
        <input
         type={type}
         id={id}
         placeholder={placeholder}
         value={value}
         onChange={onChange}
         required={required}
          />
    );
}

export default Input;