import React, { Children, useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import NavBar from './components/NavBar';
import Modal from './components/Modal';

const BASE_URL = 'https://users-crud.academlo.tech/';

const getUsers = async () => {
  try {
    const res = await axios.get(BASE_URL + 'users/');

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const App = () => {
  const [users, setUsers] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const loadUsers = async () => {
    try {
      const users = await getUsers();

      setUsers(users);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="bg-neutral-800 h-screen flex flex-col justify-center items-center p-10 text-white">
      <NavBar />
      <UserList users={users} />
      <Modal isVisible={isFormVisible}>
        <div>
          <mark>Aqui ira el form</mark>
        </div>
      </Modal>
    </div>
  );
};

export default App;
