import React, { useState } from 'react';
import Header from './Components/Header';
import AddStudentForm from './Components/AddStudentForm';
import StudentTable from './Components/StudentTable';
import './Components/style.css';

const initialStudents = [
  { id: 1, name: 'Aman', score: 78 },
  { id: 2, name: 'Riya', score: 45 },
  { id: 3, name: 'Karan', score: 90 },
  { id: 4, name: 'Neha', score: 32 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);

  const addStudent = (student) => {
    setStudents(prev => [...prev, student]);
  };

  const updateScore = (id, newScore) => {
    setStudents(prev =>
      prev.map(s => s.id === id ? { ...s, score: newScore } : s)
    );
  };

  return (
    <div className="app-bg">
      <div className="app-container">
        <Header />
        <AddStudentForm onAdd={addStudent} />
        <StudentTable students={students} onUpdate={updateScore} />
        <footer className="footer">Academic Records System · Session Active</footer>
      </div>
    </div>
  );
}

export default App;