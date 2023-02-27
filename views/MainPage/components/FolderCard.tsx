import Image from "next/image";

interface FolderCardProps {
  id: number;
  img_src: string;
  name: string;
  pushToSelectedGraph: (id: number) => void;
}

const FolderCard = ({
  id,
  img_src,
  name,
  pushToSelectedGraph,
}: FolderCardProps) => {
  return (
    <div
      onClick={() => pushToSelectedGraph(id)}
      className="folder-card cursor-pointer "
    >
      <div className="folder-card__icon  p-4">
        <Image width={200} height={200} src={img_src} alt="graph-image" />
      </div>

      <div className="folder-card__name font-press-start text-sm text-center">
        {name}
      </div>
    </div>
  );
};

export default FolderCard;
