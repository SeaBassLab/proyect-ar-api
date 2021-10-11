import { Schema } from 'mongoose'
import InterfaceUtil from './../Util/Ports/Dtoable'

import Item from './../Item/Interface'

export default interface Interface extends InterfaceUtil {
	name: string
	dni: string
	phone: string
	email: string
	city: string
	dateOfBirth: number
	address: string
	addressNumber: string
	floor: string
	postalCode: string
	item: Schema.Types.ObjectId
	quantity: number
	amount: number
	cart: Schema.Types.ObjectId
	location: Schema.Types.ObjectId
	sale: number
	ship: number
	isCheckout: boolean
}
