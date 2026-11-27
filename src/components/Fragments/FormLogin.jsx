import InputForm from "../Elements/Input";
import Button from "../Elements/Button/button";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        
        const username = event.target.username.value;
        localStorage.setItem("username", username);

        const password = event.target.password.value;
        localStorage.setItem("password", password);
    
        navigate("/products");
    };

    return (
    <form onSubmit={handleLogin}>
            <InputForm
            label="Username" 
            type="text" 
            placeholder="Jhon Doe" 
            name="username"
            autoFocus />

            <InputForm
            label="Password" 
            type="password" 
            placeholder="*****" 
            name="password" />

            <Button variant="bg-blue-600 w-full" type="submit">Login</Button>
          </form>
    );
}

export default FormLogin;