import { Model, Document } from 'mongoose'
import { injectable, inject } from 'inversify';
import TYPES from './../../../TYPES'

import Responseable from '../Util/Ports/Responseable'

import Serviceable from './Ports/Serviceable'
import Registrable from './Ports/Registrable'

import GeteableAll from '../Util/Ports/GeteableAll'
import Saveable from '../Util/Ports/Saveable';
import GeteableById from '../Util/Ports/GeteableById'
import Updateable from '../Util/Ports/Updateable'

import Item from './Interface'
import Purchase from './../Purchase/Interface'
import Sale from './../Sale/Interface'
import Information from './../Information/Interface'

@injectable()
export default class Controller implements Serviceable {

	@inject(TYPES.ResponseableDomain) private responserService: Responseable
	@inject(TYPES.Updateable) private updateableService: Updateable
	@inject(TYPES.GeteableAll) private geteableAllService: GeteableAll
	@inject(TYPES.GeteableById) private geteableByIdService: GeteableById
	@inject(TYPES.Saveable) private saveableService: Saveable

	public async update(
		id: string,
		data: {},
		model: Model<Document, {}>,
		idUser: string,
	): Promise<Responseable> {

		return new Promise<Responseable>( async (resolve, reject) => {
			await this.updateableService.update(id, data, model, model, idUser)
				.then((res: Responseable) => {
					if(res && res.result !== undefined) {
						this.responserService = {
							result: res.result,
							message: res.message,
							error: res.error,
							status: res.status
						}
						resolve(this.responserService)
					} else {
						this.responserService = {
							result: 'Nop',
							message: 'La capa superior contesto undefined',
							error: '',
							status: 500
						}
					}
				}).catch((err: Responseable) => {
					this.responserService = {
						result: err.result,
						message: err.message,
						error: err.error,
						status: err.status
					}
				})
			reject(this.responserService)
		})
	}

	public async getById(
		id: string,
		model: Model<Document, {}>,
	): Promise<Responseable> {

		return new Promise<Responseable>( async (resolve, reject) => {

			await this.geteableByIdService.getById(id, model, model)
				.then((res: Responseable) => {
					if(res && res.result !== undefined) {
						this.responserService = {
							result: res,
							message: res.message,
							error: res.error,
							status: res.status
						}
						resolve(this.responserService)
					} else {
						this.responserService = {
							result: 'Nop',
							message: 'La capa superior contesto undefined',
							error: '',
							status: 500
						}
					}
				}).catch((err: Responseable) => {
					this.responserService = {
						result: err.result,
						message: err.message,
						error: err.error,
						status: err.status
					}
				})
			reject(this.responserService)
		})
	}
		
	public async save(
		data: Registrable,
		model: Model<Document, {}>,
		idUser: string
	): Promise<Responseable> {

		return new Promise<Responseable>( async (resolve, reject) => {
			await this.saveableService.save(data, model, model, idUser)
				.then((res: Responseable) => {
					if(res && res.result !== undefined) {
						this.responserService = { result: res.result, message: res.message, error: res.error, status: res.status }
						resolve(this.responserService)
					} else {
						this.responserService = { result: 'Nop', message: 'La capa superior contesto undefined', error: '', status: 500 }
						reject(this.responserService)
					}
				}).catch((err: Responseable) => {
					this.responserService = { result: err.result, message: err.message, error: err.error, status: err.status }
					reject(this.responserService)
				})
		})
	}

