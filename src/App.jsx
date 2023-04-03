import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './login/composer/Login';
import Signup from './signup/composer/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { usersData } from './MockData';
import { useState } from 'react';

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://personal-a21xtpbj.outsystemscloud.com/pfecoreService/rest/ClientAPI/GetClients')
      const jsonResult = await result.json()

      setUsers(jsonResult)
    }
    fetchData()
  }, [])

  const submitUser = async () => {
    const myData = {
      name: 'user 4 '
    }

    const result = await fetch ('https://personal-a21xtpbj.outsystemscloud.com/pfecoreService/rest/ClientAPI/GetClients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myData)
    })

    const resultInJson = await result.json();
    console.log(resultInJson)
  }

  return (
    <div className="App">
      <button onClick={submitUser}>Submit</button>
      <h2> users</h2>
      {usersData.map(user =>
        <div key={user.id}>
          <h3>{user.name}</h3>
        </div>
      )}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/users" element={<usersData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
