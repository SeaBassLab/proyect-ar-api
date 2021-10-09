import { Schema } from 'mongoose'
import { injectable } from 'inversify';

import Schemable from '../Util/Model'
import Nameable from '../Util/Ports/Nameable'

@injectable()
export default class ENTITY_SCHEMA extends Schemable implements Nameable {
	
	public name: string

	constructor() {

		let entity: string = 'loan'

		super({

			client: {
				type: String,
				typed: 'string',
				default: ''
			},
			paymentDate: {
				type: Date,
				typed: 'date'
			},
			moneyPeso: {
				type: Number,
				typed: 'number',
				default: 0
			},
			moneyDolar: {
				type: Number,
				typed: 'number',
				default: 0
			},
			paymentClient: {
				type: String,
				typed: 'string',
				default: false
			},
			bank: {
				type: String,
				typed: 'string',
				default: ''
			},
			extraction: {
				type: Number,
				typed: 'number'
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