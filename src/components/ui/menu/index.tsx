import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ListItemIcon from '@mui/material/ListItemIcon';

const ITEM_HEIGHT = 48;

interface CustomMenuProps {
  options: { icon: React.ReactNode; label: string }[];
  selected?: string;
  onSelect: (option: string) => void;
  icon?: React.ReactNode;
}

const CustomMenu: React.FC<CustomMenuProps> = ({
  options,
  selected,
  onSelect,
  icon = <MoreVertIcon />,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (option: string) => {
    onSelect(option);
    handleClose();
  };

  return (
    <>
      <IconButton
        aria-label='more'
        onClick={handleClick}
        aria-controls={open ? 'custom-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
      >
        {icon}
      </IconButton>
      <Menu
        id='custom-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
            },
          },
          list: {
            'aria-labelledby': 'custom-menu-button',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.label}
            selected={option.label === selected}
            onClick={() => handleItemClick(option.label)}
          >
            {option.icon && <ListItemIcon>{option.icon}</ListItemIcon>}
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default CustomMenu;
