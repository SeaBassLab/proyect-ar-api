import TYPES from './../../../TYPES'
import { Container } from "inversify";
import "reflect-metadata";

import Schemable from './../../../Domain/Entities/Util/Ports/Schemable'
import Validable from './../../../Domain/Entities/Util/Ports/Validable'
import Routeable from './../../../Presentation/Controllers/Ports/Routeable'

import ShippingServiceableDomain from './../../../Domain/Entities/Shipping/Ports/Serviceable'
import ShippingInterface from './../../../Domain/Entities/Shipping/Interface'
import ShippingModel from './../../../Domain/Entities/Shipping/Model'
import ShippingServiceDomain from './../../../Domain/Entities/Shipping/Controller'
import ShippingDto from './../../../Domain/Entities/Shipping/Dto'
import ShippingServicePresentation from './../../../Presentation/Controllers/Shipping/Controller'

var container = new Container()
container.bind<Schemable>(TYPES.Schemable).toConstantValue(new ShippingModel).whenTargetNamed(TYPES.Shipping)
container.bind<Validable>(TYPES.Validable).to(ShippingDto).whenTargetNamed(TYPES.Shipping)
container.bind<ShippingInterface>(TYPES.ShippingInterface).toConstantValue(new ShippingDto)
container.bind<ShippingServiceableDomain>(TYPES.ShippingServiceableDomain).to(ShippingServiceDomain)
container.bind<Routeable>(TYPES.Routeable).to(ShippingServicePresentation)

export default container