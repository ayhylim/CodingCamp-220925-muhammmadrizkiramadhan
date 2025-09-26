import React from "react";
import {Link, useLocation} from "react-router-dom";
import {Button} from "./ui/button";

const Navbar = () => {
    const location = useLocation();

    const navItems = [
        {name: "Home", path: "/"},
        {name: "My Profile", path: "/profile"},
        {name: "Portfolio", path: "/portfolio"},
        {name: "Message Us", path: "/message"}
    ];

    return (
        <nav className="bg-white border-b-2 border-gray-300 py-4 px-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                        <img
                            src="https://tbxbyteclub.web.app/assets/img/r.jpeg"
                            alt="Me"
                            className="w-16 h-16 rounded-full"
                        />
                    </div>
                </div>

                {/* Navigation Menu */}
                <div className="flex space-x-1">
                    {navItems.map(item => (
                        <Link key={item.path} to={item.path}>
                            <Button
                                variant={location.pathname === item.path ? "default" : "outline"}
                                className={`px-6 py-2 border border-gray-400 ${
                                    location.pathname === item.path
                                        ? "bg-gray-100 text-black border-gray-500"
                                        : "bg-white text-black hover:bg-gray-50"
                                } transition-colors duration-200`}
                            >
                                {item.name}
                            </Button>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
