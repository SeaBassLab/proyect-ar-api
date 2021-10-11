import TYPES from './../../../TYPES'
import { Container } from "inversify";
import "reflect-metadata";

import Schemable from './../../../Domain/Entities/Util/Ports/Schemable'
import Validable from './../../../Domain/Entities/Util/Ports/Validable'
import Routeable from './../../../Presentation/Controllers/Ports/Routeable'

import TagServiceableDomain from './../../../Domain/Entities/Tag/Ports/Serviceable'
import TagInterface from './../../../Domain/Entities/Tag/Interface'
import TagModel from './../../../Domain/Entities/Tag/Model'
import TagServiceDomain from './../../../Domain/Entities/Tag/Controller'
import TagDto from './../../../Domain/Entities/Tag/Dto'
import TagServicePresentation from './../../../Presentation/Controllers/Tag/Controller'

var container = new Container()
container.bind<Schemable>(TYPES.Schemable).toConstantValue(new TagModel).whenTargetNamed(TYPES.Tag)
container.bind<Validable>(TYPES.Validable).to(TagDto).whenTargetNamed(TYPES.Tag)
container.bind<TagInterface>(TYPES.TagInterface).toConstantValue(new TagDto)
container.bind<TagServiceableDomain>(TYPES.TagServiceableDomain).to(TagServiceDomain)
container.bind<Routeable>(TYPES.Routeable).to(TagServicePresentation)

export default container