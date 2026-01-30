import Header from '../components/Header/Header';
import './Layout.css';
import React, { type PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className='container'>
      <Header/>
      <main className='main'>
        {children}
      </main>
    </div>
  );
};

export default Layout;
