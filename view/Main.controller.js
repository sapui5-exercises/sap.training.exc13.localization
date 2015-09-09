sap.ui.controller("sap.training.exc13.localization.view.Main", {

	onInit: function() {

		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleName: "sap.training.exc13.localization.i18n.i18n"
		});

		sap.ui.getCore().setModel(i18nModel, "i18n");
	},

	onRatingChange: function(oEvent) {

		var nValue = oEvent.getSource().getValue();
		var oBundle = sap.ui.getCore().getModel("i18n").getResourceBundle();

		var sMsg = oBundle.getText("flightRatingMsg", [nValue]);

		this.getView().byId("idText").setText(sMsg);
	}

});