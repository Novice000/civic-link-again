interface LatestUpdatesProps {
  heading: string;
  image: string;
  tag: string;
  title: string;
}

function LatestUpdates({ heading, image, tag, title }: LatestUpdatesProps) {
  return (
    <div className="shadow-2xl  rounded-[6px] overflow-x-hidden">
      <img src={image} alt={`An image of ${image}`} />
      <div className="h-[110px] px-4 flex flex-col gap-2 pt-3">
        <p className="">{heading}</p>
        <div>
          <button className="bg-tag px-4 ">{tag}</button>
        </div>
        <p className="font-bold">{title}</p>
      </div>
    </div>
  );
}

export default LatestUpdates;
