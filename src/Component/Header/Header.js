import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="navbar">
                <div className="flex-1">
                    <a href='/home' className="btn btn-ghost normal-case text-xl">Tour Travel</a>
                    <div className='m-4 justify-evenly'>
                        <Link className='option link-accent' to="/home">Home</Link>
                        <Link className='option link-secondary' to="/place">Hot Place</Link>
                        <Link className='option link-accent' to="/book">Book</Link>
                        <Link className='option link-accent' to="/destination">Destination</Link>
                        <Link className='option link-accent' to="/login">Log In</Link>
                        <Link className='option link-accent' to="/signup">Sign Up</Link>
                    </div>
                </div>

                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt='/' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a href='/' className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a href='/'>Settings</a></li>
                            <li><a href='/'>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;