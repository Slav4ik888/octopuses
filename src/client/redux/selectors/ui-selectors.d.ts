import { State } from '../redux-types';
import { Errors, ScreenFormats } from '../../../types/types';


export function getLoadingUI      (state: State): boolean;

export function getScreenFormats  (state: State): ScreenFormats;

export function getAcceptedCookie (state: State): boolean;

export function getPolicy         (state: State): string;

export function getErrors         (state: State): Errors;

export function getTargetScroll   (state: State): string;