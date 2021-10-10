import { Model, Document } from "mongoose";
import axios, { AxiosResponse } from "axios";
import { injectable, inject } from "inversify";
import TYPES from "./../../../TYPES";

import Responseable from "../Util/Ports/Responseable";

import Serviceable from "./Ports/Serviceable";
import Registrable from "./Ports/Registrable";

import GeteableAll from "../Util/Ports/GeteableAll";
import Saveable from "../Util/Ports/Saveable";
import GeteableById from "../Util/Ports/GeteableById";
import Updateable from "../Util/Ports/Updateable";

@injectable()
export default class Controller implements Serviceable {
    @inject(TYPES.ResponseableDomain) private responserService: Responseable;
    @inject(TYPES.Updateable) private updateableService: Updateable;
    @inject(TYPES.GeteableAll) private geteableAllService: GeteableAll;
    @inject(TYPES.GeteableById) private geteableByIdService: GeteableById;
    @inject(TYPES.Saveable) private saveableService: Saveable;

    public async update(
        id: string,
        data: {},
        model: Model<Document, {}>,
        idUser: string
    ): Promise<Responseable> {
        return new Promise<Responseable>(async (resolve, reject) => {
            await this.updateableService
                .update(id, data, model, model, idUser)
                .then((res: Responseable) => {
                    if (res && res.result !== undefined) {
                        this.responserService = {
                            result: res.result,
                            message: res.message,
                            error: res.error,
                            status: res.status,
                        };
                        resolve(this.responserService);
                    } else {
                        this.responserService = {
                            result: "Nop",
                            message: "La capa superior contesto undefined",
                            error: "",
                            status: 500,
                        };
                    }
                })
                .catch((err: Responseable) => {
                    this.responserService = {
                        result: err.result,
                        message: err.message,
                        error: err.error,
                        status: err.status,
                    };
                });
            reject(this.responserService);
        });
    }

    public async getById(
        id: string,
        model: Model<Document, {}>
    ): Promise<Responseable> {
        return new Promise<Responseable>(async (resolve, reject) => {
            await this.geteableByIdService
                .getById(id, model, model)
                .then((res: Responseable) => {
                    if (res && res.result !== undefined) {
                        this.responserService = {
                            result: res,
                            message: res.message,
                            error: res.error,
                            status: res.status,
                        };
                        resolve(this.responserService);
                    } else {
                        this.responserService = {
                            result: "Nop",
                            message: "La capa superior contesto undefined",
                            error: "",
                            status: 500,
                        };
                    }
                })
                .catch((err: Responseable) => {
                    this.responserService = {
                        result: err.result,
                        message: err.message,
                        error: err.error,
                        status: err.status,
                    };
                });
            reject(this.responserService);
        });
    }

    public async save(
        data: Registrable,
        model: Model<Document, {}>,
        idUser: string
    ): Promise<Responseable> {
        return new Promise<Responseable>(async (resolve, reject) => {
            let datos: any = data;

            let mercadoPagoData: any = {
                back_url: "https://nuevecopas.com/checkout",
                reason: datos.name,
                auto_recurring: {
                    frequency: "1",
                    frequency_type: "months",
                    transaction_amount:
                        datos.amount !== undefined
                            ? datos.amount.toString()
                            : "100",
                    currency_id: "ARS",
                    billing_day: 1,
                    billing_day_proportional: false,
                },
            };

            await axios
                .post(
                    "https://api.mercadopago.com/preapproval_plan",
                    mercadoPagoData,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization:
                                "Bearer APP_USR-6458932831156181-042215-1f5081697ad7e917e588a81d059956a4-711365939",
                        },
                    }
                )
                .then((res: AxiosResponse) => {
                    console.log(res);
                    data.id = res.data.id;
                })
                .catch((e: any) => {
                    console.log(e);
                });

            await this.saveableService
                .save(data, model, model, idUser)
                .then((res: Responseable) => {
                    if (res && res.result !== undefined) {
                        this.responserService = {
                            result: res.result,
                            message: res.message,
                            error: res.error,
                            status: res.status,
                        };
                        resolve(this.responserService);
                    } else {
                        this.responserService = {
                            result: "Nop",
                            message: "La capa superior contesto undefined",
                            error: "",
                            status: 500,
                        };
                        reject(this.responserService);
                    }
                })
                .catch((err: Responseable) => {
                    this.responserService = {
                        result: err.result,
                        message: err.message,
                        error: err.error,
                        status: err.status,
                    };
                    reject(this.responserService);
                });
        });
    }

    public async getAll(
        model: Model<Document, {}>,
        project: {},
        match: {},
        sort: {},
        group: {},
        limit: number,
        skip: number
    ): Promise<Responseable> {
        return new Promise<Responseable>(async (resolve, reject) => {
            await this.geteableAllService
                .getAll(model, project, match, sort, group, limit, skip)
                .then((result: Responseable) => {
                    if (result) {
                        this.responserService = {
                            result: result.result,
                            message: result.message,
                            error: result.error,
                            status: result.status,
                        };
                        resolve(this.responserService);
                    } else {
                        this.responserService = {
                            result: "Nop",
                            message: "No existe result",
                            error: "obj.getAll()",
                            status: 500,
                        };
                    }
                })
                .catch((err: Responseable) => {
                    this.responserService = {
                        result: err.result,
                        message: err.message,
                        error: err.error,
                        status: err.status,
                    };
                });
            reject(this.responserService);
        });
    }
}
