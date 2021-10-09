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

import Account from './../Account/Interface'
import Blue from './../Blue/Interface'
import Check from './../Check/Interface'
import Interest from './../Interest/Interface'
import Investment from './../Investment/Interface'
import Loan from './../Loan/Interface'
import Movement from './../Movement/Interface'
import Transfer from './../Transfer/Interface'
import Usdt from './../Usdt/Interface'
import Wire from './../Wire/Interface'
import AccountServiceable from './../Account/Ports/Serviceable'
import BlueServiceable from './../Blue/Ports/Serviceable'
import CheckServiceable from './../Check/Ports/Serviceable'
import InterestServiceable from './../Interest/Ports/Serviceable'
import InvestmentServiceable from './../Investment/Ports/Serviceable'
import LoanServiceable from './../Loan/Ports/Serviceable'
import MovementServiceable from './../Movement/Ports/Serviceable'
import TransferServiceable from './../Transfer/Ports/Serviceable'
import UsdtServiceable from './../Usdt/Ports/Serviceable'
import WireServiceable from './../Wire/Ports/Serviceable'

@injectable()
export default class Controller implements Serviceable {

	@inject(TYPES.ResponseableDomain) private responserService: Responseable
	@inject(TYPES.Updateable) private updateableService: Updateable
	@inject(TYPES.GeteableAll) private geteableAllService: GeteableAll
	@inject(TYPES.GeteableById) private geteableByIdService: GeteableById
	@inject(TYPES.Saveable) private saveableService: Saveable

