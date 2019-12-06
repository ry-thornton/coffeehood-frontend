import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import HoursButton from './HoursButton.js';



class ShopCard extends React.Component {
    render (){
        return (
            <div className="Shop-card">
            <Card style={{ width: "18rem"}}>
                <Card.Img variant="top" src={this.props.image}  />
                <Card.Body>
                <Card.Title>{this.props.name}</Card.Title>
               <Card.Text>
                {this.props.address}
               </Card.Text>
                <br/>
                <Card.Text>
                {this.props.phone_numbers}
                </Card.Text>
                <HoursButton hours={this.props.hours}/>
                <Card.Text>
        {this.props.tags.map((tag) => <Badge variant="light">{tag}</Badge> )}
                </Card.Text>
                </Card.Body>
              {/* <Button variant="primary">Favorite</Button> */}
            </Card>
            </div>
        )
    }
}



export default ShopCard