export type ProjectItemsProps = {
  id: number;
  src: string;
  alt: string;
  title: string;
  caption: string;
  link: string;
};

export default function ProjectGrid({ props }: { props: ProjectItemsProps[] }) {
  const { photos } = props;
  return (
    <div className="photo-gallery">
      {photos.map((photo) => (
        <GalleryItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
