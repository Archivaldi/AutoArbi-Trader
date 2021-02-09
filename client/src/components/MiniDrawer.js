import React, { useState } from 'react';
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

export default function MiniDrawer({ children, classes }) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src="https://raw.githubusercontent.com/Archivaldi/4wheelz/nextjswire/client/src/images/AutoArbiTraderLogo.png" alt="logo" className={classes.logo} />
                    <Typography variant="h6" noWrap>
                        <span className={classes.auto}>auto</span> <span className={classes.arbiTrader}>arbi-trader</span>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <Link href="/">
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
                    <ListItem button={true} disabled={true}>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText>Send In Forms</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button={true}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText>Sign Out</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    );
}