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

import Usdt from './Interface'

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
		model: Model<Document, {}>,
		project: {},
		match: {},
		sort: {},
		group: {},
		limit: number,
		skip: number
	): Promise<Responseable> {

			return new Promise<Responseable>( async (resolve, reject) => {

				await this.geteableAllService.getAll(model, project, match, sort, group, limit, skip)
					.then((result: Responseable) => {
						if(result) {

							if(
								result.result !== undefined &&
								result.result !== null &&
								result.result[0] !== undefined &&
								result.result[0].items !== undefined &&
								Array.isArray(result.result[0].items) &&
								result.result[0].items.length > 0
							) {
								result.result[0].items.map((usdt: Usdt) => {
									usdt['amountExchange'] = this.roundTo(usdt.amount * ((100 + usdt.exchangeRate) / 100), 2)
									usdt['totalCommission'] = this.roundTo(usdt.amount * ((usdt.commission) / 100), 2)
									if(usdt.state === 'Pagado') {
										if(usdt.operation === 'VENTA') usdt['totalClient'] = this.roundTo(usdt['amountExchange'] - usdt['totalCommission'], 2)
										if(usdt.operation === 'COMPRA') usdt['totalClient'] = this.roundTo(usdt['amountExchange'] + usdt['totalCommission'], 2)
									}
									if(usdt.state === 'No Pagado') usdt['totalClient'] = this.roundTo(usdt['amountExchange'], 2)
								})

								// condicional para mongo

									// let amountExchange  = amount * ((100 + exchangeRate) / 100)
									// let totalCommission  = amount * ((commission) / 100)
									// let totalClientAdd  = amountExchange + totalCommission
									// let totalClientSubstract  = amountExchange - totalCommission

									let totalClient = { 
										$cond: {
											if: {
												$eq: [
													"$state",
													"Pagado"
												]
											},
											then: { 
												$cond: {
													if: {
														$eq: [
															"$operation",
															"VENTA"
														]
													},
													then: "$totalClientSubstract",
													else: "$totalClientAdd"
												}
											},
											else: "$amountExchange"
										}
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

	private roundTo(value: number, places: number){
		var power = Math.pow(10, places);
		return Math.round(value * power) / power;
	}

}