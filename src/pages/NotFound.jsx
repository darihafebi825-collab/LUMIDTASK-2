import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <main className="notfound-page">
      <div className="container notfound-content">
        <span className="notfound-code">404</span>
        <h1 className="notfound-title">Page not found.</h1>
        <p className="notfound-sub">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary">← Back to Home</Link>
      </div>
    </main>
  );
}
