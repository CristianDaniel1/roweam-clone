import { NavLink } from 'react-router-dom';
import { UserIcon } from './icons/UserIcon.tsx';
import { CartButton } from './cart/CartButton.tsx';

export const Navigation = () => {
  return (
    <nav className="mx-4 sm:mx-0">
      <ul className="flex items-center gap-12 uppercase font-medium tracking-wider text-secundary opacity-80 text-sm">
        <li>
          <NavLink to="/shop" className="relative border-anime">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/collections" className="relative border-anime">
            Collections
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="relative border-anime">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
            <UserIcon className="inline-block mr-1" />
            <span className="relative border-anime">Login</span>
          </NavLink>
        </li>
        <li>
          <CartButton />
        </li>
      </ul>
    </nav>
  );
};
