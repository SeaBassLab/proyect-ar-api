import { Schema } from 'mongoose'
import InterfaceUtil from './../Util/Ports/Dtoable'

export default interface Interface extends InterfaceUtil {

	depositDate: Date
	paymentDate: Date
	days: number
	bank: string
	check: string
	nominalAmount: number
	client: string
	clientPercentage: number
	operatorPercentage: number
	other: string
	clientCharge: string
	operationCharge: string
	stateString: string
	
}