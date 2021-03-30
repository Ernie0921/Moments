import React, { useEffect } from 'react';

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'; //importing components 
//Container = container 
//AppBar is similar to nav bar
//Typography  - used for h1-h6 or p tags

import { useDispatch } from 'react-redux' // lets you dispach an action 
import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import dispo from './images/dispo.png';
import useStyles from './style'

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxidth="lg">

            <AppBar  className={ classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center" >Moments</Typography>
                <img className={ classes.image} src={ dispo } alt="moments" height="80"/>
            </AppBar>

            <Grow in> 
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        
        </Container>
    )
}

export default App;