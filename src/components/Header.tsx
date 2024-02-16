import { NavLink } from 'react-router-dom';
import { Navigation } from './Navigation.tsx';

export const Header = () => {
  return (
    <header className="bg-primary-light h-[65px] font-sans fixed w-full shadow z-50">
      <div className="flex justify-between items-center h-full max-container px-10 2xl:px-0">
        <NavLink to="/" className="text-[2.1rem] font-semibold tracking-wider">
          ROWEAM
        </NavLink>
        <Navigation />
      </div>
    </header>
  );
};
