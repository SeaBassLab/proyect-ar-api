import TYPES from './../../../TYPES'
import { Container } from "inversify";
import "reflect-metadata";

import Schemable from './../../../Domain/Entities/Util/Ports/Schemable'
import Validable from './../../../Domain/Entities/Util/Ports/Validable'
import Routeable from './../../../Presentation/Controllers/Ports/Routeable'

import SaleServiceableDomain from './../../../Domain/Entities/Sale/Ports/Serviceable'
import SaleInterface from './../../../Domain/Entities/Sale/Interface'
import SaleModel from './../../../Domain/Entities/Sale/Model'
import SaleServiceDomain from './../../../Domain/Entities/Sale/Controller'
import SaleDto from './../../../Domain/Entities/Sale/Dto'
import SaleServicePresentation from './../../../Presentation/Controllers/Sale/Controller'

var container = new Container()
container.bind<Schemable>(TYPES.Schemable).toConstantValue(new SaleModel).whenTargetNamed(TYPES.Sale)
container.bind<Validable>(TYPES.Validable).to(SaleDto).whenTargetNamed(TYPES.Sale)
container.bind<SaleInterface>(TYPES.SaleInterface).toConstantValue(new SaleDto)
container.bind<SaleServiceableDomain>(TYPES.SaleServiceableDomain).to(SaleServiceDomain)
container.bind<Routeable>(TYPES.Routeable).to(SaleServicePresentation)

export default container