import { memo } from "react";
import { func, string, bool } from 'prop-types';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import * as Styled from './Style';

export const SelectButton = memo(({
  onClick,
  selectedItem,
  isOpen,
}) => {
  return (
    <Styled.SelectButton
      disableTouchRipple
      onClick={onClick}
      variant='outlined'
      color='inherit'
    >
      <span>{selectedItem}</span>
      <Styled.SelectIconWrapper>
        {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </Styled.SelectIconWrapper>
    </Styled.SelectButton>
  )
});

SelectButton.propTypes = {
  onClick: func.isRequired,
  selectedItem: string.isRequired,
  isOpen: bool.isRequired,
}
