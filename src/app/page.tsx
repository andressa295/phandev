'use client';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// Ícones do React Icons - incluindo os novos para a seção de serviços
import { FaLightbulb, FaCode, FaCheckCircle, FaRocket } from 'react-icons/fa';
import { FiGlobe, FiFeather, FiInstagram, FiTrendingUp } from 'react-icons/fi'; // Ícones para os serviços
import { motion } from 'framer-motion';
import './globals.css';

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* HERO COM ANIMAÇÃO */}
        <section className="hero">
          <div className="container">
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              Soluções visuais e digitais com propósito
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              Criação de sites, identidade visual e estratégias digitais sob medida. Profissionalismo e estética que geram valor.
            </motion.p>
            <a href="#contato" className="btn neon">
              Solicitar Orçamento
            </a>
          </div>
        </section>

                {/* SERVIÇOS - USANDO REACT-ICONS */}
        <section className="servicos" id="servicos">
          <div className="container">
            <h2>Serviços</h2>
            <div className="grid-servicos">
              <motion.div className="servico-card" whileHover={{ scale: 1.05 }}>
                <FiGlobe className="servico-icon-servicos" /> {/* Ícone de website */}
                <h3>Criação de sites</h3>
                <p>Sites personalizados, responsivos e de alta performance, com identidade visual única.</p>
              </motion.div>
              <motion.div className="servico-card" whileHover={{ scale: 1.05 }}>
                <FiFeather className="servico-icon-servicos" /> {/* Ícone de design/pena */}
                <h3>Identidade Visual</h3>
                <p>Criação de logotipo, cores, tipografia e elementos que fortalecem sua marca.</p>
              </motion.div>
              <motion.div className="servico-card" whileHover={{ scale: 1.05 }}>
                <FiInstagram className="servico-icon-servicos" /> {/* Ícone do Instagram */}
                <h3>Design para redes</h3>
                <p>Bio otimizada, destaques, posts, stories e pacotes completos para Instagram.</p>
              </motion.div>
              <motion.div className="servico-card" whileHover={{ scale: 1.05 }}>
                <FiTrendingUp className="servico-icon-servicos" /> {/* Ícone de crescimento/consultoria */}
                <h3>Consultoria Digital</h3>
                <p>Estratégia de posicionamento, branding digital e presença consistente online.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PORTFÓLIO - CORRIGIDO E COM ANIMAÇÃO */}
        <section className="portfolio" id="portfolio">
          <div className="container">
            <h2>Portfólio</h2>
            <div className="grid">
              <motion.img
                src="/projeto1.png"
                alt="Projeto 1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
              />
              <motion.img
                src="/projeto2.png"
                alt="Projeto 2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <motion.img
                src="/projeto3.png"
                alt="Projeto 3"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </div>
          </div>
        </section>

        {/* COMO EU TRABALHO - RESTRUTURADO COM CARDS E ÍCONES (LAYOUT 2X2) */}
        <section className="processo">
          <div className="container">
            <h2>Como eu trabalho</h2>
            <div className="processo-grid">
              <motion.div
                className="processo-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <FaLightbulb className="processo-icon" />
                <h3>Briefing</h3>
                <p>Entendimento completo dos seus objetivos, público-alvo e visão do projeto.</p>
              </motion.div>
              <motion.div
                className="processo-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <FaCode className="processo-icon" />
                <h3>Design & Estrutura</h3>
                <p>Criação do layout, conceito visual e arquitetura do seu site ou identidade.</p>
              </motion.div>
              <motion.div
                className="processo-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <FaCheckCircle className="processo-icon" />
                <h3>Desenvolvimento</h3>
                <p>Codificação, implementação e testes rigorosos para garantir a qualidade.</p>
              </motion.div>
              <motion.div
                className="processo-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <FaRocket className="processo-icon" />
                <h3>Entrega & Suporte</h3>
                <p>Publicação do projeto e suporte pós-lançamento para sua tranquilidade.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ - EXPANDIDO E COM FORMATO MELHORADO */}
        <section className="faq">
          <div className="container">
            <h2>Dúvidas Frequentes</h2>
            <div className="faq-items-wrapper">
              <details className="faq-item">
                <summary>Você trabalha com plataformas como Nuvemshop e Wix?</summary>
                <p>Sim! Além de criar sites do zero com código, também configuro, otimizo e personalizo sua loja em plataformas como Nuvemshop, Wix, Loja Integrada, entre outras. A escolha da plataforma dependerá da sua necessidade específica.</p>
              </details>
              <details className="faq-item">
                <summary>Também faz sites por código?</summary>
                <p>Sim, e esse é um dos meus grandes diferenciais! Desenvolvo sites 100% personalizados, otimizados para alta performance, SEO e escalabilidade, garantindo que seu projeto seja único e com o melhor desempenho.</p>
              </details>
              <details className="faq-item">
                <summary>Oferece pacotes promocionais?</summary>
                <p>Sim, temos combos flexíveis que podem incluir criação de site, identidade visual completa, e até estratégias de tráfego pago. Entre em contato para conversarmos sobre suas necessidades e montarmos um pacote sob medida para você!</p>
              </details>
              <details className="faq-item">
                <summary>Qual o prazo de entrega de um projeto?</summary>
                <p>O prazo varia de acordo com a complexidade e escopo do projeto. Após o briefing detalhado, consigo te dar uma estimativa mais precisa. Meu compromisso é entregar um trabalho de alta qualidade dentro de um prazo realista.</p>
              </details>
              <details className="faq-item">
                <summary>Como funciona o pagamento?</summary>
                <p>Geralmente, o pagamento é dividido em etapas, com uma parte inicial para dar andamento ao projeto e o restante na entrega. Aceitamos diversas formas de pagamento para sua comodidade. Detalhes são alinhados no orçamento.</p>
              </details>
            </div>
          </div>
        </section>

        {/* CONTATO - BOTÃO AJUSTADO */}
        <section className="contato" id="contato">
          <div className="container">
            <h2>Transforme seu projeto</h2>
            <p>Entre em contato agora mesmo e vamos criar algo incrível juntos.</p>
            <a
              className="btn whatsapp"
              href="https://wa.me/SEUNUMERO"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}