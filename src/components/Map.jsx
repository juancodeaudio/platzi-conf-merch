import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const Map = ({data}) => {

  const mapStyles = {
    height: '50vh',
    width: '100%'
  }

  const defaultCenter = {
    lat: data.lat,
    lng: data.lng
  }
  // const defaultCenter = {
  //   lat: 4.721729507325917,
  //   lng: -74.04533570466238
  // }

  return (
    <LoadScript googleMapsApiKey='AIzaSyCsuNdDLXydVywbO6faDIYDEEOX4r9dhxk'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={14}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map