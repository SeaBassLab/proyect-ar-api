import TYPES from './../../../TYPES'
import { Container } from "inversify";
import "reflect-metadata";

import Schemable from './../../../Domain/Entities/Util/Ports/Schemable'
import Validable from './../../../Domain/Entities/Util/Ports/Validable'
import Routeable from './../../../Presentation/Controllers/Ports/Routeable'

import PlanServiceableDomain from './../../../Domain/Entities/Plan/Ports/Serviceable'
import PlanInterface from './../../../Domain/Entities/Plan/Interface'
import PlanModel from './../../../Domain/Entities/Plan/Model'
import PlanServiceDomain from './../../../Domain/Entities/Plan/Controller'
import PlanDto from './../../../Domain/Entities/Plan/Dto'
import PlanServicePresentation from './../../../Presentation/Controllers/Plan/Controller'

var container = new Container()
container.bind<Schemable>(TYPES.Schemable).toConstantValue(new PlanModel).whenTargetNamed(TYPES.Plan)
container.bind<Validable>(TYPES.Validable).to(PlanDto).whenTargetNamed(TYPES.Plan)
container.bind<PlanInterface>(TYPES.PlanInterface).toConstantValue(new PlanDto)
container.bind<PlanServiceableDomain>(TYPES.PlanServiceableDomain).to(PlanServiceDomain)
container.bind<Routeable>(TYPES.Routeable).to(PlanServicePresentation)

export default container