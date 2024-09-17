import { type ReactNode } from 'react';

interface FooterListProps {
  title: string;
  children: ReactNode;
}

export const FooterList = ({ title, children }: FooterListProps) => {
  return (
    <div>
      <div className="uppercase tracking-wider pb-6 text-[11px]">{title}</div>
      <ul className="flex flex-col gap-2">{children}</ul>
    </div>
  );
};
