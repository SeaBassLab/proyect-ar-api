import { IsDefined, IsString, IsNumber, Min, MinLength, ValidateIf } from 'class-validator'
import { Schema } from 'mongoose'
import { injectable } from 'inversify'

import DtoUtil from '../Util/Dto'
import Interface from './Interface'

@injectable()
export default class EntityDto extends DtoUtil implements Interface {

	@IsString({
		message: ' se debe seleccionar al menos una operación'
	})
	public operation: string

	@IsNumber({}, {
		message: ' se debe ingresar una cantidad de $USDT'
	})
	public amount: number

	public client: string

	@IsNumber({}, {
		message: ' se debe ingresar un tipo de cambio determinado'
	})
	@Min(0, {
		message: ' el tipo de cambio (%) no debe ser menor a cero'
	})
	public exchangeRate: number

	public sparkler: string

	@IsNumber({}, {
		message: ' se debe ingresar una comisión determinada'
	})
	@Min(0, {
		message: ' la comisión no puede ser menor a cero'
	})
	public commission: number

	@IsString({
		message: ' se debe seleccionar un estado'
	})
	public state: string

}