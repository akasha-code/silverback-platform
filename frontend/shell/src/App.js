import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', background: '#eee' }}>
        <Link to="/">Home</Link> | <Link to="/auth">Auth</Link> | <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h2>Shell Home</h2>} />
        <Route path="/auth" element={<h2>Remote: Auth</h2>} />
        <Route path="/dashboard" element={<h2>Remote: Dashboard</h2>} />
      </Routes>
    </BrowserRouter>
  );
}
