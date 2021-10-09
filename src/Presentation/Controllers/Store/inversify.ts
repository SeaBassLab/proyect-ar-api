import TYPES from './../../../TYPES'
import { Container } from "inversify";
import "reflect-metadata";

import Schemable from './../../../Domain/Entities/Util/Ports/Schemable'
import Validable from './../../../Domain/Entities/Util/Ports/Validable'
import Routeable from './../../../Presentation/Controllers/Ports/Routeable'

import StoreServiceableDomain from './../../../Domain/Entities/Store/Ports/Serviceable'
import StoreInterface from './../../../Domain/Entities/Store/Interface'
import StoreModel from './../../../Domain/Entities/Store/Model'
import StoreServiceDomain from './../../../Domain/Entities/Store/Controller'
import StoreDto from './../../../Domain/Entities/Store/Dto'
import StoreServicePresentation from './../../../Presentation/Controllers/Store/Controller'

var container = new Container()
container.bind<Schemable>(TYPES.Schemable).toConstantValue(new StoreModel).whenTargetNamed(TYPES.Store)
container.bind<Validable>(TYPES.Validable).to(StoreDto).whenTargetNamed(TYPES.Store)
container.bind<StoreInterface>(TYPES.StoreInterface).toConstantValue(new StoreDto)
container.bind<StoreServiceableDomain>(TYPES.StoreServiceableDomain).to(StoreServiceDomain)
container.bind<Routeable>(TYPES.Routeable).to(StoreServicePresentation)

export default container