import { Link, NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    const navLinkClass = ({isActive}) => 
        `font-medium transition-colors
        ${isActive ? "text-blue-700" : "text-gray-600 hover:text-blue-700"
}`;

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white p-5 shadow-sm">
                <div className="mx-auto flex max-w-5xl items-center justify-between">
                    <Link to="/dashboard" className="text-lg font-bold text-blue-700">
                        My Dashboard
                    </Link>

                    <nav className="flex gap-3">
                        <NavLink
                        to="/products"
                        className={navLinkClass}>
                            Products
                        </NavLink>
                        
                        <NavLink
                        to="/dashboard/profile"
                        className={navLinkClass}>
                            Profile
                        </NavLink>

                        <NavLink
                        to="/dashboard/settings"
                        className={navLinkClass}>
                            Settings
                        </NavLink>
                    </nav>
                </div>
            </header>

            <main className="mx-auto max-w-5xl p-6">
                <Outlet />
            </main>
        </div>
    )
};
export default DashboardLayout;