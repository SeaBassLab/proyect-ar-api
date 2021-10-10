import TYPES from './../../../TYPES'
import { Container } from "inversify";
import "reflect-metadata";

import Schemable from './../../../Domain/Entities/Util/Ports/Schemable'
import Validable from './../../../Domain/Entities/Util/Ports/Validable'
import Routeable from './../../../Presentation/Controllers/Ports/Routeable'

import InterestServiceableDomain from './../../../Domain/Entities/Interest/Ports/Serviceable'
import InterestInterface from './../../../Domain/Entities/Interest/Interface'
import InterestModel from './../../../Domain/Entities/Interest/Model'
import InterestServiceDomain from './../../../Domain/Entities/Interest/Controller'
import InterestDto from './../../../Domain/Entities/Interest/Dto'
import InterestServicePresentation from './../../../Presentation/Controllers/Interest/Controller'

var container = new Container()
container.bind<Schemable>(TYPES.Schemable).toConstantValue(new InterestModel).whenTargetNamed(TYPES.Interest)
container.bind<Validable>(TYPES.Validable).to(InterestDto).whenTargetNamed(TYPES.Interest)
container.bind<InterestInterface>(TYPES.InterestInterface).toConstantValue(new InterestDto)
container.bind<InterestServiceableDomain>(TYPES.InterestServiceableDomain).to(InterestServiceDomain)
container.bind<Routeable>(TYPES.Routeable).to(InterestServicePresentation)

export default container