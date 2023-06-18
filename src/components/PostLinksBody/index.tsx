export type PostLinksBodyProps = {
  classNames?: string;
  links: {
    href: string;
    text: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
  }[];
};

export default function PostLinksBody({
  props,
}: {
  props: PostLinksBodyProps;
}) {
  const { classNames, links } = props;
  return (
    <ul>
      {links.map(link => (
        <li>
          <a href={link.href}>{link.text}</a>
        </li>
      ))}
    </ul>
  );
}
