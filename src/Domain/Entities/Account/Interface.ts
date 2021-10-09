import { Schema } from 'mongoose'
import InterfaceUtil from './../Util/Ports/Dtoable'

export default interface Interface extends InterfaceUtil {

	client: string
	paymentDate: string
	moneyPeso: number
	moneyDolar: number
	moneyUsdt: number
	paymentClient: string
	person: string
	usd: number
	ars: number
	
}