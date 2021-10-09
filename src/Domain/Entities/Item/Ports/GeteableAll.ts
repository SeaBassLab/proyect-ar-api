import { Model, Document } from 'mongoose'

import Responseable from '../../Util/Ports/Responseable'

export default interface GeteableAll {
	getAll(
		itemModel: Model<Document, {}>,
		purchaseModel: Model<Document, {}>,
		informationModel: Model<Document, {}>,
		project: {},
		match: {},
		sort: {},
		group: {},
		limit: number,
		skip: number
	): Promise<Responseable>
}