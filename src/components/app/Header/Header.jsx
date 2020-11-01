import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return <div className="Header">
  <h1>Sailor Moon Character API</h1>
  <Link to="/">Home Page</Link>
  </div>
}