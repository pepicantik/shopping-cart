import Button from "../Elements/Button/button";

const Navbar = ({ title = "Shopping Cart", onLogout}) => {
    return (
        <header className="bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <h1 className="text-xl font-bold text-blue-700">
                {title}
            </h1>

            <Button
            variant="bg-red-600 hover:bg-red-700"
            onClick={onLogout}
            > Logout
            </Button>
            </div>
        </header>
    );
};

export default Navbar;