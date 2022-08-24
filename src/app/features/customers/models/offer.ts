import { Product } from "./product";
import { Type } from "./type";

export interface Offer {
    id: number;
    type: Type;
    name: string;
    products: Product[];
}
