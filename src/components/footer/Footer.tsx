import { footerLinks } from '../../constants/data.ts';
import { FooterList } from './FooterList.tsx';
import { FooterListItem } from './FooterListItem.tsx';

export const Footer = () => {
  return (
    <footer className="bg-secundary-light text-primary-light font-sans">
      <div className="relative pt-4 after:border after:border-primary after:w-full after:absolute after:opacity-70">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 text-xs p-6 pb-10 sm:p-10 lg:px-20">
          <FooterList title="shop">
            {footerLinks.shopLinks.map(infoLink => (
              <FooterListItem key={infoLink} text={infoLink} linkTo="shop" />
            ))}
          </FooterList>
          <FooterList title="customer">
            {footerLinks.customerLinks.map(infoLink => (
              <FooterListItem key={infoLink} text={infoLink} linkTo="about" />
            ))}
          </FooterList>
          <FooterList title="company">
            {footerLinks.companyLinks.map(infoLink => (
              <FooterListItem key={infoLink} text={infoLink} linkTo="about" />
            ))}
          </FooterList>
          <FooterList title="connect">
            {footerLinks.connectLinks.map(infoLink => (
              <FooterListItem key={infoLink} text={infoLink} linkTo="about" />
            ))}
          </FooterList>
          <div className="uppercase tracking-wider text-4xl lg:flex lg:items-end lg:justify-end -order-1 col-span-2 sm:col-span-1 sm:order-5">
            Roweam
          </div>
        </div>
      </div>
      <div className="uppercase text-[11px] tracking-wide p-6 sm:p-10 lg:px-20 font-medium flex gap-6 justify-center sm:justify-between flex-wrap">
        <p>
          <a href="https://github.com/CristianDaniel1" target="_blank">
            Clone made by Cristian Daniel
          </a>
        </p>
        <p>
          <a href="https://nicepeople.com/" target="_blank">
            Original Design Made by Nice People
          </a>
        </p>
      </div>
    </footer>
  );
};
