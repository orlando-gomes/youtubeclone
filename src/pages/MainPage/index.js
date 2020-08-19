import React from 'react';

import {
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
  ListSubheader,
  Grid,
  Hidden,
  Switch,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import AddCircle from '@material-ui/icons/AddCircle';
import { useTheme } from '@material-ui/core/styles';

import { useStyles } from './styles';

import logoPreto from '../../assets/preto.png';
import logoBranco from '../../assets/branco.png';

const videos = [
  {
    id: 1,
    title:
      'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
    channel: 'Lucas Nhimi',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb1.png',
  },
  {
    id: 2,
    title:
      'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
    channel: 'Lucas Nhimi',
    views: '957 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb2.png',
  },
  {
    id: 3,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '106 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb3.png',
  },
  {
    id: 4,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb4.png',
  },
  {
    id: 5,
    title:
      'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
    channel: 'Lucas Nhimi',
    views: '2,2 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb5.png',
  },
  {
    id: 6,
    title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
    channel: 'Lucas Nhimi',
    views: '233 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb6.png',
  },
  {
    id: 7,
    title:
      'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
    channel: 'Lucas Nhimi',
    views: '118 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb7.png',
  },
  {
    id: 8,
    title:
      'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
    channel: 'Lucas Nhimi',
    views: '1,9 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb8.png',
  },
];

function MainPage({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.rootDiv}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            className={classes.menuIcon}
            color="inherit"
            edge="start"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img
            src={theme.palette.type === 'dark' ? logoBranco : logoPreto}
            alt="logo"
            className={classes.logo}
          />
          <div className={classes.grow} />
          <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <IconButton className={classes.icons} color="inherit">
            <VideoCallIcon />
          </IconButton>
          <IconButton className={classes.icons} color="inherit">
            <AppsIcon />
          </IconButton>
          <IconButton className={classes.icons} color="inherit">
            <MoreVertIcon />
          </IconButton>
          <Button
            color="secondary"
            variant="outlined"
            startIcon={<AccountCircleIcon />}
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>

      <Box display="flex">
        <Hidden mdDown>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                <ListItem button classes={{ root: classes.iChoseListItem }}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.iChoseListItemtext,
                    }}
                    primary="Início"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.iChoseListItem }}>
                  <ListItemIcon>
                    <WhatshotIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.iChoseListItemtext,
                    }}
                    primary="Em alta"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.iChoseListItem }}>
                  <ListItemIcon>
                    <SubscriptionsIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.iChoseListItemtext,
                    }}
                    primary="Inscrições"
                  />
                </ListItem>
              </List>

              <Divider />

              <List>
                <ListItem button classes={{ root: classes.iChoseListItem }}>
                  <ListItemIcon>
                    <VideoLibraryIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.iChoseListItemtext,
                    }}
                    primary="Biblioteca"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.iChoseListItem }}>
                  <ListItemIcon>
                    <HistoryIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.iChoseListItemtext,
                    }}
                    primary="Histórico"
                  />
                </ListItem>
              </List>

              <Divider />

              <Box p={4}>
                <Typography variant="body2">
                  Faça login para curtir vídeos, comentar e se inscrever.
                </Typography>
                <Box mt={2}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<AccountCircleIcon />}
                  >
                    Fazer login
                  </Button>
                </Box>
              </Box>

              <Divider />

              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    className={classes.subheader}
                  >
                    O Melhor do Youtube
                  </ListSubheader>
                }
                className={classes.root}
              >
                <ListItem button classes={{ root: classes.iChoseListItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.iChoseListItemtext,
                    }}
                    primary="Música"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.iChoseListItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.iChoseListItemtext,
                    }}
                    primary="Esportes"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.iChoseListItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.iChoseListItemtext,
                    }}
                    primary="Jogos"
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.iChoseListItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.iChoseListItemtext,
                    }}
                    primary="Filmes"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.iChoseListItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.iChoseListItemtext,
                    }}
                    primary="Notícias"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.iChoseListItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.iChoseListItemtext,
                    }}
                    primary="Ao vivo"
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.iChoseListItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.iChoseListItemtext,
                    }}
                    primary="Destaques"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.iChoseListItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.iChoseListItemtext,
                    }}
                    primary="Vídeos 360"
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.iChoseListItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.iChoseListItemtext,
                    }}
                    primary="Procurar mais"
                  />
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>
        <Box padding={8}>
          <Toolbar />
          <Typography
            variant="h5"
            color="textPrimary"
            style={{ fontWeight: 500 }}
          >
            Recomendados
          </Typography>
          <Grid container spacing={2}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant="body1"
                      color="textPrimary"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display="block"
                      variant="body2"
                      color="textSecondary"
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default MainPage;
