import { BUY_CAKE } from "./cakeTypes";

export function cakeAction(cake=1){
return{
    type:BUY_CAKE,
    payLoad:cake
}
}