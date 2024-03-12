import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import BalanceIcon from '@mui/icons-material/Balance';

const pages = ['Creation', 'Colour', 'Shape', 'Feedback'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }; 

    return (
        <AppBar position="static" >
            <Container maxWidth="x1">
                <Toolbar disableGutters>
                    <BalanceIcon sx={{ display: {xs:'none', md:'flex'}, mr: 1}} />
                    <Typography
                    variant='h6'
                    noWrap
                    component='a'
                    href='#app-bar-with-responsive-menu'
                    sx={{
                        mr: 2,
                        display: {xs:'none', md:'flex'},
                        fontFamily: 'sans-serif',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                    >
                        All Weight is Beautiful 
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: {xs: 'flex', md:'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit" >
                                <MenuIcon />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',

                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: {xs:'block', md:'none'},
                        }} >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> 
                    <BalanceIcon sx={{ display: {xs:'flex', md:'none'}, mr: 1}} />
                    <Typography
                    variant='h5'
                    noWrap
                    component='a'
                    href='#app-bar-with-responsive-menu'
                    sx={{
                        mr: 2,
                        display: {xs:'flex', md:'none'},
                        fontFamily: 'sans-serif',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                    >
                        All Weight is Beautiful 
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: {xs: 'none', md:'flex'}}}>
                    {pages.map((page) => (
                        <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block '}}
                        >
                            {page}
                        </Button>
                    ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}



export default function Navbar(){
    return (
        <nav>
        <ResponsiveAppBar />
      </nav>
    );
}