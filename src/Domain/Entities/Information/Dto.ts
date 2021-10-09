import { IsDefined, IsString } from "class-validator";
import { Schema } from "mongoose";
import { injectable } from "inversify";

import DtoUtil from "../Util/Dto";
import Interface from "./Interface";

@injectable()
export default class EntityDto extends DtoUtil implements Interface {
    public name: string;
    public dni: string;
    public phone: string;
    public email: string;
    public city: string;
    public dateOfBirth: number;
    public address: string;
    public addressNumber: string;
    public floor: string;
    public postalCode: string;
    public item: Schema.Types.ObjectId;
    public quantity: number;
    public amount: number;
    public cart: Schema.Types.ObjectId;
    public location: Schema.Types.ObjectId;
    public sale: number;
    public ship: number;
    public isCheckout: boolean;
}
