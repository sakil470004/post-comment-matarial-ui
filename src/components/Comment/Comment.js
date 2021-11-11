// import * as React from 'react';
import React from 'react';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import './Comment.css'
import Avatars from '../Avatars/Avatars';

const Comment = (props) => {

    //for pic you should follow avater section in react

    const { email, body } = props.comment
    return (
        <div className='singleCommentStyle'>
            <Card variant="outlined" //sx={{ maxWidth: 345 }}
            >

                <CardContent>

                    <div style={{display:'flex'}}>

                        <Avatars />


                        <Typography gutterBottom variant="h5" component="div">

                         ""   {email}

                        </Typography>

                    </div>

                    <Typography variant="body2" color="text.secondary">
                        {body}
                        
                    </Typography>
                </CardContent>
                <CardActions>
                    {/* {console.log("i am here")} */}
                </CardActions>
            </Card>
        </div>
    );
}
export default Comment;