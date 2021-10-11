import TYPES from './../../../TYPES'
import { Container } from "inversify";
import "reflect-metadata";

import Schemable from './../../../Domain/Entities/Util/Ports/Schemable'
import Validable from './../../../Domain/Entities/Util/Ports/Validable'
import Routeable from './../../../Presentation/Controllers/Ports/Routeable'

import PurchaseServiceableDomain from './../../../Domain/Entities/Purchase/Ports/Serviceable'
import PurchaseInterface from './../../../Domain/Entities/Purchase/Interface'
import PurchaseModel from './../../../Domain/Entities/Purchase/Model'
import PurchaseServiceDomain from './../../../Domain/Entities/Purchase/Controller'
import PurchaseDto from './../../../Domain/Entities/Purchase/Dto'
import PurchaseServicePresentation from './../../../Presentation/Controllers/Purchase/Controller'

var container = new Container()
container.bind<Schemable>(TYPES.Schemable).toConstantValue(new PurchaseModel).whenTargetNamed(TYPES.Purchase)
container.bind<Validable>(TYPES.Validable).to(PurchaseDto).whenTargetNamed(TYPES.Purchase)
container.bind<PurchaseInterface>(TYPES.PurchaseInterface).toConstantValue(new PurchaseDto)
container.bind<PurchaseServiceableDomain>(TYPES.PurchaseServiceableDomain).to(PurchaseServiceDomain)
container.bind<Routeable>(TYPES.Routeable).to(PurchaseServicePresentation)

export default container