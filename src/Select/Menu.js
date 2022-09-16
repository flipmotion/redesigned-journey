import { Menu } from "@mui/material";
import { array, string, func, bool, object } from 'prop-types';

import {SelectSearchBar} from './index';
import * as Styled from './Style';

export const SelectDropDownMenu = ({
  options,
  selectedItem,
  anchorEl,
  isOpen,
  searchText,
  onClose,
  onChange,
}) => {
  console.log(anchorEl);
  return (
    <Menu
      keepMounted
      anchorEl={anchorEl}
      open={isOpen}
      onClose={onClose}
    >
      <SelectSearchBar
        onChange={onChange}
        value={searchText}
      />
      {options.map(({ label, value, depth }) => {
        return (
          <Styled.SelectMenuItem
            key={value}
            onClick={onClose}
            disableTouchRipple
            selected={selectedItem === label}
            depth={depth}
          >
            {label}
          </Styled.SelectMenuItem>
        );
      })}
    </Menu>
  );
}

SelectDropDownMenu.propTypes = {
  options: array.isRequired,
  selectedItem: string.isRequired,
  anchorEl: object,
  isOpen: bool.isRequired,
  searchText: string.isRequired,
  onClose: func.isRequired,
  onChange: func.isRequired,
}
