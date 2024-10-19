import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import JSONModel from "sap/ui/model/json/JSONModel";
import odata4analytics from "sap/ui/model/analytics/odata4analytics";

/**
 * @namespace com.logaligroup.invoices.controller
 */
export default class Main extends Controller {

    public variable : string

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {
        this.viewModel();
    }

    private viewModel() : void {
        const oData = {
            recipient:{
                name: "World",
                //details:[
                    //{
                      //  Text: "Test"
                    //},
                    //{
                      //  Text: "Test2"
                    //}
                //]
            }
        };
        const oModel = new JSONModel(oData);
        this.getView()?.setModel(oModel,'view');
    }

    //this.getOwnerComponent().getModel("i18n");
    //this.getView().getModel("i18n");

}