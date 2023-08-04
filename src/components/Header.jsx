import React from 'react';
import SearchBer from './SearchBer';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {/* <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul> */}
                    </div>
                    <div>
                        <SearchBer></SearchBer>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {/* <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul> */}
                    <div className="avatar-group -space-x-6">
                        <div className="avatar">
                            <div className="w-12">
                                <img src="https://i.ibb.co/Jq745RZ/314409558-1514255335728578-7345306272187458483-n.jpg" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src="https://i.ibb.co/wsNJTGC/1000-F-109909275-m-Wy-Vzp8q1-JLEc2lydnl-H5q-YHog5i-GQct.jpg" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src="https://i.ibb.co/HC3kGvk/kid-playing-his-room.jpg" />
                            </div>
                        </div>
                        <div className="avatar placeholder">
                            <button className="w-12 bg-neutral-focus text-neutral-content">
                                <span className='text-4xl text-orange-500 font-semibold'>+</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="navbar-end">
                    <div>
                        <h3>JOin Deo</h3>
                        <p>Admin profile</p>
                    </div>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://i.ibb.co/Jq745RZ/314409558-1514255335728578-7345306272187458483-n.jpg" />
                        </div>
                    </label>
                    {/* <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul> */}

                </div>
            </div>
        </div>
    );
};

export default Header;