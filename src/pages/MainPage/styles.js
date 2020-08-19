// import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  rootDiv: {
    height: '100vh',
    background: theme.palette.background.dark,
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuIcon: {},
  icons: {
    paddingRight: theme.spacing(4),
  },
  logo: {
    height: 25,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none',
  },
  iChoseListItemtext: {
    fontSize: 14,
  },
  iChoseListItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader: {
    textTransform: 'uppercase',
    fontWeight: 600,
  },
}));
