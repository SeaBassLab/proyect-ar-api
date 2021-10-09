import { Schema } from 'mongoose'
import { injectable } from 'inversify';

import Schemable from '../Util/Model'
import Nameable from '../Util/Ports/Nameable'

@injectable()
export default class ENTITY_SCHEMA extends Schemable implements Nameable {
	
	public name: string

	constructor() {

		let entity: string = 'account'

		super({

			client: {
				type: String,
				typed: 'string'
			},
			paymentDate: {
				type: String,
				typed: 'string'
			},
			moneyPeso: {
				type: Number,
				typed: 'number'
			},
			moneyDolar: {
				type: Number,
				typed: 'number'
			},
			moneyUsdt: {
				type: Number,
				typed: 'number'
			},
			paymentClient: {
				type: String,
				typed: 'string'
			},
			person: {
				type: String,
				typed: 'string'
			},
			usd: {
				type: Number,
				typed: 'number'
			},
			ars: {
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