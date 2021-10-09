import { IsNumber, Min } from 'class-validator'
import { Schema } from 'mongoose'
import { injectable } from 'inversify'

import DtoUtil from '../Util/Dto'
import Interface from './Interface'

@injectable()
export default class EntityDto extends DtoUtil implements Interface {

	public client: string
	public paymentDate: string

	public moneyPeso: number

	public moneyDolar: number
	public paymentClient: string
	public bank: string
	public extraction: number

}