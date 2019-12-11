import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import ShopIcon from '../components/ShopIcon.js';

class MapContainer extends React.Component {
    state = {
    distanceChange: false,
        viewport: {
            width: 500,
            height: 500,
            latitude: this.props.lat,
            longitude: this.props.lon,
            zoom: 15
          },
        }

        //Promp search function - as user moves map the viewport in state changes
        //This function listens to those changes and prompts user to redo a search in a new area
        //if there is a significant change in distance
        //The the current latitude/longitude of the map is subtracted from the latitude/longitude of the map when it originally
        //rendered and if the absolute value of the difference is greater than a .003 change
        //the distanceChange in state is set to true which then provides the user with a button
        //that enables them to re search shops
        promptSearch = () => {
            return !this.state.distanceChange && ((Math.abs(this.props.lat - this.state.viewport.latitude)  > .003) || (Math.abs(this.props.lon - this.state.viewport.longitude) > .003)) ? this.setState({distanceChange: true}) : null 
        }



    render(){
        return (
            <div>
                {this.state.distanceChange ? <button onClick={() => this.props.search(this.state.viewport.latitude, this.state.viewport.longitude)}>Redo Search?</button> : null}
        
                 <ReactMapGL mapboxApiAccessToken={'pk.eyJ1IjoicnktdGhvcm50b24iLCJhIjoiY2szbmU5aDlnMXBjMTNtbjEwOWZlcWVkNSJ9.WCuk_dGb5kWgL0MPQB-qgw'}    {...this.state.viewport}    onViewportChange={(viewport) => this.setState({viewport}, () => {this.promptSearch()})  }>
                    {this.props.shops.map((shop) => (
                        <Marker latitude={parseFloat(shop["restaurant"]["location"]["latitude"])} longitude={parseFloat(shop["restaurant"]["location"]["longitude"])}>
                            <span><ShopIcon shopName={shop["restaurant"]["name"]} shopAddress={shop["restaurant"]["location"]["address"]} /></span> 
                        </Marker> ))}    
                </ReactMapGL>
            </div>

        )
    }
}

export default MapContainer