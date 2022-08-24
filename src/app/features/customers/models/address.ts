import { City } from "./city";

export interface Address {
    city: City;
    street: string;
    flatNumber: number;
    description: string;
}
