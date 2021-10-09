import { Schema } from 'mongoose'
import InterfaceUtil from './../Util/Ports/Dtoable'

export default interface Interface extends InterfaceUtil {

	amount: number
	moneyUsdt: number
	moneyDolar: number
	moneyPeso: number
	
}