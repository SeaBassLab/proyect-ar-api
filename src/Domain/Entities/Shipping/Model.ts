import { Schema } from "mongoose";
import { injectable } from "inversify";

import Schemable from "../Util/Model";
import Nameable from "../Util/Ports/Nameable";

@injectable()
export default class ENTITY_SCHEMA extends Schemable implements Nameable {
    public name: string;

    constructor() {
        let entity: string = "shipping";

        super(
            {
                comment: {
                    type: String,
                    typed: "string",
                },
                product: {
                    ref: "product",
                    type: Schema.Types.ObjectId,
                    typed: "id",
                },
                origin: {
                    ref: "user",
                    type: Schema.Types.ObjectId,
                    typed: "id",
                },
                destination: {
                    ref: "user",
                    type: Schema.Types.ObjectId,
                    typed: "id",
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
