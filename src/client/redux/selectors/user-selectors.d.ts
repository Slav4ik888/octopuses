import { State } from '../redux-types';
import { UserProfile, Role, RegProtectionCase } from '../../../types/user';
import { CompanyProfile } from '../../../types/company';
import { SubscribeCompanyType, Payer, Invoice} from '../../../types/payments';


export function getLoadingUser(state: State): boolean;
export function getAuthenticated(state: State): boolean;
export function getRegProtectionCase(state: State): RegProtectionCase;
export function getCompanyProfile(state: State): CompanyProfile;
export function getCompanyId(state: State): string;
export function getSelected(state: State): number;
export function getCompanyPayers(state: State): Array<Payer>;
export function getSelectedPayer(state: State): Payer;
export function getInvoices(state: State): Array<Invoice>;

export function getSubscribe(state: State): SubscribeCompanyType;
export function getIsSubscribe(state: State): boolean;
export function getIsDemoSubscribe(state: State): boolean;

export function getUserProfile(state: State): UserProfile;
export function getIsEmailVerified(state: State): boolean;
export function getUserEmail(state: State): string;
export function getUserId(state: State): string;
export function getUserRole(state: State): Role;
export function getIsRoleSuper(state: State): boolean;