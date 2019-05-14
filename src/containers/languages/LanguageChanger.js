import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import language from '../../images/language.svg';
import Tooltip from '@material-ui/core/Tooltip';


const LanguageChanger = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () =>{
    setAnchorEl(null);
  }

  return (
    <div>
      <Tooltip 
        title="Change Language">
        <img src={language} onClick={handleClick} alt="lang"/>
      </Tooltip>
      <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>English</MenuItem>
        <MenuItem onClick={handleClose}>Acholi</MenuItem>
        <MenuItem onClick={handleClose}>Kiswahili</MenuItem>
      </Menu>
    </div>
  );
}

export default LanguageChanger;