import { Router, Response, NextFunction } from 'express'
import { Model, Document } from 'mongoose'
import { injectable, inject, named } from 'inversify';

import TYPES from './../../../TYPES';
import container from './../../../inversify.config';

import Routeable from '../Ports/Routeable'
import Patheable from '../Ports/Patheable'
import Responseable from '../Responseable'
import DomainResponseable from '../../../Domain/Entities/Util/Ports/Responseable'

import RequestWithUser from '../../Ports/RequestWithUser'

import Authenticateable from '../../Middlewares/Ports/Authenticateable'

import ConnectionableProvider from '../../../Infrastructure/Persistence/Ports/ConnectionableProvider'

import Validateable from '../../../Domain/Middleware/Ports/Validateable'
import Schemable from '../../../Domain/Entities/Util/Ports/Schemable'
import Validable from '../../../Domain/Entities/Util/Ports/Validable'

import Dto from '../../../Domain/Entities/Box/Dto'
import ObjInterface from '../../../Domain/Entities/Box/Interface'
import Serviceable from '../../../Domain/Entities/Box/Ports/Serviceable'

@injectable()
export default class Controller implements Routeable, Patheable {

	public router: Router = container.get<Router>(TYPES.Router)
	public path: string = '/box'
	private validationProvider: Validateable = container.get<Validateable>(TYPES.Validateable)
	private authMid: Authenticateable = container.get<Authenticateable>(TYPES.Authenticateable)
	@inject(TYPES.ConnectionableProvider) private connectionProvider: ConnectionableProvider
	@inject(TYPES.Responseable) private responserService: Responseable
	
	@inject(TYPES.Validable) @named(TYPES.Box) private dto: Validable
	@inject(TYPES.Schemable) @named(TYPES.Box) private boxSchema: Schemable
	@inject(TYPES.Schemable) @named(TYPES.Account) private accountSchema: Schemable
	@inject(TYPES.Schemable) @named(TYPES.Blue) private blueSchema: Schemable
	@inject(TYPES.Schemable) @named(TYPES.Check) private checkSchema: Schemable
	@inject(TYPES.Schemable) @named(TYPES.Interest) private interestSchema: Schemable
	@inject(TYPES.Schemable) @named(TYPES.Investment) private investmentSchema: Schemable
	@inject(TYPES.Schemable) @named(TYPES.Loan) private loanSchema: Schemable
	@inject(TYPES.Schemable) @named(TYPES.Movement) private movementSchema: Schemable
	@inject(TYPES.Schemable) @named(TYPES.Transfer) private transferSchema: Schemable
	@inject(TYPES.Schemable) @named(TYPES.Usdt) private usdtSchema: Schemable
	@inject(TYPES.Schemable) @named(TYPES.Wire) private wireSchema: Schemable
	@inject(TYPES.BoxServiceableDomain) private boxService: Serviceable

	constructor() {
		this.initializeRoutes(this.validationProvider);
	}

	initializeRoutes(validationProvider: Validateable) {

		this.router
			.get(this.path, [this.authMid.authenticate], this.getAllObjs)
			.get(`${this.path}/boxSchema`, [this.authMid.authenticate], this.getSchema)
			.get(`${this.path}/:id`, [this.authMid.authenticate], this.getObjById)
			.post(this.path, [this.authMid.authenticate, validationProvider.validate(Dto)], this.saveObj)
			.put(`${this.path}/:id`, [this.authMid.authenticate, validationProvider.validate(Dto, true)], this.updateObj)
			.delete(`${this.path}/:id`, [this.authMid.authenticate], this.deleteObj);
	}

	private getSchema = async (request: RequestWithUser, response: Response, next: NextFunction) => {
		
		this.responserService.res = {
			result: this.boxSchema.obj,
			message: 'Consulta exitosa',
			status: 200,
			error: ''
		}

		if(this.responserService.res.status) {
			response.status(this.responserService.res.status).send(this.responserService.res)
		} else {
			response.status(500).send(this.responserService.res)
		}
	}

