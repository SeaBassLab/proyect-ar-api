import { Schema } from 'mongoose'
import { injectable } from 'inversify';

import Schemable from '../Util/Model'
import Nameable from '../Util/Ports/Nameable'

@injectable()
export default class ENTITY_SCHEMA extends Schemable implements Nameable {
	
	public name: string

	constructor() {

		let entity: string = 'investment'

		super({

			amount: {
				type: Number,
				typed: 'number'
			},
			moneyUsdt: {
				type: Number,
				typed: 'number'
			},
			moneyDolar: {
				type: Number,
				typed: 'number'
			},
			moneyPeso: {
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