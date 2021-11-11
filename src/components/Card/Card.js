// import * as React from 'react';
import React from 'react';
import Card from '@mui/material/Card';
import { useHistory} from "react-router-dom";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MediaCard = (props) => {
  const {  id, title} = props.singlePost;
  // console.log(props.singlePost)
  // const name = props.singlePost.name;
  
  let history = useHistory();
  const handleMoreButton = () => {
   let  url =`/post/${id}`
    history.push(url);
  }


  return (
    <div className='card-wrapper'>
      <Card variant="outlined" //sx={{ maxWidth: 345 }}
      >
        {/* <CardMedia
        component="img"
        height="140"
         image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> */

        }
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
            {/* sunt aut facere repellat provident occaecati excepturi optio reprehenderit */}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
        quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto
        </Typography> */}
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            size="small">Comment</Button>
          <Button
            variant="outlined"
            onClick={handleMoreButton}
            size="small">More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default MediaCard;