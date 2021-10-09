import { IsDefined, IsString } from 'class-validator'
import { Schema } from 'mongoose'
import { injectable } from 'inversify'

import DtoUtil from '../Util/Dto'
import Interface from './Interface'

@injectable()
export default class EntityDto extends DtoUtil implements Interface {

	public retirement: string
	public paymentDate: Date
	public amount: number
	public client: string
	public clientPercentage: number
	public operatorPercentage: number
	public other: string
	public clientPayment: string
	public bank: string
	public extraction: number
	public account: string
}