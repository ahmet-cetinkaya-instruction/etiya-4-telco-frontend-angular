import { createAction, props } from "@ngrx/store";
import { TokenUserModel } from "../../models/tokenUserModel";

export const setTokenUserModel = createAction(
    "[Auth] Set Token User Model",  //benzersiz key
    props<{tokenUserModel:TokenUserModel}>()  //parametreler
)

export const removeTokenUserModel = createAction("[Auth] Remove Token User Model");