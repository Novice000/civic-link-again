interface AnnouncementsProps {
  image: string;
  title: string;
  number: number;
}

const Announcements: React.FC<AnnouncementsProps> = ({
  title,
  number,
  image,
}) => {
  return (
    <div className="flex items-start border border-[#0000001A] rounded-lg p-4 mt-6 max-w-md gap-2">
      <img src={image} alt="flag" />
      <div className="mt-2">
        <p className="font-bold tracking-wide text-xl mb-2">{title}</p>
        <div className="flex items-center gap-2">
          <p className="bg-[#D9D9D980] border border-[#0000001A] p-1 rounded">
            {number}
          </p>
          <p className="bg-[#D9D9D980] border border-[#0000001A] p-1 rounded">
            View details
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
