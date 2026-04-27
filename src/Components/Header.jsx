import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <span className="header-icon">📋</span>
        <div>
          <p className="header-sub">Academic Records</p>
          <h1 className="header-title">Student Scoreboard</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;