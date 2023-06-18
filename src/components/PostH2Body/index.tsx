export type PostH2BodyProps = {
  classNames?: string;
  header: string;
  text: string;
};

export default function PostH2Body({ props }: { props: PostH2BodyProps }) {
  const { classNames, header, text } = props;
  return (
    <div className={classNames ? classNames : ""}>
      <h2 className="text-3xl font-semibold">{header}</h2>
      <p className="text-lg pl-1">{text}</p>
    </div>
  );
}
