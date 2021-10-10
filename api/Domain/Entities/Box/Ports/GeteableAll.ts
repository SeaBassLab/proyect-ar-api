import { Model, Document } from 'mongoose'

import Responseable from '../../Util/Ports/Responseable'

export default interface GeteableAll {
	getAll(
		boxModel: Model<Document, {}>,
		accountModel: Model<Document, {}>,
		blueModel: Model<Document, {}>,
		checkModel: Model<Document, {}>,
		interestModel: Model<Document, {}>,
		investmentModel: Model<Document, {}>,
		loanModel: Model<Document, {}>,
		movementModel: Model<Document, {}>,
		transferModel: Model<Document, {}>,
		usdtModel: Model<Document, {}>,
		wireModel: Model<Document, {}>,
		project: {},
		match: {},
		sort: {},
		group: {},
		limit: number,
		skip: number
	): Promise<Responseable>
}