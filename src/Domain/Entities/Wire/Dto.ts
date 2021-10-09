import { IsNumber, IsString, Min } from 'class-validator'
import { Schema } from 'mongoose'
import { injectable } from 'inversify'

import DtoUtil from '../Util/Dto'
import Interface from './Interface'

@injectable()
export default class EntityDto extends DtoUtil implements Interface {

	public paymentDate: Date

	@IsString({
		message: ' se debe seleccionar al menos una operación'
	})
	public operation: string

	public country: string

	@IsNumber({}, {
		message: ' se debe ingresar una cantidad de USD determinada'
	})
	@Min(0, {
		message: ' el monto nominal (USD) no debe ser menor a cero'
	})
	public amount: number

	public client: string

	@IsNumber({}, {
		message: ' se debe ingresar un porcentaje determinado (%)'
	})
	@Min(0, {
		message: ' el porcentaje (%) no debe ser menor a cero'
	})
	public exchangeRate: number

	@IsNumber({}, {
		message: ' se debe ingresar un porcentaje determinado (%)'
	})
	@Min(0, {
		message: ' el porcentaje (%) no debe ser menor a cero'
	})
	public commission: number
	
	public payToClient: boolean
	public payToOperator: boolean
	public state: string

}