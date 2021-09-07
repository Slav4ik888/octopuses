import * as React from 'react';
// Redux Stuff
import { connect } from 'react-redux';
import { getLoadingUI, getPolicy as getPolicySelector } from '../../../../redux/selectors/ui-selectors';
import { getPolicy } from '../../../../redux/actions/ui-actions';
// MUI Stuff
import Box from '@material-ui/core/Box';
// Markdown
import ReactMarkdown = require('react-markdown');
import gfm = require('remark-gfm');
// Components
import CircularProgress from '../../../buttons/circular-progress';
// Types
import { State } from '../../../../redux/redux-types';


const progressStyle = {
  position: `absolute`,
  top: `50%`,
  left: `50%`,
  color: `primary.main`
};


type Props = {
  loadingUI: boolean;
  policy: string;
  getPolicy: () => void;
}


// Всплывающее окно с каким-то children
const ShowPolicyText: React.FC<Props> = ({ loadingUI, policy, getPolicy }) => {

  const policyLoaded = React.useMemo(() => {
    if (!policy) getPolicy(); // Загрузить Политику с сервера
    return policy;
  }, [policy])


  return (
    <Box sx={{ minHeight: `100px` }}>
      <CircularProgress loading={loadingUI} size={60} classname={progressStyle} />
      <ReactMarkdown plugins={[gfm]} linkTarget="_blank" children={policyLoaded} />
    </Box>
  );
};

const mapStateToProps = (state: State) => ({
  loadingUI: getLoadingUI(state),
  policy: getPolicySelector(state),
});

const mapActionsToProps = {
  getPolicy,
};

export default connect(mapStateToProps, mapActionsToProps)(ShowPolicyText);
