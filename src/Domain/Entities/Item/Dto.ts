import { IsDefined, IsString } from "class-validator";
import { Schema } from "mongoose";
import { injectable } from "inversify";

import DtoUtil from "../Util/Dto";
import Interface from "./Interface";

@injectable()
export default class EntityDto extends DtoUtil implements Interface {
	public name: string;
	public item: Schema.Types.ObjectId[];
	public strain: Schema.Types.ObjectId;
	public category: Schema.Types.ObjectId;
	public type: Schema.Types.ObjectId;
	public store: Schema.Types.ObjectId;
	public price: number;
	public discount: number;
	public displayInCommerce: boolean;
	public isExclusive: boolean;
	public image: string;
	public description: string;
	public isSent: boolean;
	public consult: boolean;
	public tag: Schema.Types.ObjectId[];
}
