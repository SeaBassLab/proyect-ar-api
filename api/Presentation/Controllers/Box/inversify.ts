import TYPES from './../../../TYPES'
import { Container } from "inversify";
import "reflect-metadata";

import Schemable from './../../../Domain/Entities/Util/Ports/Schemable'
import Validable from './../../../Domain/Entities/Util/Ports/Validable'
import Routeable from './../../../Presentation/Controllers/Ports/Routeable'

import BoxServiceableDomain from './../../../Domain/Entities/Box/Ports/Serviceable'
import BoxInterface from './../../../Domain/Entities/Box/Interface'
import BoxModel from './../../../Domain/Entities/Box/Model'
import BoxServiceDomain from './../../../Domain/Entities/Box/Controller'
import BoxDto from './../../../Domain/Entities/Box/Dto'
import BoxServicePresentation from './../../../Presentation/Controllers/Box/Controller'

var container = new Container()
container.bind<Schemable>(TYPES.Schemable).toConstantValue(new BoxModel).whenTargetNamed(TYPES.Box)
container.bind<Validable>(TYPES.Validable).to(BoxDto).whenTargetNamed(TYPES.Box)
container.bind<BoxInterface>(TYPES.BoxInterface).toConstantValue(new BoxDto)
container.bind<BoxServiceableDomain>(TYPES.BoxServiceableDomain).to(BoxServiceDomain)
container.bind<Routeable>(TYPES.Routeable).to(BoxServicePresentation)

export default container