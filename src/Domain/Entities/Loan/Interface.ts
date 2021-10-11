import { Schema } from 'mongoose'
import InterfaceUtil from './../Util/Ports/Dtoable'

export default interface Interface extends InterfaceUtil {

	client: string
	paymentDate: string
	moneyPeso: number
	moneyDolar: number
	paymentClient: string
	bank: string
	extraction: number
	
}