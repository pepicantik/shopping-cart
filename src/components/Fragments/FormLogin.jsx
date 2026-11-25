import InputForm from "../Elements/Input";
import Button from "../Elements/Button/button";

const FormLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem('username', event.target.username.value);
        localStorage.setItem('password', event.target.password.value);
        window.location.href = "/products"
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