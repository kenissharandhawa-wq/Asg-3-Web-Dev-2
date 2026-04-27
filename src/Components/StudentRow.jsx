import React, { useState } from 'react';

function StudentRow({ student, onUpdate }) {
  const [editScore, setEditScore] = useState(student.score);
  const isPassed = student.score >= 40;

  const handleSave = () => {
    const s = Number(editScore);
    if (s < 0 || s > 100) return;
    onUpdate(student.id, s);
  };

  return (
    <tr className={`student-row ${isPassed ? 'pass-row' : 'fail-row'}`}>
      <td className="td-name">{student.name}</td>
      <td className="td-score">{student.score}</td>
      <td className="td-status">
        <span className={`badge ${isPassed ? 'badge-pass' : 'badge-fail'}`}>
          {isPassed ? '✔ Pass' : '✘ Fail'}
        </span>
      </td>
      <td className="td-update">
        <div className="update-group">
          <input
            type="number"
            value={editScore}
            min="0"
            max="100"
            onChange={(e) => setEditScore(e.target.value)}
          />
          <button className="btn-save" onClick={handleSave}>Save</button>
        </div>
      </td>
    </tr>
  );
}

export default StudentRow;