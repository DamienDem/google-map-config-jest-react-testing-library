import { AiOutlineSearch } from "react-icons/ai";
const Header = () => {
  return (
    <div className="flex space justify-between p-2.5 bg-sky-700">
      <h1 className="whitespace-nowrap text-white"> Travel Advisor</h1>
      <div className="flex">
        <h3 className="whitespace-nowrap text-white">Explore new places</h3>
        <div className="relative">
          <AiOutlineSearch className="absolute left-4 bottom-0.5 " />
          <input className="ml-3.5 pl-5" type="text" placeholder="Search place" />
        </div>
      </div>
    </div>
  );
};

export default Header;
