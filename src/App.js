import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudyPrograms from './StudyPrograms';
import StudyProgramDetails from './StudyProgramDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudyPrograms />} />
        <Route path="/studyprograms/:id" element={<StudyProgramDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
