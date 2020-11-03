import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ImgBrand = styled.img`
  max-height: 40px;
`;

export const BoxHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const BoxCart = styled(Link)`
  display: flex;
  margin-right: 50px;
  cursor: pointer;
  transition: color 0.2s;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  text-decoration: none;
  >span{
    font-size: 12px;
  }
  &:hover{
    color: #81ad7d;
  }
`;

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minHeight: 64,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#292c32',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));
