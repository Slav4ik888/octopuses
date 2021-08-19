const getScreenS = () => {
  const themm = useTheme();
  const upXs = useMediaQuery(themm.breakpoints.up('xs'));
  console.log('upXs: ', upXs);

  const downXs = useMediaQuery(themm.breakpoints.down('xs'));
  console.log('downXs: ', downXs);

  const upSm = useMediaQuery(themm.breakpoints.up('sm'));
  console.log('upSm: ', upSm);

  const downSm = useMediaQuery(themm.breakpoints.down('sm'));
  console.log('downSm: ', downSm);
  
  const upMd = useMediaQuery(themm.breakpoints.up('md'));
  console.log('upMd: ', upMd);
  
  const downMd = useMediaQuery(themm.breakpoints.down('md'));
  console.log('downMd: ', downMd);
  
  const upLg = useMediaQuery(themm.breakpoints.up('lg'));
  console.log('upLg: ', upLg);
  
  const downLg = useMediaQuery(themm.breakpoints.down('lg'));
  console.log('downLg: ', downLg);
  
  const upXl = useMediaQuery(themm.breakpoints.up('xl'));
  console.log('upXl: ', upXl);
  
  const downXl = useMediaQuery(themm.breakpoints.down('xl'));
  console.log('downXl: ', downXl);


  // theme.breakpoints.up  (xs):  @media (min-width:0px)
  // theme.breakpoints.down(xs):  @media (max-width:599.95px)
  // theme.breakpoints.up  (sm):  @media (min-width:600px)
  // theme.breakpoints.down(sm):  @media (max-width:959.95px)
  // theme.breakpoints.up  (md):  @media (min-width:960px)
  // theme.breakpoints.down(md):  @media (max-width:1279.95px)
  // theme.breakpoints.up  (lg):  @media (min-width:1280px)
  // theme.breakpoints.down(lg):  @media (max-width:1919.95px)
  // theme.breakpoints.up  (xl):  @media (min-width:1920px)
  // theme.breakpoints.down(xl):  @media (min-width:0px)
};
