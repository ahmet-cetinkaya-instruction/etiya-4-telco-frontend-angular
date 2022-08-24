import { ResultModel } from "../../models/resultModel";

export interface UserLoginResponse extends ResultModel{
    access_token:string;
}