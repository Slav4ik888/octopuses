import { State } from '../redux-types';
import { UserProfile, Role } from '../../../types/user';


export function getLoadingUser(state: State): boolean;
export function getAuthenticated(state: State): boolean;

export function getUserProfile(state: State): UserProfile;
export function getIsEmailVerified(state: State): boolean;
export function getUserEmail(state: State): string;
export function getUserId(state: State): string;
export function getUserRole(state: State): Role;
export function getIsRoleSuper(state: State): boolean;