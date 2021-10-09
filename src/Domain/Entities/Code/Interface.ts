import { Schema } from "mongoose";
import InterfaceUtil from "./../Util/Ports/Dtoable";

export default interface Interface extends InterfaceUtil {
    code: string;
    dni: string;
    plan: Schema.Types.ObjectId;
    premmier: Schema.Types.ObjectId;
    classic: Schema.Types.ObjectId;
}
