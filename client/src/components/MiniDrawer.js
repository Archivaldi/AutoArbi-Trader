import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import {
    Drawer,
    Toolbar,
    List,
    CssBaseline,
    Typography,
    Divider,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    AppBar
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MailIcon from '@material-ui/icons/Mail';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { authSteps } from '../utils/authSteps';
import { appRoute } from '../utils/appRoute';

export default function MiniDrawer({ children, classes, allDocsComplete }) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const { logout } = authSteps.route;
    const { userInfo } = appRoute;
    const [usersDocs, setUsersDocs] = useState([]);
    const [buttonDisplayed, setButtonDisplayed] = useState(true);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [apiCall, setApiCall] = useState(false);
    const [destoyAccountButton, setDestroyAccountButton] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleLogout = async () => {
        const res = await fetch(logout, {
            method: 'POST'
        })
        window.location.replace('/dashboard');
    }

    const destroyAccount = async () => {
        const res = await fetch('/api/typing-dna/destroyAccount', {
            method: 'POST'
        })
        window.location.replace('/dashboard');
    }

    const generateDeal = async () => {
        setApiCall(true)
        const res = await fetch("/api/anvil/createEtchSigh", {
            method: 'POST'
        });
        const { message, error } = await res.json();
        if (message || error) {
            window.location.reload();
        }
    };

    useEffect(() => {
        (async function getUserInformation() {
            const resTwo = await fetch(userInfo, {
                method: 'POST'
            })
            const userInform = await resTwo.json();
            setUsersDocs(userInform)
            console.log(userInform);
        })()
    }, []);

    useEffect(() => {
        (async function buildArr() {
            let completeArr = [];
            if (usersDocs.seller.title !== null){
                setDestoyAccountButton(true);
                console.log("IN the if statemnt");
                return;
            }
            if (usersDocs.buyer && usersDocs.seller) {
                for (const property in usersDocs.buyer) {
                    if (property === 'groupId') {
                        usersDocs.seller[property] !== null && setButtonDisplayed(false)
                    }
                    if (property === 'govId'
                    ) {
                        let completed = usersDocs.seller[property] !== null;
                        completeArr.push(completed)
                    }
                }
                for (const property in usersDocs.seller) {
                    if (property === 'groupId') {
                        usersDocs.seller[property] !== null && setButtonDisplayed(false)
                    }
                    if (property === 'govId') {
                        let completed = usersDocs.seller[property] !== null;
                        completeArr.push(completed)
                    }
                }
            }
            completeArr.forEach(item => {
                item && setButtonDisabled(false)
            })
        })()
    }, [usersDocs])

    console.log({destoyAccountButton});


    const {
        root,
        appBar,
        appBarShift,
        menuButton,
        hide,
        logo,
        auto,
        arbiTrader,
        drawer,
        drawerOpen,
        drawerClose,
        content,
        toolbar,
        exitIcon
    } = classes

    return (
        <div className={root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(appBar, {
                    [appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(menuButton, {
                            [hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src="https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true" alt="logo" className={logo} />
                    <Typography variant="h6" noWrap>
                        <span className={auto}>auto</span> <span className={arbiTrader}>arbi-trader</span>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(drawer, {
                    [drawerOpen]: open,
                    [drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [drawerOpen]: open,
                        [drawerClose]: !open,
                    }),
                }}
            >
                <div className={toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <Link href="/dashboard">
                        <ListItem button={true}>
                            <ListItemIcon>
                                <AutorenewIcon />
                            </ListItemIcon>
                            <ListItemText>View Progress</ListItemText>
                        </ListItem>
                    </Link>
                    <Link href="/upload">
                        <ListItem button={true}>
                            <ListItemIcon>
                                <CloudUploadIcon />
                            </ListItemIcon>
                            <ListItemText>Upload Documents</ListItemText>
                        </ListItem>
                    </Link>
                    {buttonDisplayed && (
                        <ListItem
                            button={true}
                            disabled={apiCall || buttonDisabled}
                            onClick={generateDeal}
                        >
                            <ListItemIcon>
                                <MailIcon color={buttonDisabled ? "primary" : "secondary"} />
                            </ListItemIcon>
                            <ListItemText>Send In Forms</ListItemText>
                        </ListItem>
                    )}
                    {destoyAccountButton && (
                        <ListItem
                            button={true}
                            onClick={destroyAccount}
                        >
                            <ListItemIcon>
                                <DeleteForeverIcon className={exitIcon} />
                            </ListItemIcon>
                            <ListItemText>Delete Forever</ListItemText>
                        </ListItem>
                    )}
                    <Divider />
                    <ListItem
                        button={true}
                        onClick={handleLogout}
                    >
                        <ListItemIcon>
                            <ExitToAppIcon className={exitIcon} />
                        </ListItemIcon>
                        <ListItemText>Sign Out</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <main className={content}>
                <div className={toolbar} />
                {children}
            </main>
        </div >
    );
}