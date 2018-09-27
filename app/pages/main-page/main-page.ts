import { EventData, fromObject } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

import { MainViewModel } from './main-view-model'

var vm = new MainViewModel();

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = vm;
    vm.init();
}