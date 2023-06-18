import noImg from "../../assets/images/no-img.jpg";

export type PostHeaderProps = {
  header: string;
  subheader: string;
  image?: {
    src: string;
    alt: string;
    height: number;
    width: number;
    loading: "lazy" | "eager";
    classNames?: string;
  };
  classNames?: string;
};

export default function PostHeader({ props }: { props: PostHeaderProps }) {
  const { classNames, header, subheader, image } = props;

  return (
    <div className={`${classNames ? classNames : ""} grid gap-4`}>
      <div>
        <h1 className="text-6xl font-semibold">{header}</h1>
        <p className="text-xl pl-1">{subheader}</p>
      </div>
      {image ? (
        <div className="max-h-[60rem] w-full grid place-content-center">
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
      ) : (
        <></>
      )}
    </div>
  );
}
