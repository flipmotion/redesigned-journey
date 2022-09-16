import { memo } from "react";
import { func, string } from 'prop-types';
import { MenuItem, Input } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import * as Styled from './Style';

export const SelectSearchBar = memo(({
  onChange,
  value,
}) => {
  const handleonKeyDown = e => e.stopPropagation();

  return (
    <MenuItem disableTouchRipple onKeyDown={handleonKeyDown}>
      <Styled.SearchFieldWrapper>
        <Input
          placeholder="type for search..."
          onChange={onChange}
          value={value}
        />
        <Styled.SearchFieldIconWrapper>
          <SearchIcon />
        </Styled.SearchFieldIconWrapper>
      </Styled.SearchFieldWrapper>
    </MenuItem>
  );
});

SelectSearchBar.propTypes = {
  onChange: func.isRequired,
  value: string.isRequired,
}
