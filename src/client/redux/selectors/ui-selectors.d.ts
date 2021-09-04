import { State } from '../redux-types';
import { ScreenFormats } from '../../../types/types';
import { Errors } from '../../../types/results';


export function getLoadingUI         (state: State): boolean;

export function getScreenFormats     (state: State): ScreenFormats;

export function getAcceptedCookie    (state: State): boolean;

export function getPolicy            (state: State): string;

export function getErrors            (state: State): Errors;

export function getTargetScroll      (state: State): string;

export function getSelectedGoodsType (state: State): string;
