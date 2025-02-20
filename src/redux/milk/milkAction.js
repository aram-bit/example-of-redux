import { BUY_MILK } from "./milkTypes"

export default milkAction(milk=1){
    return{
        type:BUY_MILK,
        payLoad:milk
    }
}