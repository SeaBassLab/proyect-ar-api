import { Schema } from "mongoose";
import InterfaceUtil from "./../Util/Ports/Dtoable";

export default interface Interface extends InterfaceUtil {
	name: string;
	item: Schema.Types.ObjectId[];
	strain: Schema.Types.ObjectId;
	category: Schema.Types.ObjectId;
	type: Schema.Types.ObjectId;
	store: Schema.Types.ObjectId;
	price: number;
	discount: number;
	displayInCommerce: boolean;
	isExclusive: boolean;
	image: string;
	description: string;
	isSent: boolean;
	consult: boolean;
	tag: Schema.Types.ObjectId[];
}
