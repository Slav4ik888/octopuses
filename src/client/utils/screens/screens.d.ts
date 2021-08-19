import { ScreenFormats } from '../../../types/types';

// Возвращает ширину экрана
export function getScreenSize(): number;


export function isMobile(size: number): boolean;


/**
 * Возвращает все утверждённые форматы
 * 
 * @param {*} size 
 * @returns {}
 */
export function getScreenFormats(size: number): ScreenFormats;



