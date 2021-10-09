import { IsDefined, IsString } from "class-validator";
import { Schema } from "mongoose";
import { injectable } from "inversify";

import DtoUtil from "../Util/Dto";
import Interface from "./Interface";

@injectable()
export default class EntityDto extends DtoUtil implements Interface {
    public name: string;
    public amount: number;
    public discount: number;
    public id: string;
    public wineCategory: string;
    public sale: number;
    public ship: number;
}
