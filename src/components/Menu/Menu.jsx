import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { useAuth } from '../../providers/Auth/Auth';

const MenuComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { authenticated } = useAuth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
            <MenuItem onClick={handleClose}>Home</MenuItem>
            <MenuItem onClick={handleClose}>Favorites</MenuItem>
          </div>
        ) : (
          <MenuItem onClick={handleClose}>Home</MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default MenuComponent;