	@inject(TYPES.AccountServiceableDomain) private accountService: AccountServiceable
	@inject(TYPES.BlueServiceableDomain) private blueService: BlueServiceable
	@inject(TYPES.CheckServiceableDomain) private checkService: CheckServiceable
	@inject(TYPES.InterestServiceableDomain) private interestService: InterestServiceable
	@inject(TYPES.InvestmentServiceableDomain) private investmentService: InvestmentServiceable
	@inject(TYPES.LoanServiceableDomain) private loanService: LoanServiceable
	@inject(TYPES.MovementServiceableDomain) private movementService: MovementServiceable
	@inject(TYPES.TransferServiceableDomain) private transferService: TransferServiceable
	@inject(TYPES.UsdtServiceableDomain) private usdtService: UsdtServiceable
	@inject(TYPES.WireServiceableDomain) private wireService: WireServiceable

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
		boxModel: Model<Document, {}>,
		accountModel: Model<Document, {}>,
		blueModel: Model<Document, {}>,
		checkModel: Model<Document, {}>,
		interestModel: Model<Document, {}>,
		investmentModel: Model<Document, {}>,
		loanModel: Model<Document, {}>,
		movementModel: Model<Document, {}>,
		transferModel: Model<Document, {}>,
		usdtModel: Model<Document, {}>,
		wireModel: Model<Document, {}>,
		project: {},
		match: {},
		sort: {},
		group: {},
		limit: number,
		skip: number
	): Promise<Responseable> {

			return new Promise<Responseable>( async (resolve, reject) => {

				await this.geteableAllService.getAll(boxModel, project, match, sort, group, limit, skip)
					.then(async (result: Responseable) => {
						if(result) {

							let boxList: any[] = []
							let accountList: Account[] = []
							let blueList: Blue[] = []
							let checkList: Check[] = []
							let interestList: Interest[] = []
							let investmentList: Investment[] = []
							let loanList: Loan[] = []
							let movementList: Movement[] = []
							let transferList: Transfer[] = []
							let usdtList: Usdt[] = []
							let wireList: Wire[] = []
							let accountMoneyPeso: number = 0
							let accountMoneyDolar: number = 0
							let accountMoneyUsdt: number = 0
							let balanceMoneyPeso: number = 0
							let balanceMoneyDolar: number = 0
							let balanceMoneyUsdt: number = 0
							let currentBalanceMoneyPeso: number = 0
							let currentBalanceMoneyDolar: number = 0
							let currentBalanceMoneyUsdt: number = 0
							let dateBalanceMoneyPeso: number = 0
							let dateBalanceMoneyDolar: number = 0
							let dateBalanceMoneyUsdt: number = 0
							let finalBalanceMoneyPeso: number = 0
							let finalBalanceMoneyDolar: number = 0
							let finalBalanceMoneyUsdt: number = 0
							let blueMoneyPeso: number = 0
							let blueMoneyDolar: number = 0
							let blueMoneyUsdt: number = 0
							let checkMoneyPeso: number = 0
							let checkMoneyDolar: number = 0
							let checkMoneyUsdt: number = 0
							let interestMoneyPeso: number = 0
							let interestMoneyDolar: number = 0
							let interestMoneyUsdt: number = 0
							let investmentMoneyPeso: number = 0
							let investmentMoneyDolar: number = 0
							let investmentMoneyUsdt: number = 0
							let loanMoneyPeso: number = 0
							let loanMoneyDolar: number = 0
							let loanMoneyUsdt: number = 0
							let movementMoneyPeso: number = 0
							let movementMoneyDolar: number = 0
							let movementMoneyUsdt: number = 0
							let transferMoneyPeso: number = 0
							let transferMoneyDolar: number = 0
							let transferMoneyUsdt: number = 0
							let usdtMoneyPeso: number = 0
							let usdtMoneyDolar: number = 0
							let usdtMoneyUsdt: number = 0
							let wireMoneyPeso: number = 0
							let wireMoneyDolar: number = 0
							let wireMoneyUsdt: number = 0

							accountList = (await this.accountService.getAll(accountModel, {}, { operationType: { $ne: 'D' } }, {}, {}, 0, 0)).result
							blueList = (await this.blueService.getAll(blueModel, {}, { operationType: { $ne: 'D' } }, {}, {}, 0, 0)).result
							checkList = (await this.checkService.getAll(checkModel, {}, { operationType: { $ne: 'D' } }, {}, {}, 0, 0)).result
							interestList = (await this.interestService.getAll(interestModel, {}, { operationType: { $ne: 'D' } }, {}, {}, 0, 0)).result
							investmentList = (await this.investmentService.getAll(investmentModel, {}, { operationType: { $ne: 'D' } }, {}, {}, 0, 0)).result
							loanList = (await this.loanService.getAll(loanModel, {}, { operationType: { $ne: 'D' } }, {}, {}, 0, 0)).result
							movementList = (await this.movementService.getAll(movementModel, {}, { operationType: { $ne: 'D' } }, {}, {}, 0, 0)).result
							transferList = (await this.transferService.getAll(transferModel, {}, { operationType: { $ne: 'D' } }, {}, {}, 0, 0)).result
							usdtList = (await this.usdtService.getAll(usdtModel, {}, { operationType: { $ne: 'D' } }, {}, {}, 0, 0)).result
							wireList = (await this.wireService.getAll(wireModel, {}, { operationType: { $ne: 'D' } }, {}, {}, 0, 0)).result

							accountList.map((account: Account) => {
								if(account.moneyPeso !== undefined) accountMoneyPeso = accountMoneyPeso + account.moneyPeso
								if(account.moneyDolar !== undefined) accountMoneyDolar = accountMoneyDolar + account.moneyDolar
							})
							dateBalanceMoneyPeso = dateBalanceMoneyPeso + accountMoneyPeso
							dateBalanceMoneyDolar = dateBalanceMoneyDolar + accountMoneyDolar
							dateBalanceMoneyUsdt = dateBalanceMoneyUsdt + accountMoneyUsdt

							blueList.map((blue: Blue) => {
								if(blue['totalClient'] !== undefined && blue.operation === 'VENTA') blueMoneyPeso = blueMoneyPeso + blue['totalClient']
								if(blue['totalClient'] !== undefined && blue.operation === 'COMPRA') blueMoneyPeso = blueMoneyPeso - blue['totalClient']
								if(blue.amount !== undefined && blue.operation === 'VENTA') blueMoneyDolar = blueMoneyDolar - blue.amount
								if(blue.amount !== undefined && blue.operation === 'COMPRA') blueMoneyDolar = blueMoneyDolar + blue.amount
							})
							dateBalanceMoneyPeso = dateBalanceMoneyPeso + blueMoneyPeso
							dateBalanceMoneyDolar = dateBalanceMoneyDolar + blueMoneyDolar
							dateBalanceMoneyUsdt = dateBalanceMoneyUsdt + blueMoneyUsdt

							checkList.map((check: Check) => {
								if(check['balance1'] !== undefined) checkMoneyPeso = checkMoneyPeso + check['balance1']
								if(check['balance2'] !== undefined) checkMoneyPeso = checkMoneyPeso + check['balance2']
							})
							dateBalanceMoneyPeso = dateBalanceMoneyPeso + checkMoneyPeso
							dateBalanceMoneyDolar = dateBalanceMoneyDolar + checkMoneyDolar
							dateBalanceMoneyUsdt = dateBalanceMoneyUsdt + checkMoneyUsdt

							interestList.map((interest: Interest) => {
								if(interest.moneyPeso !== undefined) interestMoneyPeso = interestMoneyPeso + interest.moneyPeso
								if(interest.moneyDolar !== undefined) interestMoneyDolar = interestMoneyDolar + interest.moneyDolar
							})
							dateBalanceMoneyPeso = dateBalanceMoneyPeso + interestMoneyPeso
							dateBalanceMoneyDolar = dateBalanceMoneyDolar + interestMoneyDolar
							dateBalanceMoneyUsdt = dateBalanceMoneyUsdt + interestMoneyUsdt

							investmentList.map((investment: Investment) => {
								if(investment.moneyPeso !== undefined) investmentMoneyPeso = investmentMoneyPeso + investment.moneyPeso
								if(investment.moneyDolar !== undefined) investmentMoneyDolar = investmentMoneyDolar + investment.moneyDolar
								if(investment.moneyUsdt !== undefined) investmentMoneyUsdt = investmentMoneyUsdt + investment.moneyUsdt
							})
							dateBalanceMoneyPeso = dateBalanceMoneyPeso + investmentMoneyPeso
							dateBalanceMoneyDolar = dateBalanceMoneyDolar + investmentMoneyDolar
							dateBalanceMoneyUsdt = dateBalanceMoneyUsdt + investmentMoneyUsdt

							loanList.map((loan: Loan) => {
								if(loan.moneyPeso !== undefined) loanMoneyPeso = loanMoneyPeso + loan.moneyPeso
								if(loan.moneyDolar !== undefined) loanMoneyDolar = loanMoneyDolar + loan.moneyDolar
							})
							dateBalanceMoneyPeso = dateBalanceMoneyPeso + loanMoneyPeso
							dateBalanceMoneyDolar = dateBalanceMoneyDolar + loanMoneyDolar
							dateBalanceMoneyUsdt = dateBalanceMoneyUsdt + loanMoneyUsdt

							movementList.map((movement: Movement) => {
								if(movement.moneyPeso !== undefined) movementMoneyPeso = movementMoneyPeso + movement.moneyPeso
								if(movement.moneyDolar !== undefined) movementMoneyDolar = movementMoneyDolar + movement.moneyDolar
							})
							dateBalanceMoneyPeso = dateBalanceMoneyPeso + movementMoneyPeso
							dateBalanceMoneyDolar = dateBalanceMoneyDolar + movementMoneyDolar
							dateBalanceMoneyUsdt = dateBalanceMoneyUsdt + movementMoneyUsdt

							transferList.map((transfer: Transfer) => {
								if(transfer['payment'] !== undefined) transferMoneyPeso = transferMoneyPeso + transfer['payment']
								if(transfer.extraction !== undefined) transferMoneyPeso = transferMoneyPeso + transfer.extraction
							})
							dateBalanceMoneyPeso = dateBalanceMoneyPeso + transferMoneyPeso
							dateBalanceMoneyDolar = dateBalanceMoneyDolar + transferMoneyDolar
							dateBalanceMoneyUsdt = dateBalanceMoneyUsdt + transferMoneyUsdt

							usdtList.map((usdt: Usdt) => {
								if(usdt['totalClient'] !== undefined && usdt.operation === 'VENTA') usdtMoneyDolar = usdtMoneyDolar + usdt['totalClient']
								if(usdt['totalClient'] !== undefined && usdt.operation === 'COMPRA') usdtMoneyDolar = usdtMoneyDolar - usdt['totalClient']

								if(usdt.amount !== undefined && usdt.operation === 'VENTA') usdtMoneyUsdt = usdtMoneyUsdt - usdt.amount
								if(usdt.amount !== undefined && usdt.operation === 'COMPRA') usdtMoneyUsdt = usdtMoneyUsdt + usdt.amount
							})
							dateBalanceMoneyPeso = dateBalanceMoneyPeso + usdtMoneyPeso
							dateBalanceMoneyDolar = dateBalanceMoneyDolar + usdtMoneyDolar
							dateBalanceMoneyUsdt = dateBalanceMoneyUsdt + usdtMoneyUsdt

							wireList.map((wire: Wire) => {
							})
							dateBalanceMoneyPeso = dateBalanceMoneyPeso + wireMoneyPeso
							dateBalanceMoneyDolar = dateBalanceMoneyDolar + wireMoneyDolar
							dateBalanceMoneyUsdt = dateBalanceMoneyUsdt + wireMoneyUsdt


							finalBalanceMoneyPeso = currentBalanceMoneyPeso + dateBalanceMoneyPeso
							finalBalanceMoneyDolar = currentBalanceMoneyDolar + dateBalanceMoneyDolar
							finalBalanceMoneyUsdt = currentBalanceMoneyUsdt + dateBalanceMoneyUsdt

							boxList.push({ _id: 'Saldo Inicial', boxList: 'Saldo Inicial', moneyPeso: currentBalanceMoneyPeso, moneyDolar: currentBalanceMoneyDolar, moneyUsdt: currentBalanceMoneyUsdt })
							boxList.push({ _id: 'Operaciones de la fecha', boxList: 'Operaciones de la fecha', moneyPeso: dateBalanceMoneyPeso, moneyDolar: dateBalanceMoneyDolar, moneyUsdt: dateBalanceMoneyUsdt })
							boxList.push({ _id: 'Saldo Final', boxList: 'Saldo Final', moneyPeso: finalBalanceMoneyPeso, moneyDolar: finalBalanceMoneyDolar, moneyUsdt: finalBalanceMoneyUsdt })
							boxList.push({ _id: 'empty', moneyPeso: '---------------', moneyDolar: '---------------', moneyUsdt: '---------------' })
							boxList.push({ _id: 'BLUE', boxList: 'BLUE', moneyPeso: blueMoneyPeso, moneyDolar: blueMoneyDolar, moneyUsdt: blueMoneyUsdt })
							boxList.push({ _id: 'CHEQUES', boxList: 'CHEQUES', moneyPeso: checkMoneyPeso, moneyDolar: checkMoneyDolar, moneyUsdt: checkMoneyUsdt })
							boxList.push({ _id: 'USDT', boxList: 'USDT', moneyPeso: usdtMoneyPeso, moneyDolar: usdtMoneyDolar, moneyUsdt: usdtMoneyUsdt })
							boxList.push({ _id: 'De Transferencias', boxList: 'De Transferencias', moneyPeso: transferMoneyPeso, moneyDolar: transferMoneyDolar, moneyUsdt: transferMoneyUsdt })
							boxList.push({ _id: 'GASTOS -INGRESOS', boxList: 'GASTOS -INGRESOS', moneyPeso: movementMoneyPeso, moneyDolar: movementMoneyDolar, moneyUsdt: movementMoneyUsdt })
							boxList.push({ _id: 'PRESTAMOS', boxList: 'PRESTAMOS', moneyPeso: loanMoneyPeso, moneyDolar: loanMoneyDolar, moneyUsdt: loanMoneyUsdt })
							boxList.push({ _id: 'INTERESES PAGADOS', boxList: 'INTERESES PAGADOS', moneyPeso: interestMoneyPeso, moneyDolar: interestMoneyDolar, moneyUsdt: interestMoneyUsdt })
							boxList.push({ _id: 'INVERSIONES', boxList: 'INVERSIONES', moneyPeso: investmentMoneyPeso, moneyDolar: investmentMoneyDolar, moneyUsdt: investmentMoneyUsdt })
							boxList.push({ _id: 'Cta CTES OPE', boxList: 'Cta CTES OPE', moneyPeso: accountMoneyPeso, moneyDolar: accountMoneyDolar, moneyUsdt: accountMoneyUsdt })
							boxList.push({ _id: 'TT CABLES', boxList: 'TT CABLES', moneyPeso: wireMoneyPeso, moneyDolar: wireMoneyDolar, moneyUsdt: wireMoneyUsdt })
							boxList.push({ _id: 'SALDO BANCOS/CAJA', boxList: 'SALDO BANCOS/CAJA', moneyPeso: balanceMoneyPeso, moneyDolar: balanceMoneyDolar, moneyUsdt: balanceMoneyUsdt })
							boxList.push({ _id: 'emptyBox', moneyPeso: '---------------', moneyDolar: '---------------', moneyUsdt: '---------------' })
							boxList.push({ _id: 'Total', boxList: 'Total', moneyPeso: balanceMoneyPeso, moneyDolar: balanceMoneyDolar, moneyUsdt: balanceMoneyUsdt })

							if(result.result[0] !== undefined) {
								result.result[0].items = boxList
								result.result[0].count = boxList.length
							} else {
								result.result = []
								result.result.push({
									items: boxList,
									count: boxList.length
								})
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