	private getObjById = async (request: RequestWithUser, response: Response, next: NextFunction) => {
		
		var model: Model<Document, {}> = await this.connectionProvider.getModel(request.database, this.boxSchema.name, this.boxSchema)

		const id: string = request.params.id;
		const idUser: string = request.user._id;

		await this.boxService.getById(id, model)
			.then( async (res: DomainResponseable) => {
				if(res && res.result !== undefined) {
					this.responserService.res = {
						result: res.result,
						message: res.message,
						status: res.status,
						error: res.error
					}
				} else {
					this.responserService.res = { result: 'Nop', message: 'La capa superior contesto undefined', error: '', status: 500 }
				}
			}).catch((err: DomainResponseable) => {
				this.responserService.res = { result: err.result, message: err.message, error: err.error, status: err.status }
			})
		if(this.responserService.res.status) {
			response.status(this.responserService.res.status).send(this.responserService.res)
		} else {
			response.status(500).send(this.responserService.res)
		}
	}

	private getAllObjs = async (request: RequestWithUser, response: Response, next: NextFunction) => {

		const boxModel: Model<Document, {}> = await this.connectionProvider.getModel(request.database, this.boxSchema.name, this.boxSchema)
		const accountModel: Model<Document, {}> = await this.connectionProvider.getModel(request.database, this.accountSchema.name, this.accountSchema)
		const blueModel: Model<Document, {}> = await this.connectionProvider.getModel(request.database, this.blueSchema.name, this.blueSchema)
		const checkModel: Model<Document, {}> = await this.connectionProvider.getModel(request.database, this.checkSchema.name, this.checkSchema)
		const interestModel: Model<Document, {}> = await this.connectionProvider.getModel(request.database, this.interestSchema.name, this.interestSchema)
		const investmentModel: Model<Document, {}> = await this.connectionProvider.getModel(request.database, this.investmentSchema.name, this.investmentSchema)
		const loanModel: Model<Document, {}> = await this.connectionProvider.getModel(request.database, this.loanSchema.name, this.loanSchema)
		const movementModel: Model<Document, {}> = await this.connectionProvider.getModel(request.database, this.movementSchema.name, this.movementSchema)
		const transferModel: Model<Document, {}> = await this.connectionProvider.getModel(request.database, this.transferSchema.name, this.transferSchema)
		const usdtModel: Model<Document, {}> = await this.connectionProvider.getModel(request.database, this.usdtSchema.name, this.usdtSchema)
		const wireModel: Model<Document, {}> = await this.connectionProvider.getModel(request.database, this.wireSchema.name, this.wireSchema)

		let error;
		let project = {};
		let match = {};
		let sort = {};
		let group = {};
		let limit = 0;
		let skip = 0;

		let recivedProject: any = request.query.project
		let recivedMatch: any = request.query.match
		let recivedSort: any = request.query.sort
		let recivedGroup: any = request.query.group
		let recivedLimit: any = request.query.limit
		let recivedSkip: any = request.query.skip

		if (request.query && request.query !== {}) {
			if (request.query.project) { try { project = JSON.parse(recivedProject); } catch (err) { error = err; } }
			if (request.query.match) { try { match = JSON.parse(recivedMatch); } catch (err) { error = err; } }
			if (request.query.sort) { try { sort = JSON.parse(recivedSort); } catch (err) { error = err; } }
			if (request.query.group) { try { group = JSON.parse(recivedGroup); } catch (err) { error = err; } }
			if (request.query.limit) { try { limit = parseInt(recivedLimit, 10); } catch (err) { error = err; } }
			if (request.query.skip) { try { skip = parseInt(recivedSkip, 10); } catch (err) { error = err; } }
		}

		if (!error) {
			await this.boxService.getAll(
				boxModel,
				accountModel,
				blueModel,
				checkModel,
				interestModel,
				investmentModel,
				loanModel,
				movementModel,
				transferModel,
				usdtModel,
				wireModel,
				project,
				match,
				sort,
				group,
				limit,
				skip
			).then((res: DomainResponseable) => {
					if(res && res.result !== undefined) {
						if(res.result) {
							this.responserService.res = {
								result: res.result,
								message: res.message,
								status: res.status,
								error: res.error
							}
						} else {
							this.responserService.res = {
								result: [],
								message: 'No existe el res.result',
								status: 500,
								error: 'obj.getAllObjs()'
							}
						}
					} else {
						this.responserService.res = {
							result: [],
							message: 'No existe el res',
							status: 500,
							error: 'obj.getAllObjs()'
						}
					}
				}).catch((err: DomainResponseable) => {
					this.responserService.res = {
						result: err.result,
						message: err.message,
						status: err.status,
						error: err.error
					}
				})
		} else {
			this.responserService.res = {
				result: [],
				message: 'No se puede realizar la consulta',
				status: 428,
				error: 'Error en los parametros enviados'
			}
		}
		if(this.responserService.res.status) {
			response.status(this.responserService.res.status).send(this.responserService.res)
		} else {
			response.status(500).send(this.responserService.res)
		}
	}

