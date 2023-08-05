import { Card } from '@mui/material';
import { display, styled } from '@mui/system';;

const CardRoot = styled('div')(({substyle}) => ({
  ...substyle,
  width:'100%',
  overflow:'auto',
  padding: '30px',
  display: 'grid',
}));

const CardContainer = ({ children, style }) => {
  return (
    <CardRoot elevation={6} substyle={style}>
      {children}
    </CardRoot>
  );  
};

export default CardContainer;
