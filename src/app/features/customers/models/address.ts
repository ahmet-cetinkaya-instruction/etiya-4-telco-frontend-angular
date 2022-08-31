import { City } from "./city";

export interface Address {
    id:number;
    city: City;
    street: string;
    flatNumber: number;
    description: string;
}
