import { AiOutlineSearch } from "react-icons/ai";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const Header = () => {

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleClick = async (address: any) => {
    setValue(address, false)
    clearSuggestions();

    const results = await getGeocode({ address });
    console.log(results);
    
    const { lat, lng } = await getLatLng(results[0]);
    console.log({lat, lng});
  }

  return (
    <div className="flex space justify-between p-2.5 bg-sky-700">
      <h1 className="whitespace-nowrap text-white"> Travel Advisor</h1>
      <div className="flex">
        <h3 className="whitespace-nowrap text-white">Explore new places</h3>
        <div className="relative">
          <AiOutlineSearch className="absolute left-4 bottom-0.5 " />
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={!ready}
            className="ml-3.5 pl-5"
            type="text"
            placeholder="Search place"
          />
         
            <div className=" absolute flex flex-col z-10">
              {status &&
                data.map(({ place_id, description }) => (
                  <div onClick={(e) => handleClick((e.target as any).outerText)} className="h-full w-full bg-white border-2 hover:bg-slate-200 cursor-pointer" key={place_id}> {description} </div>
                ))}
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Header;
