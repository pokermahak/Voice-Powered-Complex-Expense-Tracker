import React ,{useContext} from 'react';
import {Card,CardHeader,CardContent,Typography,Grid,Divider} from '@material-ui/core';
import useStyles from './Styles';
import {ExpenseTrackerContext} from '../../context/context';
import Form from './Form/Form';
import List from './List/List';
const Main = () => {
    const classes=useStyles();
    const {balance} = useContext(ExpenseTrackerContext)
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered By Speechly"/>
            <CardContent>
                <Typography align="center" variant="h5">Total Balance ${balance}</Typography>
                <Typography variant="subtitle1" style={{lineHeight:'1.5em',marginTop :'20px'}}>
                    Try SAYING "ADD 100$" in Category Salary for monday
                </Typography>
                <Divider/>
                <Form/>
            </CardContent>
            <CardContent className={classes.cartContent}>
                 <Grid container spacing={2}>
                   <Grid item xs={12}>
                        <List/>
                   </Grid> 
                </Grid>

            </CardContent>
        </Card>
    )
}

export default Main
