import { Card } from '@mui/material';
import { styled } from '@mui/system';

const CardRoot = styled(Card)(({substyle}) => ({
  ...substyle,
  overflow:'auto',
  width:'100%',
  height: '100%',
  padding: '30px',
  boxShadow: 'inset #787b7e 0px 2px 8px 0px;',
  margin:'auto',
}));

const SimpleCard = ({ children, style }) => {
  return (
    <CardRoot elevation={6} substyle={style}>
      {children}
    </CardRoot>
  );
};

export default SimpleCard;
