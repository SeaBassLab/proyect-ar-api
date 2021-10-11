import { Schema } from 'mongoose'
import { injectable } from 'inversify';

import Schemable from '../Util/Model'
import Nameable from '../Util/Ports/Nameable'

@injectable()
export default class ENTITY_SCHEMA extends Schemable implements Nameable {
	
	public name: string

	constructor() {

		let entity: string = 'transfer'

		super({

			retirement: {
				type: String,
				typed: 'string'
			},
			paymentDate: {
				type: Date,
				typed: 'date'
			},
			amount: {
				type: Number,
				typed: 'number'
			},
			client: {
				type: String,
				typed: 'string'
			},
			clientPercentage: {
				type: Number,
				typed: 'number'
			},
			operatorPercentage: {
				type: Number,
				typed: 'number'
			},
			other: {
				type: String,
				typed: 'string'
			},
			clientPayment: {
				type: String,
				typed: 'string'
			},
			bank: {
				type: String,
				typed: 'string'
			},
			payments: {
				type: Number,
				typed: 'number'
			},
			extraction: {
				type: Number,
				typed: 'number'
			},
			account: {
				type: String,
				typed: 'string'
			},
			
			entity: {
				type: String,
				typed: entity
			}
	
		}, { 
			collection: entity
		})

		this.name = entity

	}
}