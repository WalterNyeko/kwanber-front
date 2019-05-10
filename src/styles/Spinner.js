export const spinnerStyles = theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      marginTop: theme.spacing.unit * 3,
    },
    progress: {
      margin: theme.spacing.unit * 2,
      color: '#00695c',
    },
    linearColorPrimary: {
      backgroundColor: '#b2dfdb',
    },
    linearBarColorPrimary: {
      backgroundColor: '#00695c',
    },
    // Reproduce the Facebook spinners.
    facebook: {
      margin: theme.spacing.unit * 2,
      position: 'relative',
    },
    facebook1: {
      color: '#eef3fd',
    },
    facebook2: {
      color: '#6798e5',
      animationDuration: '550ms',
      position: 'absolute',
      left: 0,
    },
    table: {
      minWidth: 500,
    },
    tableWrapper: {
      overflowX: 'auto',
    },
  });