// import * as React from 'react';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CommentAll from '../CommentAll/CommentAll'
import Comment from '../Comment/Comment'

const CardDetails = (props) => {
    const [singlePost, setSinglePost] = useState({})

    const { postId } = useParams()

    let history = useHistory();

    const handleCommentsButton = () => {
        // setCommentsOn(true)
    }
    const handleGoBackButton = () => {
        history.push("/");
    }


    useEffect(() => {
        //get the current post
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => {
                setSinglePost(data);

            });


    }, [postId])

    const { userId, id, title, body } = singlePost
    return (
        <div className='card-detail-comment-wraper'>
            <Card variant="outlined" //sx={{ maxWidth: 345 }}
            >

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" size="small"
                        onClick={handleGoBackButton}
                    >Go Back</Button>
                    <Button
                        variant="outlined"
                        onClick={handleCommentsButton}
                        size="small">Comments</Button>
                </CardActions>

            </Card>
            <div className='commentAllStyle'>
                <CommentAll />
            </div>
        </div>
    );
}
export default CardDetails;