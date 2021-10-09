import { Schema } from "mongoose";
import { injectable } from "inversify";

import Schemable from "../Util/Model";
import Nameable from "../Util/Ports/Nameable";

@injectable()
export default class ENTITY_SCHEMA extends Schemable implements Nameable {
    public name: string;

    constructor() {
        let entity: string = "code";

        super(
            {
                code: {
                    type: String,
                    typed: "string",
                },
                dni: {
                    type: String,
                    typed: "string",
                },
                plan: {
                    ref: "plan",
                    type: Schema.Types.ObjectId,
                    typed: "id",
                },
                premmier: {
                    ref: "plan",
                    type: Schema.Types.ObjectId,
                    typed: "id",
                },
                classic: {
                    ref: "plan",
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
