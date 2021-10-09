import TYPES from './../../../TYPES'
import { Container } from "inversify";
import "reflect-metadata";

import Schemable from './../../../Domain/Entities/Util/Ports/Schemable'
import Validable from './../../../Domain/Entities/Util/Ports/Validable'
import Routeable from './../../../Presentation/Controllers/Ports/Routeable'

import InformationServiceableDomain from './../../../Domain/Entities/Information/Ports/Serviceable'
import InformationInterface from './../../../Domain/Entities/Information/Interface'
import InformationModel from './../../../Domain/Entities/Information/Model'
import InformationServiceDomain from './../../../Domain/Entities/Information/Controller'
import InformationDto from './../../../Domain/Entities/Information/Dto'
import InformationServicePresentation from './../../../Presentation/Controllers/Information/Controller'

var container = new Container()
container.bind<Schemable>(TYPES.Schemable).toConstantValue(new InformationModel).whenTargetNamed(TYPES.Information)
container.bind<Validable>(TYPES.Validable).to(InformationDto).whenTargetNamed(TYPES.Information)
container.bind<InformationInterface>(TYPES.InformationInterface).toConstantValue(new InformationDto)
container.bind<InformationServiceableDomain>(TYPES.InformationServiceableDomain).to(InformationServiceDomain)
container.bind<Routeable>(TYPES.Routeable).to(InformationServicePresentation)

export default container