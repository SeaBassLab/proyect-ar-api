import TYPES from './../../../TYPES'
import { Container } from "inversify";
import "reflect-metadata";

import Schemable from './../../../Domain/Entities/Util/Ports/Schemable'
import Validable from './../../../Domain/Entities/Util/Ports/Validable'
import Routeable from './../../../Presentation/Controllers/Ports/Routeable'

import ItemServiceableDomain from './../../../Domain/Entities/Item/Ports/Serviceable'
import ItemInterface from './../../../Domain/Entities/Item/Interface'
import ItemModel from './../../../Domain/Entities/Item/Model'
import ItemServiceDomain from './../../../Domain/Entities/Item/Controller'
import ItemDto from './../../../Domain/Entities/Item/Dto'
import ItemServicePresentation from './../../../Presentation/Controllers/Item/Controller'

var container = new Container()
container.bind<Schemable>(TYPES.Schemable).toConstantValue(new ItemModel).whenTargetNamed(TYPES.Item)
container.bind<Validable>(TYPES.Validable).to(ItemDto).whenTargetNamed(TYPES.Item)
container.bind<ItemInterface>(TYPES.ItemInterface).toConstantValue(new ItemDto)
container.bind<ItemServiceableDomain>(TYPES.ItemServiceableDomain).to(ItemServiceDomain)
container.bind<Routeable>(TYPES.Routeable).to(ItemServicePresentation)

export default container