import { Schema } from 'mongoose'
import InterfaceUtil from './../Util/Ports/Dtoable'

export default interface Interface extends InterfaceUtil {

	name: string
	url: string
	course: Schema.Types.ObjectId
	
}