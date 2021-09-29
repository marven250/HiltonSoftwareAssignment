import React from 'react';
import { useDispatch } from 'react-redux';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit';
import { deleteVolcano } from '../../../api';
import useStyles from './styles'
import volcanoEruptPicture from './VolcanoErupt.png';import { getPosts } from '../../../actions/posts';
;



const Post = ({volcano, setCurrentName})=>{
    const classes = useStyles();
    const dispatch = useDispatch();

    const removeVolcano= (name)=>{
        deleteVolcano(name);
        dispatch(getPosts());
    }

    
    return (
       <Card className={classes.card}>
           <CardMedia className= {classes.media} image={volcanoEruptPicture} title={volcano.name} />
           <div className= {classes.overlay}>
                <Typography vartiant= 'h5'>Name: {volcano.name}</Typography>
                <Typography variant= 'h6'>Type: {volcano.type}</Typography>
           </div>
           <CardContent>
           <Typography className={classes.details} variant= "body2" color= 'textSecondary'>isActive: {volcano.isActive}</Typography>
                <Typography className={classes.details} variant= "body2" color= 'textSecondary'>Population: {volcano.population}</Typography>
                <Typography className={classes.details} variant='body2' color= 'textSecondary'>Description: {volcano.description}</Typography>
               <Typography className={classes.details} variant= "body2" color= 'textSecondary'>Discovered: {volcano.discovered}</Typography>
               <Typography className={classes.details} variant= "body2" color= 'textSecondary'>Latitude: {volcano.latitude}</Typography>
               <Typography className={classes.details} variant= "body2" color= 'textSecondary'>Longitude: {volcano.longitude}</Typography>
           </CardContent>
           <CardActions className= {classes.cardActions}>
               <Button size= 'small' color='primary' onClick={()=>{setCurrentName(volcano.name)}}>
                    <EditIcon />
                    Edit
               </Button>
               <Button size= 'small' color= 'secondary' onClick= {()=>{ removeVolcano(volcano.name);}}>
                    <DeleteIcon fontSize= 'small' />
                    Delete
               </Button>
           </CardActions>

       </Card>
    )
}

export default Post;