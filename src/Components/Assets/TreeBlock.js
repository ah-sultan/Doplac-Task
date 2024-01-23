
const TreeBlock = ({ title }) => {
  return (
    <div className="bg-white p-5 w-[301px] flex items-start justify-center border border-gray rounded-[10px]">
      <span className="text-dark text-xs leading-[22px] font-semibold">
        {title}
      </span>
    </div>
  );
};

export default TreeBlock;
