import { Schema } from "mongoose";
import InterfaceUtil from "./../Util/Ports/Dtoable";

export default interface Interface extends InterfaceUtil {
    comment: string;
    product: Schema.Types.ObjectId;
    origen: Schema.Types.ObjectId;
    destination: Schema.Types.ObjectId;
}
