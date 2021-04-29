import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth/Auth';

const MenuComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { authenticated } = useAuth();
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigateHome = () => {
    history.push('/');
  };
  const navigateFavorites = () => {
    history.push('/favorites');
  };
  return (
    <div>
      <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {authenticated ? (
          <div>
            <MenuItem onClick={navigateHome}>Home</MenuItem>
            <MenuItem onClick={navigateFavorites}>Favorites</MenuItem>
          </div>
        ) : (
          <MenuItem onClick={navigateHome}>Home</MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default MenuComponent;
