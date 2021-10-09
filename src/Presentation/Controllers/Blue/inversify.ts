import TYPES from './../../../TYPES'
import { Container } from "inversify";
import "reflect-metadata";

import Schemable from './../../../Domain/Entities/Util/Ports/Schemable'
import Validable from './../../../Domain/Entities/Util/Ports/Validable'
import Routeable from './../../../Presentation/Controllers/Ports/Routeable'

import BlueServiceableDomain from './../../../Domain/Entities/Blue/Ports/Serviceable'
import BlueInterface from './../../../Domain/Entities/Blue/Interface'
import BlueModel from './../../../Domain/Entities/Blue/Model'
import BlueServiceDomain from './../../../Domain/Entities/Blue/Controller'
import BlueDto from './../../../Domain/Entities/Blue/Dto'
import BlueServicePresentation from './../../../Presentation/Controllers/Blue/Controller'

var container = new Container()
container.bind<Schemable>(TYPES.Schemable).toConstantValue(new BlueModel).whenTargetNamed(TYPES.Blue)
container.bind<Validable>(TYPES.Validable).to(BlueDto).whenTargetNamed(TYPES.Blue)
container.bind<BlueInterface>(TYPES.BlueInterface).toConstantValue(new BlueDto)
container.bind<BlueServiceableDomain>(TYPES.BlueServiceableDomain).to(BlueServiceDomain)
container.bind<Routeable>(TYPES.Routeable).to(BlueServicePresentation)

export default container