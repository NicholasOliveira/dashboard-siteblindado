import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 20px;
`;
export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  childrenRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(2),
      width: theme.spacing(22),
      height: theme.spacing(22),
    },
  },
  childrenRoot2: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  paper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  typograyCardsTitle: {
    fontSize: '16px',
    color: '#858383',
    textAlign: 'center',
    padding: '10px 0px 5px',
  },
  typograyCardsSubtitle: {
    fontSize: '14px',
    color: '#858383',
    textAlign: 'center',
  },
  typograyCardsValorUp: {
    fontSize: '22px',
    color: '#255f2a',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '10px 0px 5px',
  },
  typograyCardsValorDown: {
    fontSize: '22px',
    color: '#b91a1a',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '10px 0px 5px',
  },
}));
