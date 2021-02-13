import React, { useState, useEffect } from 'react';
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    TextField,
} from '@material-ui/core';
import UserAuthDialog from './UserAuthDialog';

export default function LoginCard({ useStyles }) {
    const {
        root,
        brand,
        auto,
        arbiTrader,
        buttons,
        logo
    } = useStyles();;
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
        <>
            <UserAuthDialog
                open={authDialogOpen}
                handleDialogClose={handleDialogClose}
            />
            <Card className={root}>
                <CardContent>
                    <div className={brand}>
                        <img src="https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true" alt="logo" className={logo} />
                        <Typography variant="h5" noWrap>
                            <span className={auto}>auto</span> <span className={arbiTrader}>arbi-trader</span>
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
                <CardActions className={buttons}>
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
        </>
    )
};
