import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchStudyProgram } from './api';

const StudyProgramDetails = () => {
  const { id } = useParams();
  const [program, setProgram] = useState(null);

  useEffect(() => {
    const loadProgram = async () => {
      const data = await fetchStudyProgram(id);
      setProgram(data);
    };

    loadProgram();
  }, [id]);

  if (!program) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{program.name}</h1>
      <p>{program.description}</p>
    </div>
  );
};

export default StudyProgramDetails;
