import React from 'react';
import { Card, CardContent, Typography } from '@mui/material'; 
import { withStyles } from '@mui/styles';

const styles = {
    title: {
        fontSize: 20,
        fontFamily: 'Lobster',
        fontWeight: 'bold'
    },
    card: {
        backgroundColor: 'blue'
    }
}


const WeekCard = (props) => {
    const { data, classes } = props;//const classes = props.classes
    return (
        <div>
            {data.map(info => {
                return (
                    <div>
                        <Card className={classes.card}>
                            <CardContent className={classes.card}>
                                <Typography className={classes.title}>
                                    sign up form
                                </Typography>

                                <Typography component="p" color='textSecondary'>Name : {info.name}</Typography>
                                <Typography component="p" color='textSecondary'>  Contact Number : {info.contactNumber}</Typography>
                                <Typography component="p" color='textSecondary'> age : {info.age}</Typography>
                                <Typography component="p" color='textSecondary'> Designation: {info.designation}</Typography>
                            </CardContent>
                        </Card>

                    </div>)
            })}
        </div>
    )


}

export default withStyles(styles)(WeekCard);