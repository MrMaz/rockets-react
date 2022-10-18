import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

type Props = {
  isLeftSide: boolean;
};

export const IconContainer = styled(Box)<Props>(({ isLeftSide }) => ({
  display: 'flex',
  marginRight: isLeftSide ? '8px' : '-4px',
  marginLeft: isLeftSide ? '-4px' : '8px',
}));
