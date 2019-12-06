import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


const ShopIcon = (props) => {

    const popover = (
        <Popover>
            <Popover.Content>
                {props.shopName}
                <br/>
                {props.shopAddress}
            </ Popover.Content>
        </Popover>
    ) 

    return (
        <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
            <svg version="1.1" id="cafe-15" xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 15 15">
                 <path d="M12,5h-2V3H2v4c0.0133,2.2091,1.8149,3.9891,4.024,3.9758C7.4345,10.9673,8.7362,10.2166,9.45,9H12c1.1046,0,2-0.8954,2-2&#xA;&#x9;S13.1046,5,12,5z M12,8H9.86C9.9487,7.6739,9.9958,7.3379,10,7V6h2c0.5523,0,1,0.4477,1,1S12.5523,8,12,8z M10,12.5&#xA;&#x9;c0,0.2761-0.2239,0.5-0.5,0.5h-7C2.2239,13,2,12.7761,2,12.5S2.2239,12,2.5,12h7C9.7761,12,10,12.2239,10,12.5z"/>
            </svg>
        </OverlayTrigger>

    )
}

export default ShopIcon