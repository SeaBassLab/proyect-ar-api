import 'dotenv/config'

import TYPES from './api/TYPES'
import container from './api/inversify.config'

import Appeable from './api/utils/Appeable'
import RouterApp from './api/Presentation/Router/Controller'

// const dot = require('dotenv').config({ path: './env' });

const routerApp: RouterApp = new RouterApp()
const app = container.get<Appeable>(TYPES.Appeable)

app.run(routerApp);