	public async getAll(
		itemModel: Model<Document, {}>,
		purchaseModel: Model<Document, {}>,
		informationModel: Model<Document, {}>,
		project: {},
		match: {},
		sort: {},
		group: {},
		limit: number,
		skip: number
	): Promise<Responseable> {

			return new Promise<Responseable>( async (resolve, reject) => {

				let storeList: any[] = []

				await this.geteableAllService.getAll(itemModel, project, match, sort, group, limit, skip)
					.then(async (result: Responseable) => {
						if(result) {

							if(
								result.result !== undefined &&
								result.result !== null &&
								result.result[0] !== undefined &&
								result.result[0].items !== undefined &&
								Array.isArray(result.result[0].items) &&
								result.result[0].items.length > 0
							) {
								result.result[0].items.map((item: Item) => {
									if(
										item.image !== undefined &&
										item.image !== null &&
										item.image !== ''
									) {
										item.image = process.env.API + '/image/' + item.image
									} else {
										item.image = process.env.API + '/image/silueta.png'
									}
								})
								result.result[0].items.map((item: {
									_id: string
								}) => {
									if(item._id !== undefined) {
										storeList.push({
											$oid: item._id
										})
									}
								})
							} else {
								
								// if(
								// 	result.result !== undefined &&
								// 	result.result !== null &&
								// 	Array.isArray(result.result) &&
								// 	result.result.length > 0
								// ) {
								// 	result.result.map((item: Item) => {
								// 		if(
								// 			item.image !== undefined &&
								// 			item.image !== null &&
								// 			item.image !== ''
								// 		) {
								// 			item.image = process.env.API + '/image/' + item.image
								// 		} else {
								// 			item.image = process.env.API + '/image/silueta.png'
								// 		}
								// 	})
								// }
							}


							if(
								result.result !== undefined &&
								result.result !== null &&
								result.result[0] !== undefined &&
								result.result[0].items !== undefined &&
								Array.isArray(result.result[0].items) &&
								result.result[0].items.length > 0
							) {
								let matchPurchase = {
									item: {
										$in: storeList
									},
									operationType: {
										$ne: 'D'
									},
								}
								let matchInformation = {
									item: {
										$in: storeList
									},
									isCheckout: true,
									operationType: {
										$ne: 'D'
									},
								}

								await Promise.all(
									result.result[0].items.map(async (item: Item) => {

										let stock: number = 0
										
										await this.geteableAllService.getAll(purchaseModel, { _id: 1, operationType: 1, item: 1, quantity: 1 }, matchPurchase, {}, {}, 0, 0)
											.then((res: Responseable) => {
												if(
													Array.isArray(res.result) &&
													res.result.length > 0
												) {
													res.result.map((purchase: Purchase) => {
														if(item._id.toString() === purchase.item.toString()){
															stock = stock + purchase.quantity
														}
													})
												}
											}).catch((err: Responseable) => {
												this.responserService = {
													result: err.result,
													message: err.message,
													error: err.error,
													status: err.status
												}
											})
	
										await this.geteableAllService.getAll(informationModel, { _id: 1, operationType: 1, item: 1, quantity: 1, isCheckout: 1 }, matchInformation, {}, {}, 0, 0)
											.then((res: Responseable) => {
												if(
													Array.isArray(res.result) &&
													res.result.length > 0
												) {
													res.result.map((information: Information) => {
														if(item._id.toString() === information.item.toString()){
															stock = stock - information.quantity
														}
													})
												}
											}).catch((err: Responseable) => {
												this.responserService = {
													result: err.result,
													message: err.message,
													error: err.error,
													status: err.status
												}
											})
										item['quantity'] = stock
									})
								)
								
							} else {
								let item = result.result
								await this.geteableAllService.getAll(purchaseModel, { _id: 1, operationType: 1, item: 1, quantity: 1 }, { operationType: { $ne: 'D' }, item: { $oid: item._id } }, {}, {}, 0, 0)
										.then((res: Responseable) => {
											if(
												Array.isArray(res.result) &&
												res.result.length > 0
											) {
												res.result.map((purchase: Purchase) => {
													item.stock = item.stock + purchase.quantity
												})
											}
										}).catch((err: Responseable) => {
											this.responserService = {
												result: err.result,
												message: err.message,
												error: err.error,
												status: err.status
											}
										})

									await this.geteableAllService.getAll(informationModel, { _id: 1, operationType: 1, item: 1, quantity: 1 }, { operationType: { $ne: 'D' }, item: { $oid: item._id } }, {}, {}, 0, 0)
										.then((res: Responseable) => {
											if(
												Array.isArray(res.result) &&
												res.result.length > 0
											) {
												res.result.map((information: Information) => {
													item.stock = item.stock - information.quantity
												})
											}
										}).catch((err: Responseable) => {
											this.responserService = {
												result: err.result,
												message: err.message,
												error: err.error,
												status: err.status
											}
										})
								if(
									item.image !== undefined &&
									item.image !== null &&
									item.image !== ''
								) {
									item.image = process.env.API + '/image/' + item.image
								} else {
									item.image = process.env.API + '/image/silueta.png'
								}
							}
							this.responserService = {
								result: result.result,
								message: result.message,
								error: result.error,
								status: result.status
							}
							resolve(this.responserService)
						} else {
							this.responserService = {
								result: 'Nop',
								message: 'No existe result',
								error: 'obj.getAll()',
								status: 500
							}
						}
					}).catch((err: Responseable) => {
						this.responserService = {
							result: err.result,
							message: err.message,
							error: err.error,
							status: err.status
						}
					})
				reject(this.responserService)
			})
	}

}