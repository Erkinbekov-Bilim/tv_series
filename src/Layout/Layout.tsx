import Header from '../components/Header/Header';
import './Layout.css';
import React, { type PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="app container fixed-position-center">
      <Header />
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
