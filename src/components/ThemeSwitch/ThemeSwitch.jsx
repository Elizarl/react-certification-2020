import React from 'react';
import styled from 'styled-components';
import 'material-icons';
import Switch from '@material-ui/core/Switch';
import { useGlobal } from '../../providers/GlobalContext/GlobalContext';

const ThemeSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;

const ThemeSwitch = () => {
  const { theme, setTheme } = useGlobal();
  return (
    <ThemeSwitchContainer>
      <span className="material-icons-outlined">light_mode</span>
      <Switch
        inputProps={{ 'aria-label': 'Switch A' }}
        checked={theme}
        onChange={(e) => setTheme(e.target.checked)}
      />
      <span className="material-icons-outlined">dark_mode</span>
    </ThemeSwitchContainer>
  );
};

export default ThemeSwitch;
