import { createSelector } from 'reselect';
import { Role } from '../../../types/user.ts';


export const getLoadingUser        = (state) => state.user.loading;
export const getAuthenticated      = (state) => state.user.authenticated;


export const getUserProfile        = (state) => state.user.userProfile;
export const getIsEmailVerified    = (state) => state.user.userProfile?.emailVerified;
export const getUserEmail          = (state) => state.user.userProfile.email;
export const getUserId             = (state) => state.user.userProfile.userId;
export const getUserRole           = (state) => state.user.userProfile.role;
export const getIsRoleSuper        = (state) => state.user.userProfile.role === Role.SUPER;
