import { Schema } from 'mongoose'
import InterfaceUtil from './../Util/Ports/Dtoable'

export default interface Interface extends InterfaceUtil {

	operation: string
	amount: number
	client: string
	exchangeRate: number
	sparkler: string // chispero
	commission: number
	state: string
	
}