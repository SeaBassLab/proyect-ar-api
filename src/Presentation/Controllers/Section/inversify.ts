import TYPES from './../../../TYPES'
import { Container } from "inversify";
import "reflect-metadata";

import Schemable from './../../../Domain/Entities/Util/Ports/Schemable'
import Validable from './../../../Domain/Entities/Util/Ports/Validable'
import Routeable from './../../../Presentation/Controllers/Ports/Routeable'

import SectionServiceableDomain from './../../../Domain/Entities/Section/Ports/Serviceable'
import SectionInterface from './../../../Domain/Entities/Section/Interface'
import SectionModel from './../../../Domain/Entities/Section/Model'
import SectionServiceDomain from './../../../Domain/Entities/Section/Controller'
import SectionDto from './../../../Domain/Entities/Section/Dto'
import SectionServicePresentation from './../../../Presentation/Controllers/Section/Controller'

var container = new Container()
container.bind<Schemable>(TYPES.Schemable).toConstantValue(new SectionModel).whenTargetNamed(TYPES.Section)
container.bind<Validable>(TYPES.Validable).to(SectionDto).whenTargetNamed(TYPES.Section)
container.bind<SectionInterface>(TYPES.SectionInterface).toConstantValue(new SectionDto)
container.bind<SectionServiceableDomain>(TYPES.SectionServiceableDomain).to(SectionServiceDomain)
container.bind<Routeable>(TYPES.Routeable).to(SectionServicePresentation)

export default container