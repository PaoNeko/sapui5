import Controller from "sap/ui/core/mvc/Controller";
import Component from "../Component";
import { Route$PatternMatchedEvent } from "sap/ui/core/routing/Route";
import History from "sap/ui/core/routing/History";

/**
 * @namespace com.logaligroup.invoices.controller
 */

export default class Details extends Controller {
    public onInit(): void | undefined {
        const route = (this.getOwnerComponent() as Component).getRouter();
            route.getRoute("RouteDetails")?.attachMatched(this.onObjectMatched, this)
    }

    public onObjectMatched (event : Route$PatternMatchedEvent) : void {
        //console.log("dentro vist detai");
        const args = <any>event.getParameter("arguments")
        const path = args.path
        const view = this.getView()

        view?.bindElement({
            path: window.decodeURIComponent(path),
            model: 'northwind'
        })
        
        //console.log(args);
        //console.log(event.getParameters());
    }

    public onNavBack () : void {
        //console.log("voy pa tras");
        const history = History.getInstance();
        const previusHash = history.getPreviousHash();

        if (previusHash !== undefined) {
            window.history.go(-1)
        } else {
            const router = (this.getOwnerComponent() as Component).getRouter()
            router.navTo("RouteMain");
        }
    }
}