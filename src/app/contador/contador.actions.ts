import { Action } from '@ngrx/store';

export const INCREMENTAR = '[Contador] Incrementar';
export const DISMINUIR = '[Contador] Desminuir';
export const MULTIPLICAR = '[Contador] Multiplicar';
export const DIVIDIR = '[Contador] Dividir';
export const RESET = '[Contador] Reset';

export class IncrementarAction implements Action {
	readonly type = INCREMENTAR;
}

export class DisminuirAction implements Action {
	readonly type = DISMINUIR;
}

export class MultiplicarAction implements Action {
	readonly type = MULTIPLICAR;

	constructor(public payload: number) {}
}

export class DividirAction implements Action {
	readonly type = DIVIDIR;

	constructor(public payload: number) {}
}

export class ResetAction implements Action {
	readonly type = RESET;
}

export type actions = IncrementarAction | DisminuirAction | MultiplicarAction | DividirAction | ResetAction;
