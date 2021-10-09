import { IsDefined, IsString } from 'class-validator'
import { Schema } from 'mongoose'
import { injectable } from 'inversify'

import DtoUtil from '../Util/Dto'
import Interface from './Interface'

@injectable()
export default class EntityDto extends DtoUtil implements Interface {

	public depositDate: Date
	public paymentDate: Date
	public days: number
	public bank: string
	public check: string
	public nominalAmount: number
	public client: string
	public clientPercentage: number
	public operatorPercentage: number
	public other: string
	public clientCharge: string
	public operationCharge: string
	public stateString: string

}