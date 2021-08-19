import { createSelector } from 'reselect';
import { getItemFromArrByField } from '../../utils/arrays/get-item-from-arr-by-field/get-item-from-arr-by-field.js';
import { hasSomeoneChanges } from '../../utils/has-someone-changes/index.js';


const getProps = (_, props) => props;

export const getLoadingData             = (state) => state.data.loading;
