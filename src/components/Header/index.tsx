import React from 'react';
import { useSelector } from 'react-redux';
import {
  AppBar,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';

import { Menu as MenuIcon, ShoppingCart } from '@material-ui/icons';

import { useStyles, ImgBrand, BoxHeader, BoxCart } from './styles';
import imageBrand from '../../assets/images/logo-site-blindado-transparent.png';

const Header = ({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen: any;
  setMobileOpen: any;
}) => {
  const classes = useStyles();
  const cartSize = useSelector((state: any) => state.Cart.length);

  function handleHeaderToggle() {
    mobileOpen ? setMobileOpen(false) : setMobileOpen(true);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open header"
            edge="start"
            onClick={handleHeaderToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <BoxHeader>
            <Typography variant="h6" noWrap>
              <ImgBrand src={imageBrand} />
            </Typography>
            <BoxCart to="/cart">
              <ShoppingCart />
              <span>
                (<strong>{cartSize}</strong> items)
              </span>
            </BoxCart>
          </BoxHeader>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
