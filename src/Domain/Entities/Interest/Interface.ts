import { Schema } from 'mongoose'
import InterfaceUtil from './../Util/Ports/Dtoable'

export default interface Interface extends InterfaceUtil {

	periodDate: Date
	person: string
	moneyPeso: number
	moneyDolar: number
	
}