	private saveObj = async (request: RequestWithUser, response: Response, next: NextFunction) => {
		
		var model: Model<Document, {}> = await this.connectionProvider.getModel(request.database, this.boxSchema.name, this.boxSchema)

		var objData: ObjInterface = request.body;
		const id = request.user._id

		await this.boxService.save(objData, model, id)
			.then((res: DomainResponseable) => {
				if(res && res.result !== undefined) {
					this.responserService.res = {
						result: res.result,
						message: res.message,
						status: res.status,
						error: res.error
					}
				} else {
					this.responserService.res = { result: 'Nop', message: 'La capa superior contesto undefined', error: '', status: 500 }
				}
			})
			.catch((err: any) => {
				this.responserService.res = { result: err.result, message: err.message, error: err.error, status: err.status }
			})
			
		if(this.responserService.res.status) {
			response.status(this.responserService.res.status).send(this.responserService.res)
		} else {
			response.status(500).send(this.responserService.res)
		}
	}

	private updateObj = async (request: RequestWithUser, response: Response, next: NextFunction) => {
		
		var model: Model<Document, {}> = await this.connectionProvider.getModel(request.database, this.boxSchema.name, this.boxSchema)

		const id: string = request.params.id;
		const objData: ObjInterface = request.body;
		const idUser: string = request.user._id;

		await this.boxService.getById(id, model)
			.then( async (res: DomainResponseable) => {
				if(res && res.result !== undefined) {
					if(res.status === 200) {
						await this.boxService.update(id, objData, model, idUser)
							.then((res: DomainResponseable) => {
								if(res && res.result !== undefined) {
									this.responserService.res = {
										result: res.result,
										message: res.message,
										status: res.status,
										error: res.error
									}
								} else {
									this.responserService.res = { result: 'Nop', message: 'La capa superior contesto undefined', error: '', status: 500 }
								}
							}).catch((err: DomainResponseable) => {
								this.responserService.res = { result: err.result, message: err.message, error: err.error, status: err.status }
							})
					} else {
						this.responserService.res = {
							result: res.result,
							message: res.message,
							status: res.status,
							error: res.error
						}
					}
				} else {
					this.responserService.res = { result: 'Nop', message: 'La capa superior contesto undefined', error: '', status: 500 }
				}
			}).catch((err: DomainResponseable) => {
				this.responserService.res = { result: err.result, message: err.message, error: err.error, status: err.status }
			})
		if(this.responserService.res.status) {
			response.status(this.responserService.res.status).send(this.responserService.res)
		} else {
			response.status(500).send(this.responserService.res)
		}
	}

	private deleteObj = async (request: RequestWithUser, response: Response, next: NextFunction) => {

		var model: Model<Document, {}> = await this.connectionProvider.getModel(request.database, this.boxSchema.name, this.boxSchema)

		const id: string = request.params.id;
		const idUser: string = request.user._id

		await this.boxService.getById(id, model)
			.then( async (getObjById: DomainResponseable) => {
				if(getObjById) {
					let obj = getObjById.result
					obj.operationType = 'D'
					await this.boxService.update(id, obj, model, idUser)
						.then((update: DomainResponseable) => {
							if(update) {
								this.responserService.res = {
									result: update.result,
									message: update.message,
									error: update.error,
									status: update.status
								}
							} else {
								this.responserService.res = { result: 'Nop', message: 'La capa superior contesto undefined', error: '', status: 500 }
							}
						}).catch((err: DomainResponseable) => {
							this.responserService.res = { result: err.result, message: err.message, error: err.error, status: err.status }
						})
				} else {
					this.responserService.res = { result: 'Nop', message: 'La capa superior contesto undefined', error: '', status: 500 }
				}
			}).catch((err: DomainResponseable) => {
				this.responserService.res = { result: err.result, message: err.message, error: err.error, status: err.status }
			})
		if(this.responserService.res.status) {
			response.status(this.responserService.res.status).send(this.responserService.res)
		} else {
			response.status(500).send(this.responserService.res)
		}
	}

}