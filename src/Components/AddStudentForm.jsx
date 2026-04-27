import React, { useState } from 'react';

function AddStudentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || score === '') return;
    const s = Number(score);
    if (s < 0 || s > 100) return;
    onAdd({ id: Date.now(), name: name.trim(), score: s });
    setName('');
    setScore('');
  };

  return (
    <div className="form-card">
      <h2 className="form-title">➕ Enroll New Student</h2>
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Student Name</label>
          <input
            id="name"
            type="text"
            placeholder="e.g. Arjun Sharma"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="score">Score (0–100)</label>
          <input
            id="score"
            type="number"
            placeholder="e.g. 75"
            value={score}
            min="0"
            max="100"
            onChange={(e) => setScore(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-add">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudentForm;