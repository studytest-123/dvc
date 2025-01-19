import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import CreateStudyProgram from './CreateStudyProgram';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login setUser={setUser} />
        </Route>
        <Route path="/create-study-program">
          <CreateStudyProgram />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
