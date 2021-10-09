import { Schema } from "mongoose";
import InterfaceUtil from "./../Util/Ports/Dtoable";

export default interface Interface extends InterfaceUtil {
    name: string;
    amount: number;
    discount: number;
    id: string;
    wineCategory: string;
    sale: number;
    ship: number;
}
