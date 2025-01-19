import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import CreateStudyProgram from './CreateStudyProgram';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route exact path="/">
          <Login setUser={setUser} />
        </Route>
        <Route path="/create-study-program">
          <CreateStudyProgram />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
