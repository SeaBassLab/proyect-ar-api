import { Schema } from 'mongoose'
import { injectable } from 'inversify';

import Schemable from '../Util/Model'
import Nameable from '../Util/Ports/Nameable'

@injectable()
export default class ENTITY_SCHEMA extends Schemable implements Nameable {
	
	public name: string

	constructor() {

		let entity: string = 'wire'

		super({

			paymentDate: {
				type: Date,
				typed: 'date',
			},
			operation: {
				type: String,
				typed: 'string',
				default: ''
			},
			country: {
				type: String,
				typed: 'string',
				default: ''
			},
			amount: {
				type: Number,
				typed: 'number',
				default: 0
			},
			client: {
				type: String,
				typed: 'string',
				default: ''
			},
			exchangeRate: {
				type: Number,
				typed: 'number',
				default: 0
			},
			commission: {
				type: Number,
				typed: 'number',
				default: 0
			},
			payToClient: {
				type: Boolean,
				typed: 'boolean',
				default: false
			},
			payToOperator: {
				type: Boolean,
				typed: 'boolean',
				default: false
			},
			state: {
				type: String,
				typed: 'string',
				default: ''
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