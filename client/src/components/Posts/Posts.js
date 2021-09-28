import React from 'react';
import {Grid, CircularProgress} from '@material-ui/core';
import Post from './Post/Post'
import useStyles from './styles'
import { useSelector } from 'react-redux';


const Posts = ({setCurrentName})=>{
    const volcanoes = useSelector((state)=> state.posts)
    const classes = useStyles();
    return (
       !volcanoes.length ? <CircularProgress /> : (
           <Grid className= {classes.containter} container alignItems='stretch' spacing='5'>
               {volcanoes.map((volcano)=>(
                   <Grid key={volcano._id} item xs={12} sm={6}>
                       <Post volcano={volcano} setCurrentName={setCurrentName} />
                   </Grid>

               ))}
           </Grid>
       )
    )
}

export default Posts;