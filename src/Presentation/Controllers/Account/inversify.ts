import TYPES from './../../../TYPES'
import { Container } from "inversify";
import "reflect-metadata";

import Schemable from './../../../Domain/Entities/Util/Ports/Schemable'
import Validable from './../../../Domain/Entities/Util/Ports/Validable'
import Routeable from './../../../Presentation/Controllers/Ports/Routeable'

import AccountServiceableDomain from './../../../Domain/Entities/Account/Ports/Serviceable'
import AccountInterface from './../../../Domain/Entities/Account/Interface'
import AccountModel from './../../../Domain/Entities/Account/Model'
import AccountServiceDomain from './../../../Domain/Entities/Account/Controller'
import AccountDto from './../../../Domain/Entities/Account/Dto'
import AccountServicePresentation from './../../../Presentation/Controllers/Account/Controller'

var container = new Container()
container.bind<Schemable>(TYPES.Schemable).toConstantValue(new AccountModel).whenTargetNamed(TYPES.Account)
container.bind<Validable>(TYPES.Validable).to(AccountDto).whenTargetNamed(TYPES.Account)
container.bind<AccountInterface>(TYPES.AccountInterface).toConstantValue(new AccountDto)
container.bind<AccountServiceableDomain>(TYPES.AccountServiceableDomain).to(AccountServiceDomain)
container.bind<Routeable>(TYPES.Routeable).to(AccountServicePresentation)

export default container