import React from 'react';
import Details from './components/Details/Details';
import Main from "./components/Main/Main";
import {Grid} from '@material-ui/core';
import useStyles from './Styles';
import {PushToTalkButton,PushToTalkButtonContainer,ErrorPanel} from '@speechly/react-ui';


const App = () => {
    const classes = useStyles();
    const func=()=>{
      var context=new AudioContext();
      context.resume().then(()=>{
        console.log('Playbakc resumes');
      });
    }
    return (
      <div>
        <Grid
          className={classes.grid}
          container
          spacing={0}
          alignItems="center"
          justify="center"
          style={{ height: "100vh" }}
        >
          <Grid item xs={12} sm={4}>
            <Details title="Income" />
          </Grid>
          <Grid item xs={12} sm={3}>
             <Main/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Details title="Expense"/>
          </Grid>
        </Grid>
        <PushToTalkButtonContainer>
          <PushToTalkButton/>
          <ErrorPanel/>
        </PushToTalkButtonContainer>
      </div>
    );
}

export default App
