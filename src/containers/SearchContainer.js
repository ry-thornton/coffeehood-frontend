import React from 'react'
import ShopCard from '../components/ShopCard.js'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
class SearchContainer extends React.Component{
    state={
        shops: []
    }

    componentDidMount(){
        fetch(`https://developers.zomato.com/api/v2.1/search?lat=${this.props.lat}&lon=${this.props.lon}&establishment_type=1&apikey=d867fa503de492da9df396f5f2fbb9c6` )
        .then(response => response.json())
        .then(data => this.setState({shops: data["restaurants"]}))
    }
    


    render(){
        console.log(this.state.shops)
    
        return (
        <Container>
        <Col>
         {this.state.shops.map(shop => <ShopCard key={shop["restaurant"]["id"]} id={shop["restaurant"]["id"]} name={shop["restaurant"]["name"]}  phone_numbers={shop["restaurant"]["phone_numbers"]} address={shop["restaurant"]["location"]["address"]} image={shop["restaurant"]["featured_image"]} tags={shop["restaurant"]["highlights"] } hours={shop["restaurant"]["timings"]}/>)}
         </Col>
         <Col>
            <div id={'map_container'}>

            </div>
         </Col>

         </Container>


    
         ) }
}

export default SearchContainer