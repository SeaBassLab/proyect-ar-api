import { Schema } from "mongoose";
import { injectable } from "inversify";

import Schemable from "../Util/Model";
import Nameable from "../Util/Ports/Nameable";

@injectable()
export default class ENTITY_SCHEMA extends Schemable implements Nameable {
    public name: string;

    constructor() {
        let entity: string = "information";

        super(
            {
                name: {
                    type: String,
                    typed: "string",
                },
                dni: {
                    type: String,
                    typed: "string",
                },
                phone: {
                    type: String,
                    typed: "string",
                },
                email: {
                    type: String,
                    typed: "string",
                },
                city: {
                    type: String,
                    typed: "string",
                },
                dateOfBirth: {
                    type: Number,
                    typed: "number",
                },
                address: {
                    type: String,
                    typed: "string",
                },
                addressNumber: {
                    type: String,
                    typed: "string",
                },
                floor: {
                    type: String,
                    typed: "string",
                },
                postalCode: {
                    type: String,
                    typed: "string",
                },
                item: {
                    ref: "item",
                    typed: "id",
                    type: Schema.Types.ObjectId,
                },
                quantity: {
                    type: Number,
                    typed: "number",
                },
                amount: {
                    type: Number,
                    typed: "number",
                },
                cart: {
                    ref: "cart",
                    typed: "id",
                    type: Schema.Types.ObjectId,
                },
                location: {
                    ref: "item",
                    typed: "id",
                    type: Schema.Types.ObjectId,
                },
                sale: {
                    type: Number,
                    typed: "number",
                },
                ship: {
                    type: Number,
                    typed: "number",
                },
                isCheckout: {
                    type: Boolean,
                    typed: "boolean",
                },

                entity: {
                    type: String,
                    typed: entity,
                },
            },
            {
                collection: entity,
            }
        );

        this.name = entity;
    }
}
