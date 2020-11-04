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
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 10px;
  flex-wrap: wrap;
`;

export const Line = styled.div`
  background-color: #eee;
  margin: 10px 0px;
  padding: 20px;
  font-size: 18px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Button = styled.button`
  display: flex;
  max-width: 250px;
  justify-content: center;
  align-items: center;
  border: 0px;
  background-color: #65ad6f;
  color: #fff;
  font-size: 16px;
  text-align: right;
  align-self: flex-end;
  padding: 20px;
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
