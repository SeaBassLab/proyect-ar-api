import { IsDefined, IsString } from "class-validator";
import { Schema } from "mongoose";
import { injectable } from "inversify";

import DtoUtil from "../Util/Dto";
import Interface from "./Interface";

@injectable()
export default class EntityDto extends DtoUtil implements Interface {
    public code: string;
    public dni: string;
    public plan: Schema.Types.ObjectId;
    public premmier: Schema.Types.ObjectId;
    public classic: Schema.Types.ObjectId;
}
