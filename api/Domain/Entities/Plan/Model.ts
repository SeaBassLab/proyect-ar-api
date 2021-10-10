import { Schema } from "mongoose";
import { injectable } from "inversify";

import Schemable from "../Util/Model";
import Nameable from "../Util/Ports/Nameable";

@injectable()
export default class ENTITY_SCHEMA extends Schemable implements Nameable {
    public name: string;

    constructor() {
        let entity: string = "plan";

        super(
            {
                name: {
                    type: String,
                    typed: "string",
                },
                amount: {
                    type: Number,
                    typed: "number",
                },
                discount: {
                    type: Number,
                    typed: "number",
                },
                id: {
                    type: String,
                    typed: "string",
                },
                wineCategory: {
                    type: String,
                    typed: "string",
                },
                sale: {
                    type: Number,
                    typed: "number",
                },
                ship: {
                    type: Number,
                    typed: "number",
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
