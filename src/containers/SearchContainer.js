import React from 'react'
import ShopCard from '../components/ShopCard.js'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import MapContainer from './MapContainer.js';
import '../App.css'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'


class SearchContainer extends React.Component{
   state = {
shops: [],
      };

    componentDidMount(){
        fetch(`https://developers.zomato.com/api/v2.1/search?lat=${this.props.lat}&lon=${this.props.lon}&establishment_type=1&sort=real_distance&apikey=d867fa503de492da9df396f5f2fbb9c6` )
        .then(response => response.json())
        .then(data => this.setState({shops: data["restaurants"]}))
    }
    search = (lat, lon) => { 
      fetch(`https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${lon}&establishment_type=1&sort=real_distance&apikey=d867fa503de492da9df396f5f2fbb9c6`)
      .then(response => response.json())
      .then(data => this.setState({shops: data["restaurants"]}))
    }

    render(){
        console.log(this.state.shops)    
        return (
        <div className="Container">
        <Container>
          <Row>
            <Col>
              <div className="Search-column">
                {this.state.shops.map( shop => <ShopCard key={shop["restaurant"]["id"]} id={shop["restaurant"]["id"]} name={shop["restaurant"]["name"]}  phone_numbers={shop["restaurant"]["phone_numbers"]} address={shop["restaurant"]["location"]["address"]} image={shop["restaurant"]["featured_image"]} tags={shop["restaurant"]["highlights"] } hours={shop["restaurant"]["timings"]}/>)}
              </div>
            </Col> 
            <Col>
              <div className="Search-column">   
                <MapContainer lat={this.props.lat}   lon={this.props.lon}  shops={this.state.shops} search={this.search}/>
              </div>
            </Col> 
          </Row>
        </Container>
        </div>
    ) }
}

export default SearchContainer

//<ListGroup>
  //      {this.state.shops.map(shop => <div><ListGroup.Item>{shop["restaurant"]["name"]}</ListGroup.Item> <br/></div>)}
    //            </ListGroup>

//<ShopCard key={shop["restaurant"]["id"]} id={shop["restaurant"]["id"]} name={shop["restaurant"]["name"]}  phone_numbers={shop["restaurant"]["phone_numbers"]} address={shop["restaurant"]["location"]["address"]} image={shop["restaurant"]["featured_image"]} tags={shop["restaurant"]["highlights"] } hours={shop["restaurant"]["timings"]}/>)