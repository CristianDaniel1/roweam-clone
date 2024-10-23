import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';

export const Error = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen text-center flex flex-col items-center justify-center mx-auto px-6 py-10 max-w-4xl">
        <h2 className="text-4xl lg:text-6xl text-secundary-light">
          Ops! Ocorreu um erro!
        </h2>
        <p className="text-2xl lg:text-4xl py-10 font-sans">
          A página que você está tentando acessar não existe, cheque a URL e
          tente novamente.
        </p>
      </div>
      <Footer />
    </>
  );
};
