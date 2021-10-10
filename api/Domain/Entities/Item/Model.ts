import { Schema } from "mongoose";
import { injectable } from "inversify";

import Schemable from "../Util/Model";
import Nameable from "../Util/Ports/Nameable";

@injectable()
export default class ENTITY_SCHEMA extends Schemable implements Nameable {
	public name: string;

	constructor() {
		let entity: string = "item";

		super(
			{
				name: {
					type: String,
					typed: "string",
				},
				item: [
					{
						item: {
							ref: "item",
							typed: "id",
							type: Schema.Types.ObjectId,
						},
					},
				],
				strain: {
					ref: "strain",
					typed: "id",
					type: Schema.Types.ObjectId,
				},
				category: {
					ref: "category",
					typed: "id",
					type: Schema.Types.ObjectId,
				},
				type: {
					ref: "type",
					typed: "id",
					type: Schema.Types.ObjectId,
				},
				store: {
					ref: "store",
					typed: "id",
					type: Schema.Types.ObjectId,
				},
				price: {
					type: Number,
					typed: "number",
				},
				discount: {
					type: Number,
					typed: "number",
				},
				displayInCommerce: {
					type: Boolean,
					typed: "boolean",
					default: false,
				},
				isExclusive: {
					type: Boolean,
					typed: "boolean",
					default: false,
				},
				image: {
					type: String,
					typed: "string",
				},
				description: {
					type: String,
					typed: "string",
				},
				isSent: {
					type: Boolean,
					typed: "boolean",
					default: false,
				},
				consult: {
					type: Boolean,
					typed: "boolean",
					default: false,
				},
				entity: {
					type: String,
					typed: entity,
				},
				tag: [
					{
						tag: {
							ref: "tag",
							typed: "id",
							type: Schema.Types.ObjectId,
						},
					},
				]
			},
			{
				collection: entity,
			}
		);

		this.name = entity;
	}
}
