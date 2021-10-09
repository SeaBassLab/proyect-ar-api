import TYPES from './../../../TYPES'
import { Container } from "inversify";
import "reflect-metadata";

import Schemable from './../../../Domain/Entities/Util/Ports/Schemable'
import Validable from './../../../Domain/Entities/Util/Ports/Validable'
import Routeable from './../../../Presentation/Controllers/Ports/Routeable'

import UsdtServiceableDomain from './../../../Domain/Entities/Usdt/Ports/Serviceable'
import UsdtInterface from './../../../Domain/Entities/Usdt/Interface'
import UsdtModel from './../../../Domain/Entities/Usdt/Model'
import UsdtServiceDomain from './../../../Domain/Entities/Usdt/Controller'
import UsdtDto from './../../../Domain/Entities/Usdt/Dto'
import UsdtServicePresentation from './../../../Presentation/Controllers/Usdt/Controller'

var container = new Container()
container.bind<Schemable>(TYPES.Schemable).toConstantValue(new UsdtModel).whenTargetNamed(TYPES.Usdt)
container.bind<Validable>(TYPES.Validable).toConstructor(UsdtDto).whenTargetNamed(TYPES.Usdt)
container.bind<UsdtInterface>(TYPES.UsdtInterface).toConstantValue(new UsdtDto)
container.bind<UsdtServiceableDomain>(TYPES.UsdtServiceableDomain).to(UsdtServiceDomain)
container.bind<Routeable>(TYPES.Routeable).to(UsdtServicePresentation)

export default container