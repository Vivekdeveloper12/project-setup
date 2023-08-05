import { Card } from '@mui/material';
import { styled } from '@mui/system';

const CardRoot = styled('div')(() => ({
  width:'100%',
  height: '50px',
  borderBottom:'1px solid #12673c',
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
  padding: '0 20px',
}));

const CardTitle = styled('div')(({ subtitle }) => ({
    fontSize: '1.5rem',
    fontWeight: '500',
    textTransform: 'capitalize',
    marginBottom: !subtitle && '16px',
  }));

const Header = ({ children, title }) => {
  return (
    <CardRoot elevation={6}>
      <CardTitle subtitle={title}>{title}</CardTitle>
      {children}
    </CardRoot>
  );
};

export default Header;
