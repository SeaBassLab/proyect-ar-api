import { Schema } from 'mongoose'
import InterfaceUtil from './../Util/Ports/Dtoable'

export default interface Interface extends InterfaceUtil {

	retirement: string
	paymentDate: Date
	amount: number
	client: string
	clientPercentage: number
	operatorPercentage: number
	other: string
	clientPayment: string
	bank: string
	extraction: number
	account: string

}