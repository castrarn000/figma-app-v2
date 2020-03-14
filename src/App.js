import React from 'react';
import './App.sass';
import NavigationBar from './NavigationBar/NavigationBar'
import UsersTable from './UsersTable/UsersTable';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <UsersTable />
    </div>
  );
}

export default App;
