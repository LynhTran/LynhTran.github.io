import noImg from "../../assets/images/no-img.jpg";

export type PostImageBodyProps = {
  classNames?: string;
  image?: {
    src: string;
    alt: string;
    height: number;
    width: number;
    loading: "lazy" | "eager";
    classNames?: string;
  };
};

export default function PostImageBody({
  props,
}: {
  props: PostImageBodyProps;
}) {
  const { image, classNames } = props;

  return (
    <div
      className={`${
        classNames ? classNames : ""
      } max-h-[60rem] w-full grid place-content-center`}
    >
      <img
        className={`${
          image?.classNames ? image?.classNames : ""
        } object-contain rounded-md shadow-md`}
        src={image?.src ? image?.src : noImg}
        alt={image?.alt ? image?.alt : "No image available"}
        height={image?.height ? image?.height : 208}
        width={image?.width ? image?.width : 400}
        loading={image?.loading ? image?.loading : "lazy"}
      />
    </div>
  );
}
