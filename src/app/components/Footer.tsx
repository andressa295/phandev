'use client';
import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa'; // Importe os ícones
import './footer.css';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        {/* Assumindo que você tem uma imagem de logo pequena para o footer */}
        <img src="/logo.png" alt="Logo Pequena Phand" className="logo-pequena" /> 

        <div className="social-links">
          <Link href="https://www.instagram.com/seuperfil" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </Link>
          <Link href="https://wa.me/seunumerodetelefone" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </Link>
                  </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Phand Estúdio Criativo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}