import React from 'react';

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-around items-center mb-5">
      <h1 className="w-full text-3xl font-bold">Users Admin</h1>
      <button className="bg-blue-500 p-1">
        <box-icon type="solid" name="add-to-queue"></box-icon>
        <span>Add new user</span>
      </button>
    </nav>
  );
};

export default NavBar;
