import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import Controller from "sap/ui/core/mvc/Controller";

export default {
    statusText: function(this : Controller, status : string) : string | undefined {
        const resourceBundle = <ResourceBundle>(<ResourceModel>this?.getOwnerComponent()?.getModel("i18n"))?.getResourceBundle()
        
        switch (status) {
            case 'A': return resourceBundle.getText("invoicesStatusA")
            case 'B': return resourceBundle.getText("invoicesStatusB")
            case 'C': return resourceBundle.getText("invoicesStatusC")
            default: return status;
        }
    }
}
