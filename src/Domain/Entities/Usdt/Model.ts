import { Schema } from 'mongoose'
import { injectable } from 'inversify';

import Schemable from '../Util/Model'
import Nameable from '../Util/Ports/Nameable'

@injectable()
export default class ENTITY_SCHEMA extends Schemable implements Nameable {
	
	public name: string

	constructor() {

		let entity: string = 'usdt'

		super({

			operation: {
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
			sparkler: {
				type: String,
				typed: 'string',
				default: ''
			},
			commission: {
				type: Number,
				typed: 'number',
				default: 0
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