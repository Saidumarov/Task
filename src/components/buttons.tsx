export default function ConnectBtn({ contet }: ButtonContent) {
  const { text, icon } = contet;
  return (
    <>
      <button className="w-full transition-all border-b-[2px] text-gray-800 text-[18px] font-[500]  shadow-sm border-[1.5px] py-2 px-4 rounded-full mb-4 flex items-center justify-center gap-2 hover:bg-[#fdfdfd] hover:border-[#00b8d930] ">
        {icon} {text}
      </button>
    </>
  );
}
