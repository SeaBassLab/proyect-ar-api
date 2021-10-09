import TYPES from './../../../TYPES'
import { Container } from "inversify";
import "reflect-metadata";

import Schemable from './../../../Domain/Entities/Util/Ports/Schemable'
import Validable from './../../../Domain/Entities/Util/Ports/Validable'
import Routeable from './../../../Presentation/Controllers/Ports/Routeable'

import TransferServiceableDomain from './../../../Domain/Entities/Transfer/Ports/Serviceable'
import TransferInterface from './../../../Domain/Entities/Transfer/Interface'
import TransferModel from './../../../Domain/Entities/Transfer/Model'
import TransferServiceDomain from './../../../Domain/Entities/Transfer/Controller'
import TransferDto from './../../../Domain/Entities/Transfer/Dto'
import TransferServicePresentation from './../../../Presentation/Controllers/Transfer/Controller'

var container = new Container()
container.bind<Schemable>(TYPES.Schemable).toConstantValue(new TransferModel).whenTargetNamed(TYPES.Transfer)
container.bind<Validable>(TYPES.Validable).to(TransferDto).whenTargetNamed(TYPES.Transfer)
container.bind<TransferInterface>(TYPES.TransferInterface).toConstantValue(new TransferDto)
container.bind<TransferServiceableDomain>(TYPES.TransferServiceableDomain).to(TransferServiceDomain)
container.bind<Routeable>(TYPES.Routeable).to(TransferServicePresentation)

export default container