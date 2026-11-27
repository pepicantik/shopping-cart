import Button from "../Elements/Button/button";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ title = "Shopping Cart", onLogout}) => {
    const navLinkClass = ({isActive}) => 
        `font-medium transition-colors
        ${isActive ? "text-blue-700" : "text-gray-600 hover:text-blue-700"}`;
    

    return (
        <header className="bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                
                {/* untuk berpindah halaman tanpa melakukan reload browser */}
                <Link to="/products" className="text-xl font-bold text-blue-700">
                {title}
                </Link>

                <nav className="flex items-center gap-6">
                    
                    {/* NavLink fungsinya sama kaya Link tapi punya fitur tambahan
                    yaitu mengetahui apakah halaman sedang aktif */}
                    <NavLink to="/products" className={navLinkClass}>
                        Products
                    </NavLink>

                    <Link to="/dashboard" className={navLinkClass}>
                        Dashboard
                    </Link>

                    <Button
                        variant="bg-red-600 hover:bg-red-700"
                        onClick={onLogout}
                        > Logout
                    </Button>

                </nav>
            </div>
        </header>
    );
};

export default Navbar;