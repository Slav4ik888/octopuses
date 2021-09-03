import * as React from 'react';
import { RouteType } from '../../../utils/routes/routes';
// MUI Stuff
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
// Types & Consts
import { siteTitle } from '../../../../types/types';


export default function Copyright(props: any) {
  const theme = useTheme();
  const greaterSmScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const title = greaterSmScreen ? siteTitle.full : siteTitle.small;

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href={RouteType.ROOT}>
        {
          title
        }
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}