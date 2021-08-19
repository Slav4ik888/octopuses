import { createSelector } from 'reselect'
import { isSubscribe, isDemoSubscribe } from '../../../utils/auth/check-subscribe/check-subscribe.js'
import { Role } from '../../../types/user.ts'
import { getItemFromArrByField } from '../../utils/arrays/get-item-from-arr-by-field/get-item-from-arr-by-field.js'


export const getLoadingUser        = (state) => state.user.loading;
export const getAuthenticated      = (state) => state.user.authenticated;
export const getRegProtectionCase  = (state) => state.user.protectionCase;
export const getCompanyProfile     = (state) => state.user.companyProfile;
export const getCompanyId          = (state) => state.user.userProfile.companyId;

export const getSelected           = (state) => state.user.companyProfile.payers?.selected;
export const getCompanyPayers      = (state) => state.user.companyProfile.payers?.payers;
export const getSelectedPayer = createSelector(
  getSelected,
  getCompanyPayers,
  (selected, payers) => getItemFromArrByField(payers, `id`, selected)
);
export const getInvoices           = (state) => state.user.companyProfile?.invoices;

export const getSubscribe          = (state) => state.user.companyProfile?.subscribes?.subscribe;
export const getIsSubscribe        = (state) => isSubscribe(state.user.companyProfile?.subscribes?.subscribe);
export const getIsDemoSubscribe    = (state) => isDemoSubscribe(state.user.companyProfile?.subscribes?.subscribe);
export const getUserProfile        = (state) => state.user.userProfile;
export const getIsEmailVerified    = (state) => state.user.userProfile?.emailVerified;
export const getUserEmail          = (state) => state.user.userProfile.email;
export const getUserId             = (state) => state.user.userProfile.userId;
export const getUserRole           = (state) => state.user.userProfile.role;
export const getIsRoleSuper        = (state) => state.user.userProfile.role === Role.SUPER;


// Возвращает rule из массива правил для тестирования, по positionId
// export const getRuleFromRulesForTestById = (state, props) => {
//   const ruleId = props.question.ruleId;
//   const rules = getItemFromArrByField(state.data.rulesForTest, `positionId`, props.position.id).rules;
//   const rule = rules.find(item => item.id === ruleId);

//   return rule;
// };

// Возвращает document из которого взято правило для тестирования
// export const getDocumentFromRuleForTest = createSelector(
//   getRuleFromRulesForTestById,
//   getDocuments,
//   (rule, documents) => {
//     return documents.find(doc => doc.id === rule.docId);
//   }

// );
