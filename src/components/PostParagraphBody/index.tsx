export type PostParagraphBodyProps = {
  classNames?: string;
  text: string;
};

export default function PostParagraphBody({
  props,
}: {
  props: PostParagraphBodyProps;
}) {
  const { classNames, text } = props;

  return (
    <>
      <p className={`${classNames ? classNames : ""} text-lg pl-1`}>{text}</p>
    </>
  );
}
