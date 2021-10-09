import TYPES from './../../../TYPES'
import { Container } from "inversify";
import "reflect-metadata";

import Schemable from './../../../Domain/Entities/Util/Ports/Schemable'
import Validable from './../../../Domain/Entities/Util/Ports/Validable'
import Routeable from './../../../Presentation/Controllers/Ports/Routeable'

import LoanServiceableDomain from './../../../Domain/Entities/Loan/Ports/Serviceable'
import LoanInterface from './../../../Domain/Entities/Loan/Interface'
import LoanModel from './../../../Domain/Entities/Loan/Model'
import LoanServiceDomain from './../../../Domain/Entities/Loan/Controller'
import LoanDto from './../../../Domain/Entities/Loan/Dto'
import LoanServicePresentation from './../../../Presentation/Controllers/Loan/Controller'

var container = new Container()
container.bind<Schemable>(TYPES.Schemable).toConstantValue(new LoanModel).whenTargetNamed(TYPES.Loan)
container.bind<Validable>(TYPES.Validable).to(LoanDto).whenTargetNamed(TYPES.Loan)
container.bind<LoanInterface>(TYPES.LoanInterface).toConstantValue(new LoanDto)
container.bind<LoanServiceableDomain>(TYPES.LoanServiceableDomain).to(LoanServiceDomain)
container.bind<Routeable>(TYPES.Routeable).to(LoanServicePresentation)

export default container