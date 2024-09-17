export const FooterListItem = ({
  linkTo,
  text,
}: {
  linkTo: string;
  text: string;
}) => {
  return (
    <li>
      <a href={`/${linkTo}`} className="hover:text-primary duration-200">
        {text}
      </a>
    </li>
  );
};
