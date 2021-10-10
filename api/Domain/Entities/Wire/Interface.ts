import { Schema } from 'mongoose'
import InterfaceUtil from './../Util/Ports/Dtoable'

export default interface Interface extends InterfaceUtil {

	paymentDate: Date
	operation: string
	country: string
	amount: number
	client: string
	exchangeRate: number
	commission: number
	payToClient: boolean
	payToOperator: boolean
	state: string
	
}