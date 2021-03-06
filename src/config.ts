var permissions = {}
var entities = [
	'Permission',
	'Rol',
	'User',
	'Blue',
	'Usdt',
	'Wire',
	'Investment',
	'Transfer',
	'Check',
	'Account',
	'Movement',
	'Interest',
	'Loan',
	'Box',
	'Tag',
	'Section'
]

entities.map((entity: string, index: number) => {
	permissions[`create${entity}`] = index.toString() + '.1'
	permissions[`delete${entity}`] = index.toString() + '.2'
	permissions[`update${entity}`] = index.toString() + '.3'
	permissions[`list${entity}`] = index.toString() + '.4'
	permissions[`view${entity}`] = index.toString() + '.5'
	permissions[`viewList${entity}`] = index.toString() + '.6'
	permissions[`viewCreate${entity}`] = index.toString() + '.7'
})

permissions['viewHome'] = '999.1'

export default {
	TOKEN_SECRET: process.env.JWT_SECRET || 'TESTINMO',
	LIC_PASSWORD: process.env.LIC_SECRET || 'TESTINMOLIC',
	MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/',
	CLUSTER: 'mongodb+srv://monty:some_pass@cluster0.vzota.mongodb.net',

	PERMISSIONS: permissions

};
