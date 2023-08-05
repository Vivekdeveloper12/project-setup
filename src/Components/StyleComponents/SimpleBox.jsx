import { Card } from '@mui/material';
import { styled } from '@mui/system';;

const CardRoot = styled(Card)(({substyle}) => ({
  ...substyle,
  width:'100%',
  overflow:'auto',
  borderRadius:'10px',
  margin:'20px 0' 
}));

const SimpleBox = ({ children, style }) => {
  return (
    <CardRoot elevation={6} substyle={style}>
      {children}
    </CardRoot>
  );  
};

export default SimpleBox;
