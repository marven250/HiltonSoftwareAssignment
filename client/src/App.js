import React, {useState, useEffect} from 'react';
import './App.css'
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from './components/Pagination/Pagination';
import {getPosts } from './actions/posts'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form'
import Volcano from './assets/volcano.png'
import useStyles from './styles'

function App() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentName, setCurrentName] = useState(null);
      
    useEffect(()=>{
      dispatch(getPosts());
    }, [dispatch, currentName])

    
  return (
    <Container maxWidth= 'lg'>
      <AppBar className={classes.AppBar} position = 'static' color= 'inherit'>
        <Typography className={classes.heading} variant = 'h2' align= 'center'>
          Volcanoes
        </Typography>
        <img className= {classes.image} src={Volcano} alt='Volcanoes' height= '80'  />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify= 'space-between' alignItems= 'stretch' spacing= {3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentName={setCurrentName} />
           </Grid>
           <Grid item xs={12} sm={4}> 
            <Form currentName = {currentName} setCurrentName={setCurrentName} />
           </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
