const Button = (props) => {
  const {
  children,
  variant = "bg-black",
  onClick = () => {},
  type= "button",
  disabled = false,
  className = ""} =  props; //untuk mengisi default
  return (
    <button 
      className={
      `h-10 px-6 font-semibold rounded-md text-white
      transition duration-200
      hover:brightness-90
      active:scale-95
      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-blue-400
      focus-visible:ring-offset-2
      disabled:bg-slate-400
        disabled:opacity-60
        disabled:cursor-not-allowed
        disabled:hover:brightness-100
        disabled:active:scale-100
      ${variant}
      ${className}`
    }
      type={type}
      onClick={onClick}
      disabled={disabled}
      >
      {children}
      </button>
  );
}

export default Button;