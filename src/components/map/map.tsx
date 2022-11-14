import { GoogleMap, useLoadScript } from "@react-google-maps/api";
const Map = () => {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_KEY as string,
    libraries:["places"]
  });

  if(!isLoaded) return <div>Loading ...</div>
  return (
    <div className="w-full h-full">
    <GoogleMap zoom={14} center={{lat:50.63473, lng:3.08220}} mapContainerClassName="h-screen"></GoogleMap>
      </div>
  );
};

export default Map;
