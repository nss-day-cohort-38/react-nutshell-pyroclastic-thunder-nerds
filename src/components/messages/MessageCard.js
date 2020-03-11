import React from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
// import "./Message.css";


const MessageCard = (props) => {
    return (
        <div className="flex">
            <Card className="width" inverse style={{ backgroundColor: '#333', borderColor: 'green', border: '2px solid black' }}>
                <CardBody>
                    <CardTitle><strong></strong><span>{props.message.message}</span></CardTitle>
                    <p>{props.message.timestamp}</p>
                    <Button className="padding2" color="success" type="button" onClick={() => {
                        props.history.push(`/messages/${props.message.id}/edit`)
                    }}>
                        Edit
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default MessageCard