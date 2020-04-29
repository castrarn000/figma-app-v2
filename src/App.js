import React from 'react';
import './App.sass';
import Modal from './SignUpBox/Modal';
import NavigationBar from './NavigationBar/NavigationBar';
import SignUpBox from './SignUpBox/SignUpBox';
import UsersTable from './UsersTable/UsersTable';

function App() {
  return (
    <div className="App">
      <div className='fixedComponets'>
        <NavigationBar />
        <SignUpBox />
      </div>
      <Modal />
      <UsersTable />
    </div>
  );
}

export default App;
