import { Button, MenuItem } from "@mui/material";
import { styled, css } from '@mui/material/styles';

export const SelectButton = styled(Button)`
  justify-content: space-between;
  width: 200px;
`;

export const SelectIconWrapper = styled('span')`
  display: inline-flex;
  margin-right: -5px;
`

export const SearchFieldWrapper = styled('div')`
  display: flex;
  position: relative;
`;

export const SearchFieldIconWrapper = styled('div')`
  position: absolute;
  right: 0;
  top: 4px;
`;

export const SelectMenuItem = styled(MenuItem)`
  ${({ depth }) => depth && css`
      padding-left: ${depth * 10}px;
    `
  }
`