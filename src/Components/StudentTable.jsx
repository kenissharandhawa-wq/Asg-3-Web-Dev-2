import React from 'react';
import StudentRow from './StudentRow';

function StudentTable({ students, onUpdate }) {
  const total = students.length;
  const passed = students.filter(s => s.score >= 40).length;
  const avg = total > 0 ? Math.round(students.reduce((a, s) => a + s.score, 0) / total) : 0;

  return (
    <div className="table-section">
      <div className="stats-bar">
        <div className="stat">
          <span className="stat-num">{total}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat">
          <span className="stat-num green">{passed}</span>
          <span className="stat-label">Passed</span>
        </div>
        <div className="stat">
          <span className="stat-num red">{total - passed}</span>
          <span className="stat-label">Failed</span>
        </div>
        <div className="stat">
          <span className="stat-num orange">{avg}</span>
          <span className="stat-label">Avg Score</span>
        </div>
      </div>

      {total === 0 ? (
        <div className="empty-msg">No students enrolled yet. Add one above!</div>
      ) : (
        <div className="table-wrap">
          <table className="student-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Score</th>
                <th>Status</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <StudentRow
                  key={student.id}
                  student={student}
                  onUpdate={onUpdate}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default StudentTable;