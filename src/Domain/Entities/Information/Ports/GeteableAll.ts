import { Model, Document } from 'mongoose'

import Responseable from '../../Util/Ports/Responseable'

export default interface GeteableAll {
	getAll(
		informationModel: Model<Document, {}>,
		project: {},
		match: {},
		sort: {},
		group: {},
		limit: number,
		skip: number,
		strainModel?: Model<Document, {}>,
	): Promise<Responseable>
}