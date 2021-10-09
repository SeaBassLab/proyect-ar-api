import TYPES from './../../../TYPES'
import { Container } from "inversify";
import "reflect-metadata";

import Schemable from './../../../Domain/Entities/Util/Ports/Schemable'
import Validable from './../../../Domain/Entities/Util/Ports/Validable'
import Routeable from './../../../Presentation/Controllers/Ports/Routeable'

import CodeServiceableDomain from './../../../Domain/Entities/Code/Ports/Serviceable'
import CodeInterface from './../../../Domain/Entities/Code/Interface'
import CodeModel from './../../../Domain/Entities/Code/Model'
import CodeServiceDomain from './../../../Domain/Entities/Code/Controller'
import CodeDto from './../../../Domain/Entities/Code/Dto'
import CodeServicePresentation from './../../../Presentation/Controllers/Code/Controller'

var container = new Container()
container.bind<Schemable>(TYPES.Schemable).toConstantValue(new CodeModel).whenTargetNamed(TYPES.Code)
container.bind<Validable>(TYPES.Validable).to(CodeDto).whenTargetNamed(TYPES.Code)
container.bind<CodeInterface>(TYPES.CodeInterface).toConstantValue(new CodeDto)
container.bind<CodeServiceableDomain>(TYPES.CodeServiceableDomain).to(CodeServiceDomain)
container.bind<Routeable>(TYPES.Routeable).to(CodeServicePresentation)

export default container