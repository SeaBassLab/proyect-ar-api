import TYPES from './../../../TYPES'
import { Container } from "inversify";
import "reflect-metadata";

import Schemable from './../../../Domain/Entities/Util/Ports/Schemable'
import Validable from './../../../Domain/Entities/Util/Ports/Validable'
import Routeable from './../../../Presentation/Controllers/Ports/Routeable'

import MovementServiceableDomain from './../../../Domain/Entities/Movement/Ports/Serviceable'
import MovementInterface from './../../../Domain/Entities/Movement/Interface'
import MovementModel from './../../../Domain/Entities/Movement/Model'
import MovementServiceDomain from './../../../Domain/Entities/Movement/Controller'
import MovementDto from './../../../Domain/Entities/Movement/Dto'
import MovementServicePresentation from './../../../Presentation/Controllers/Movement/Controller'

var container = new Container()
container.bind<Schemable>(TYPES.Schemable).toConstantValue(new MovementModel).whenTargetNamed(TYPES.Movement)
container.bind<Validable>(TYPES.Validable).to(MovementDto).whenTargetNamed(TYPES.Movement)
container.bind<MovementInterface>(TYPES.MovementInterface).toConstantValue(new MovementDto)
container.bind<MovementServiceableDomain>(TYPES.MovementServiceableDomain).to(MovementServiceDomain)
container.bind<Routeable>(TYPES.Routeable).to(MovementServicePresentation)

export default container