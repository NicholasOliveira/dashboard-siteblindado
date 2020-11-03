import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const drawerWidth = 240;

export const ImgBrand = styled.img`
  max-height: 40px;
`;

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  listitemIco: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0px',
  },
  listitemText: {
    paddingLeft: '40px',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
}));
