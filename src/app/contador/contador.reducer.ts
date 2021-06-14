import { Action } from "@ngrx/store";
// import { actions, DISMINUIR, DIVIDIR, INCREMENTAR, MULTIPLICAR, RESET } from "./contador.actions";

import * as fromContador from "./contador.actions"

export function contadorReducer(state:number = 10, action:fromContador.actions){

    switch (action.type) {
        case fromContador.INCREMENTAR:
            return state + 1;

            case fromContador.DISMINUIR:
                return state -1;

                case fromContador.MULTIPLICAR:
                    return state * action.payload;

                    case fromContador.DIVIDIR:
                        return state / action.payload;

                        case fromContador.RESET:
                            return 0;
            

        default:
            return state;
           
    }

}