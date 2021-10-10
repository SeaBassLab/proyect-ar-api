import TYPES from './../../../TYPES'
import { Container } from "inversify";
import "reflect-metadata";

import Schemable from './../../../Domain/Entities/Util/Ports/Schemable'
import Validable from './../../../Domain/Entities/Util/Ports/Validable'
import Routeable from './../../../Presentation/Controllers/Ports/Routeable'

import CheckServiceableDomain from './../../../Domain/Entities/Check/Ports/Serviceable'
import CheckInterface from './../../../Domain/Entities/Check/Interface'
import CheckModel from './../../../Domain/Entities/Check/Model'
import CheckServiceDomain from './../../../Domain/Entities/Check/Controller'
import CheckDto from './../../../Domain/Entities/Check/Dto'
import CheckServicePresentation from './../../../Presentation/Controllers/Check/Controller'

var container = new Container()
container.bind<Schemable>(TYPES.Schemable).toConstantValue(new CheckModel).whenTargetNamed(TYPES.Check)
container.bind<Validable>(TYPES.Validable).to(CheckDto).whenTargetNamed(TYPES.Check)
container.bind<CheckInterface>(TYPES.CheckInterface).toConstantValue(new CheckDto)
container.bind<CheckServiceableDomain>(TYPES.CheckServiceableDomain).to(CheckServiceDomain)
container.bind<Routeable>(TYPES.Routeable).to(CheckServicePresentation)

export default container