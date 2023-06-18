import pfPhoto from "../../assets/images/pf-photo.jpg";

export default function HomeBanner() {
  return (
    <>
      <div className="grid justify-items-center gap-2 pt-10">
        <img
          className="rounded-full max-w-xs drop-shadow-md	"
          src={pfPhoto}
          alt="Lynh Tran profile picture"
          loading="eager"
          height={400}
          width={400}
        />
        <h1 className="text-6xl font-semibold tracking-tight text-gray-600 drop-shadow-md	">
          <span aria-hidden={true} className="wave">
            👋
          </span>{" "}
          Hi! I'm Lynh.
        </h1>
        <p className="text-3xl text-gray-600 text-center max-w-prose font-light">
          Thanks for checking out my website! I'm a front-end developer in the
          Greater Seattle Area who is passionate about creating seamless digital
          experiences.
        </p>
      </div>
    </>
  );
}
