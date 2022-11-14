import DetailCard from "../detailCard/detailCard";

const Sidebar = () => {
  const places = [
    { name: "test1" },
    { name: "test2" },
    { name: "test3" },
    { name: "test4" },
    { name: "test5" },
  ];
  return (
    <div className="p-2.5 max-w-[35%]">
      <h2 className="my-3.5 font-bold text-xl">
        Restaurants, Hotels & Attractions around you
      </h2>
      <div>
        <select>
          <option value="restaurants"> Restaurants</option>
          <option value="hotels"> Hotels</option>
          <option value="attractions">Attractions</option>
        </select>
        <select>
          <option value={0}> All</option>
          <option value={3}> Above 3.0</option>
          <option value={4}> Above 4.0</option>
          <option value={4.5}> Above 4.5</option>
        </select>
      </div>
      <div>
        <>
          {places?.map((place, i) => {
            return <DetailCard key={i} place={place} />;
          })}
        </>
      </div>
    </div>
  );
};

export default Sidebar;
