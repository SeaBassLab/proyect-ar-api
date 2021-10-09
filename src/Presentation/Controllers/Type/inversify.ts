import TYPES from './../../../TYPES'
import { Container } from "inversify";
import "reflect-metadata";

import Schemable from './../../../Domain/Entities/Util/Ports/Schemable'
import Validable from './../../../Domain/Entities/Util/Ports/Validable'
import Routeable from './../../../Presentation/Controllers/Ports/Routeable'

import TypeServiceableDomain from './../../../Domain/Entities/Type/Ports/Serviceable'
import TypeInterface from './../../../Domain/Entities/Type/Interface'
import TypeModel from './../../../Domain/Entities/Type/Model'
import TypeServiceDomain from './../../../Domain/Entities/Type/Controller'
import TypeDto from './../../../Domain/Entities/Type/Dto'
import TypeServicePresentation from './../../../Presentation/Controllers/Type/Controller'

var container = new Container()
container.bind<Schemable>(TYPES.Schemable).toConstantValue(new TypeModel).whenTargetNamed(TYPES.Type)
container.bind<Validable>(TYPES.Validable).to(TypeDto).whenTargetNamed(TYPES.Type)
container.bind<TypeInterface>(TYPES.TypeInterface).toConstantValue(new TypeDto)
container.bind<TypeServiceableDomain>(TYPES.TypeServiceableDomain).to(TypeServiceDomain)
container.bind<Routeable>(TYPES.Routeable).to(TypeServicePresentation)

export default container