export const styles = theme => ({
    root: {
      width: '100%',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title: {
      display: 'none',
      marginRight: 10,
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },

    dashboardMenu: {
      padding: '20px 15px 20px 15px',
    },

    leftMenu: {
      backgroundColor: 'red',
      width: '400px',
      height: '400px',
    }
   
  });
  