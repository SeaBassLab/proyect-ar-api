import { Model, Document } from "mongoose";
import { injectable, inject } from "inversify";
import TYPES from "./../../../TYPES";

import Responseable from "../Util/Ports/Responseable";

import Serviceable from "./Ports/Serviceable";
import Registrable from "./Ports/Registrable";

import GeteableAll from "../Util/Ports/GeteableAll";
import Saveable from "../Util/Ports/Saveable";
import GeteableById from "../Util/Ports/GeteableById";
import Updateable from "../Util/Ports/Updateable";

import Information from "./Interface";

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
		informationModel: Model<Document, {}>,
		project: {},
		match: {},
		sort: {},
		group: {},
		limit: number,
		skip: number,
		strainModel?: Model<Document, {}>,
	): Promise<Responseable> {

		if(project['item.strain.name'] !== undefined) {
			project['item.strain'] = 1
			delete project['item.strain.name']
		}

		return new Promise<Responseable>(async (resolve, reject) => {
			await this.geteableAllService
				.getAll(informationModel, project, match, sort, group, limit, skip)
				.then(async (result: Responseable) => {
					if (result) {
						if(
							result.result !== undefined &&
							result.result !== null &&
							result.result[0] !== undefined &&
							result.result[0] !== null &&
							result.result[0].items !== undefined &&
							result.result[0].items !== null &&
							Array.isArray(result.result[0].items) &&
							result.result[0].items.length > 0
						) {
							let strainList: any[] = [];

							result.result[0].items.map((information: Information) => {
								strainList.push({
									$oid: information.item['strain'],
								});
							})

							let matchStrain = {
                _id: {
									$in: strainList,
                },
            	};

							strainList = await (await this.getAll(strainModel, { name: 1, _id: 1 }, matchStrain, {}, {}, 0, 0)).result

							result.result[0].items.map((information: Information) => {
								strainList.map((strain: { _id: string }) => {
									if(information.item['strain'].toString() === strain._id.toString()) {
										information.item['strain'] = strain
									}
								})
							})

						}

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
