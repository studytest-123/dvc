import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchStudyPrograms } from './api';

const StudyPrograms = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const loadPrograms = async () => {
      const data = await fetchStudyPrograms();
      setPrograms(data);
    };

    loadPrograms();
  }, []);

  return (
    <div>
      <h1>Study Programs</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <Link to={`/studyprograms/${program.id}`}>{program.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudyPrograms;
