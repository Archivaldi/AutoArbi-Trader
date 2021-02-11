import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import UserAuthDialog from './UserAuthDialog';

export default function LoginCard({ useStyles }) {
    const classes = useStyles();;
    const [userRole, setUserRole] = useState(null);
    const [authDialogOpen, setAuthDialogOpen] = useState(false);

    const handleDialogOpen = () => {
        setAuthDialogOpen(true)
    };

    const handleDialogClose = () => {
        setAuthDialogOpen(false)
        setUserRole(null)
    };

    const handleUserSelection = (user) => {
        setUserRole(user)
    };

    useEffect(() => {
        userRole === 'seller' && handleDialogOpen()
    }, [userRole])

    return (
        <Card className={classes.root} variant="outlined">
            <UserAuthDialog
                open={authDialogOpen}
                handleDialogClose={handleDialogClose}
            />
            <CardContent>
                <div className={classes.brand}>
                    <img src="https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true" alt="logo" className={classes.logo} />
                    <Typography variant="h5" noWrap>
                        <span className={classes.auto}>auto</span> <span className={classes.arbiTrader}>arbi-trader</span>
                    </Typography>
                </div>
                {userRole == "buyer" ? (
                    <TextField
                        color="secondary"
                        id="standard-required"
                        label="Transaction ID"
                        required

                    />
                ) : (
                        <Typography variant="h6" color="textSecondary">
                            Welcome! What role will you be needing assistance in your transaction today?
                        </Typography>
                    )}
            </CardContent>
            <CardActions className={classes.buttons}>
                {userRole == "buyer" ? (
                    <>
                        <Button
                            size="large"
                            color="secondary"
                            onClick={() => handleUserSelection(null)}
                        >Go Back</Button>
                        <Button
                            size="large"
                            color="secondary"
                        >Submit</Button>
                    </>
                ) : (
                        <>
                            <Button
                                size="large"
                                color="secondary"
                                onClick={() => handleUserSelection("buyer")}
                            >Buying</Button>
                            <Button
                                size="large"
                                color="secondary"
                                onClick={() => handleUserSelection("seller")}
                            >Selling</Button>
                        </>
                    )}
            </CardActions>
        </Card>
    )
};
