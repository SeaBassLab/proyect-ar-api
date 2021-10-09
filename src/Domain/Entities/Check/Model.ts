import { Schema } from 'mongoose'
import { injectable } from 'inversify';

import Schemable from '../Util/Model'
import Nameable from '../Util/Ports/Nameable'

@injectable()
export default class ENTITY_SCHEMA extends Schemable implements Nameable {
	
	public name: string

	constructor() {

		let entity: string = 'check'

		super({

			depositDate: {
				type: Date,
				typed: 'date'
			},
			paymentDate: {
				type: Date,
				typed: 'date'
			},
			days: {
				type: Number,
				typed: 'number'
			},
			bank: {
				type: String,
				typed: 'string'
			},
			check: {
				type: String,
				typed: 'number'
			},
			nominalAmount: {
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
			clientCharge: {
				type: String,
				typed: 'string'
			},
			operationCharge: {
				type: String,
				typed: 'string'
			},
			stateString: {
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