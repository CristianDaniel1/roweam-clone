import { Outlet } from 'react-router-dom';
import { Header } from '../components/header/Header.tsx';
import { Footer } from '../components/footer/Footer.tsx';
import ScrollToTop from '../components/ScrollToTop.tsx';
import { CartOpen } from '../components/CartOpen.tsx';

export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="relative overflow-x-clip">
        <CartOpen />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
