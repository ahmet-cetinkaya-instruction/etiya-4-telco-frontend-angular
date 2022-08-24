import { Offer } from "./offer";

export interface Order {
    id: number;
    offers: Offer[];
}
