import React, { forwardRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Message.css';


const Message = forwardRef(({message, username}, ref) => {
    const isUser = username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography color="white" variant="h5" component="h2">
                        {!isUser && message.username + ": "} {message.message}
                    </Typography>
                    
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
