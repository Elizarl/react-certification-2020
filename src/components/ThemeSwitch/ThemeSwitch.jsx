import React from 'react';
import styled from 'styled-components';
import 'material-icons';
import Switch from '@material-ui/core/Switch';

const ThemeSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;

const ThemeSwitch = ({ onChange }) => {
  return (
    <ThemeSwitchContainer>
      <span className="material-icons-outlined">light_mode</span>
      <Switch inputProps={{ 'aria-label': 'Switch A' }} onChange={onChange} />
      <span className="material-icons-outlined">dark_mode</span>
    </ThemeSwitchContainer>
  );
};

export default ThemeSwitch;
