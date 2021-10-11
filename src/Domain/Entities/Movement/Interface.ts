import { Schema } from 'mongoose'
import InterfaceUtil from './../Util/Ports/Dtoable'

export default interface Interface extends InterfaceUtil {

	concept: string
	moneyPeso: number
	moneyDolar: number
	
}