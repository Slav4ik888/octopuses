import { createSelector } from 'reselect';
import { getItemFromArrByField } from '../../../utils/arrays/get-item-from-arr-by-field/get-item-from-arr-by-field.js';


const getProps = (_, props) => props;


export const getLoadingData             = (state) => state.data.loading;
export const getCatalog                 = (state) => state.data.catalog;
export const getUnreadedComments        = (state) => state.data.unreadedComments;
