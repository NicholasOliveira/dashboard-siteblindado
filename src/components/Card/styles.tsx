import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const Container = styled.div`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Row = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    margin: '10px',
  },
  media: {
    height: 140,
  },
}));
