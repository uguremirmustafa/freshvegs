import React from 'react';
import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';
import { useRouter } from 'next/router';
export default function Layout({ children }) {
  const router = useRouter();
  console.log(router.pathname);
  const isHome = router.pathname === '/';
  return (
    <div>
      <Navbar isHome={isHome} />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
