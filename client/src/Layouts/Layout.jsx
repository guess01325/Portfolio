import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}