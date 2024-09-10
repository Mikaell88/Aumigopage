import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Au-migo</h1>
        <p>Conectando você a passeadores de cães confiáveis.</p>
        <img src={`${process.env.PUBLIC_URL}/Pet1.png`} alt="Minha Imagem" className="img" />
      </header>
      <main className="main-content">
        <section className="section">
          <h2>O Problema</h2>
          <p>Na correria do dia a dia, muitos donos de cães têm dificuldade em encontrar passeadores confiáveis e disponíveis. A busca por um serviço de qualidade pode ser desafiadora, especialmente quando é necessário de última hora.</p>
        </section>
        <section className="section">
          <h2>A Solução</h2>
          <p>Com o Au-migo, você encontra passeadores de cães de confiança de maneira rápida e prática. Com nosso aplicativo, você pode:</p>
          <ul>
            <li>Buscar passeadores disponíveis em tempo real na sua área.</li>
            <li>Agendar passeios com flexibilidade, seja antecipadamente ou de última hora.</li>
            <li>Acompanhar o progresso do passeio em tempo real para garantir a segurança do seu pet.</li>
            <li>Escolher passeadores com base em avaliações e feedback de outros usuários.</li>
          </ul>
        </section>
        <section className="section">
          <h2>Colaboradores</h2>
          <ul>
            <li>Mikael Sousa Bueno</li>
            <li>Leonardo Peron Krause</li>
            <li>Willian Scheuermann</li>
            <li>Giordano Cerutti Cassini</li>
            <li>Riskala Tedoldi</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;



