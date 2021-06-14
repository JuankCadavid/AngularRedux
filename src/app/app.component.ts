import { Component } from '@angular/core';
import { Store} from '@ngrx/store';
import { AppState } from './app.reducers';
import { DisminuirAction, IncrementarAction } from './contador/contador.actions';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'redux-app';
	contador: number;

	constructor(private store:Store<AppState>) {
		// this.contador = 10;
		this.store.subscribe(state=>{
			this.contador = state.contador;
		})
	}

	incrementar() {

		const accion= new IncrementarAction();
			// const accion:Action={
		// 	type:'INCREMENTAR'
		// };

		// this.contador ++;
		this.store.dispatch(accion);
	}

	disminuir() {

		// const accion:Action={
		// 	type:'DISMINUIR'
		// };

		const accion= new DisminuirAction();

		// this.contador --;

		this.store.dispatch(accion);
	}
}
