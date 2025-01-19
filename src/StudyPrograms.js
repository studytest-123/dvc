import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudyPrograms = () => {
  const [studyPrograms, setStudyPrograms] = useState([]);

  useEffect(() => {
    // API-Endpunkt von Supabase zum Abrufen der Daten
    axios.get('https://oqfwncayddaumfgzyeor.supabase.co/rest/v1/study_programs', {
      headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZnduY2F5ZGRhdW1mZ3p5ZW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzNzg4NzYsImV4cCI6MjA0OTk1NDg3Nn0.YIXv5A1A8NtsGCwHOy8KuDMs1X1t6i1F5vcGQFiEVKY', // Dein Supabase API-Schlüssel
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZnduY2F5ZGRhdW1mZ3p5ZW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzNzg4NzYsImV4cCI6MjA0OTk1NDg3Nn0.YIXv5A1A8NtsGCwHOy8KuDMs1X1t6i1F5vcGQFiEVKY' // Dein Supabase API-Schlüssel
      }
    })
    .then(response => {
      setStudyPrograms(response.data); // Daten in den State setzen
    })
    .catch(error => {
      console.error('Fehler beim Laden der Studiengänge:', error);
    });
  }, []);

  return (
    <div>
      <h1>Study Programs</h1>
      {studyPrograms.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {studyPrograms.map(program => (
            <li key={program.id}>{program.name}: {program.description}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudyPrograms;
