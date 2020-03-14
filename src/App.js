import React from 'react';
import './App.sass';
import NavigationBar from './NavigationBar/NavigationBar'
import SignUpBox from './SignUpBox/SignUpBox'
import UsersTable from './UsersTable/UsersTable';

function App() {
  return (
    <div className="App">
      <div className='fixedComponets'>
        <NavigationBar />
        <SignUpBox />
      </div>
      <UsersTable />
    </div>
  );
}

export default App;
