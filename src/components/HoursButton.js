import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';




const HoursButton = (props) => {
    const popover = (
        <Popover>
            <Popover.Content>
                {props.hours}
            </Popover.Content>
        </Popover>
    )

        return (
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <Button variant="light">Hours</Button>
            </OverlayTrigger>
        )
}

export default HoursButton