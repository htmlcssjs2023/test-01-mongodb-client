import { Link, useLoaderData } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav className="py-8 bg-green-400 px-8 flex gap-4 font-bold">
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                <Link to="update">Edit</Link>
                <Link to="/showUser">Show User</Link>
            </nav>
        </div>
    );
};

export default NavBar;