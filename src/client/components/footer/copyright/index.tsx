import * as React from 'react';
// MUI Stuff
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// Types
import { ScreenFormats } from '../../../../types/types';
import { COMPANY } from '../../../../consts/consts';
import themes from '../../../utils/themes/themes';


type Props = {
  screenFormats: ScreenFormats;
}

// Рендер одного задания из TasksContainer
const Copyright: React.FC<Props> = ({ screenFormats }) => {

  const name = React.useMemo(() => screenFormats.isMobile ? COMPANY.SITE_TITLE.small : COMPANY.SITE_TITLE.full, [screenFormats]);

  return (
    <Box
      sx={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        height: `100px`,
        fontSize: `0.7rem`,
        color: themes.footer.copyright.color,
        pt: 3, pb: 3,
      }}
    >
      <Box sx={{ mb: 1 }}>{`© ${name} ${COMPANY.YEARS}`}</Box>
      <Box
        sx={{
          display: `flex`,
          flexDirection: () => screenFormats.isMobile ? `column` : `row`,
          alignItems: `center`
        }}
      >
        <Box sx={{ mb: 1 }}>
          {COMPANY.LEGAL_FULL_NAME}
        </Box>
        {
          !screenFormats.isMobile ? <span>&nbsp;</span> : ``
        }
        <Box sx={{ mb: 1 }}>
          {`ИНН ${COMPANY.ITN}`}
        </Box>
      </Box>
      <Box sx={{ mb: 1 }}>
        <Link
          href={COMPANY.MASTER.SITE}
          underline="always"
          rel="noopener"
          target="_blank"
          sx={{ color: themes.palette.secondary.dark }}
        >
          {`Мастер - ${COMPANY.MASTER.NAME}`}
        </Link>
      </Box>
    </Box>
  );
};

export default Copyright;