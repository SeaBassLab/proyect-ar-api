import TYPES from './../../../TYPES'
import { Container } from "inversify";
import "reflect-metadata";

import Schemable from './../../../Domain/Entities/Util/Ports/Schemable'
import Validable from './../../../Domain/Entities/Util/Ports/Validable'
import Routeable from './../../../Presentation/Controllers/Ports/Routeable'

import WireServiceableDomain from './../../../Domain/Entities/Wire/Ports/Serviceable'
import WireInterface from './../../../Domain/Entities/Wire/Interface'
import WireModel from './../../../Domain/Entities/Wire/Model'
import WireServiceDomain from './../../../Domain/Entities/Wire/Controller'
import WireDto from './../../../Domain/Entities/Wire/Dto'
import WireServicePresentation from './../../../Presentation/Controllers/Wire/Controller'

var container = new Container()
container.bind<Schemable>(TYPES.Schemable).toConstantValue(new WireModel).whenTargetNamed(TYPES.Wire)
container.bind<Validable>(TYPES.Validable).to(WireDto).whenTargetNamed(TYPES.Wire)
container.bind<WireInterface>(TYPES.WireInterface).toConstantValue(new WireDto)
container.bind<WireServiceableDomain>(TYPES.WireServiceableDomain).to(WireServiceDomain)
container.bind<Routeable>(TYPES.Routeable).to(WireServicePresentation)

export default container