import { useEffect, useState, useCallback } from "react";
import { array } from 'prop-types';
import { Stack } from "@mui/material";

import { SelectButton, SelectDropDownMenu } from './index';

export const Select = ({
  options,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [selection, setSelection] = useState("");

  const preparedOptions = options.map(item => {
    const matchedOption = item.label.toLowerCase().includes(searchText.toLowerCase());

    if (matchedOption) {
      return item;
    }

    return null;
  }).filter(item => item !== null);

  const isOpen = !!anchorEl;

  useEffect(() => {
    setSelection(options[0].label);
  }, [options]);

  const handleClose = useCallback(({
    target: {
      innerText,
    },
  }) => {
    if (innerText !== selection && innerText !== '') {
      setSelection(innerText);
    }
    setSearchText('');
    setAnchorEl(null);
  }, [selection]);

  const handleMenuOpen = useCallback(({
    currentTarget,
  }) => {
    setAnchorEl(currentTarget);
  }, []);

  const handleSearchChange = useCallback(({
    target: {
      value = '',
    },
  }) => {
    setSearchText(value);
  }, []);

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="flex-end"
    >
      <SelectButton
        onClick={handleMenuOpen}
        selectedItem={selection}
        isOpen={isOpen}
      />
      <SelectDropDownMenu
        options={preparedOptions}
        selectedItem={selection}
        anchorEl={anchorEl}
        isOpen={isOpen}
        searchText={searchText}
        onClose={handleClose}
        onChange={handleSearchChange}
      />
    </Stack>
  );
};

Select.propTypes = {
  options: array.isRequired,
}

