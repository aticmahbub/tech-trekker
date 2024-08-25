import React from 'react';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Tech Trekker</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Blogs</a></li>
                    <li><a>Bookmarks</a></li>
                </ul>
            </div> 
        </div>
    );
};

export default NavBar;