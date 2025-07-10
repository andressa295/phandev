'use client';
import React from 'react';
import '../globals.css';

export default function Header() {
  return (
    <header className="header">
      <img src="/logo.png" alt="Phand Developer" className="logo" />
      <nav className="menu">
        <a href="#servicos">Serviços</a>
        <a href="#portfolio">Portfólio</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}
