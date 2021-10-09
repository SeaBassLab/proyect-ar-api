import TYPES from './../../../TYPES'
import { Container } from "inversify";
import "reflect-metadata";

import Schemable from './../../../Domain/Entities/Util/Ports/Schemable'
import Validable from './../../../Domain/Entities/Util/Ports/Validable'
import Routeable from './../../../Presentation/Controllers/Ports/Routeable'

import InvestmentServiceableDomain from './../../../Domain/Entities/Investment/Ports/Serviceable'
import InvestmentInterface from './../../../Domain/Entities/Investment/Interface'
import InvestmentModel from './../../../Domain/Entities/Investment/Model'
import InvestmentServiceDomain from './../../../Domain/Entities/Investment/Controller'
import InvestmentDto from './../../../Domain/Entities/Investment/Dto'
import InvestmentServicePresentation from './../../../Presentation/Controllers/Investment/Controller'

var container = new Container()
container.bind<Schemable>(TYPES.Schemable).toConstantValue(new InvestmentModel).whenTargetNamed(TYPES.Investment)
container.bind<Validable>(TYPES.Validable).to(InvestmentDto).whenTargetNamed(TYPES.Investment)
container.bind<InvestmentInterface>(TYPES.InvestmentInterface).toConstantValue(new InvestmentDto)
container.bind<InvestmentServiceableDomain>(TYPES.InvestmentServiceableDomain).to(InvestmentServiceDomain)
container.bind<Routeable>(TYPES.Routeable).to(InvestmentServicePresentation)

export default container