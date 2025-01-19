import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateStudyProgram = () => {
  const [studyPrograms, setStudyPrograms] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState('');
  const [programName, setProgramName] = useState('');
  const [error, setError] = useState('');

  // Abrufen der verfügbaren Studiengänge von Supabase
  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get('https://oqfwncayddaumfgzyeor.supabase.co/rest/v1/study_programs', {
          headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZnduY2F5ZGRhdW1mZ3p5ZW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzNzg4NzYsImV4cCI6MjA0OTk1NDg3Nn0.YIXv5A1A8NtsGCwHOy8KuDMs1X1t6i1F5vcGQFiEVKY', // Dein Supabase API-Schlüssel
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZnduY2F5ZGRhdW1mZ3p5ZW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzNzg4NzYsImV4cCI6MjA0OTk1NDg3Nn0.YIXv5A1A8NtsGCwHOy8KuDMs1X1t6i1F5vcGQFiEVKY' // Dein Supabase API-Schlüssel
          }
        });
        setStudyPrograms(response.data);
      } catch (err) {
        setError('Fehler beim Abrufen der Studiengänge.');
      }
    };
    fetchPrograms();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Füge ein neues Studium hinzu
      await axios.post('https://oqfwncayddaumfgzyeor.supabase.co/rest/v1/your_study_program_table', {
        name: programName,
        program_id: selectedProgram
      }, {
        headers: {
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZnduY2F5ZGRhdW1mZ3p5ZW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzNzg4NzYsImV4cCI6MjA0OTk1NDg3Nn0.YIXv5A1A8NtsGCwHOy8KuDMs1X1t6i1F5vcGQFiEVKY',
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZnduY2F5ZGRhdW1mZ3p5ZW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzNzg4NzYsImV4cCI6MjA0OTk1NDg3Nn0.YIXv5A1A8NtsGCwHOy8KuDMs1X1t6i1F5vcGQFiEVKY'
        }
      });

      alert('Studium erfolgreich angelegt!');
    } catch (err) {
      setError('Fehler beim Erstellen des Studiengangs.');
    }
  };

  return (
    <div className="create-study-program-container">
      <h2>Studium anlegen</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Wählen Sie einen Studiengang</label>
          <select
            value={selectedProgram}
            onChange={(e) => setSelectedProgram(e.target.value)}
            required
          >
            <option value="">Bitte wählen...</option>
            {studyPrograms.map((program) => (
              <option key={program.id} value={program.id}>
                {program.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Studiengang Name</label>
          <input
            type="text"
            value={programName}
            onChange={(e) => setProgramName(e.target.value)}
            required
          />
        </div>

        <button type="submit">Studium anlegen</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default CreateStudyProgram;
