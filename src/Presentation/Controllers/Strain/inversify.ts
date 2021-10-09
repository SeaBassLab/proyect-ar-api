import TYPES from './../../../TYPES'
import { Container } from "inversify";
import "reflect-metadata";

import Schemable from './../../../Domain/Entities/Util/Ports/Schemable'
import Validable from './../../../Domain/Entities/Util/Ports/Validable'
import Routeable from './../../../Presentation/Controllers/Ports/Routeable'

import StrainServiceableDomain from './../../../Domain/Entities/Strain/Ports/Serviceable'
import StrainInterface from './../../../Domain/Entities/Strain/Interface'
import StrainModel from './../../../Domain/Entities/Strain/Model'
import StrainServiceDomain from './../../../Domain/Entities/Strain/Controller'
import StrainDto from './../../../Domain/Entities/Strain/Dto'
import StrainServicePresentation from './../../../Presentation/Controllers/Strain/Controller'

var container = new Container()
container.bind<Schemable>(TYPES.Schemable).toConstantValue(new StrainModel).whenTargetNamed(TYPES.Strain)
container.bind<Validable>(TYPES.Validable).to(StrainDto).whenTargetNamed(TYPES.Strain)
container.bind<StrainInterface>(TYPES.StrainInterface).toConstantValue(new StrainDto)
container.bind<StrainServiceableDomain>(TYPES.StrainServiceableDomain).to(StrainServiceDomain)
container.bind<Routeable>(TYPES.Routeable).to(StrainServicePresentation)

export default container