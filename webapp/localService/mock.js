sap.ui.define(['sap/ui/core/util/MockServer'], function(MockServer) {
	'use strict';

	return {
		mainServer: null,

		init: function() {
			var sPath = jQuery.sap.getModulePath('AIDemoAppsUI5OData.localService');
			MockServer.config({
				autoRespond: true,
				autoRespondAfter: 1500
			});

			this.mainServer = new MockServer({
				rootUri: '/sap/opu/odata/iwbep/GWSAMPLE_BASIC/'
			});
			this.mainServer.simulate(sPath + '/metadata.xml', {
				sMockdataBaseUrl: sPath + '/Data',
				bGenerateMissingMockData: true
			});
			this.mainServer.start();
		},

		stop: function() {
			this.mainServer.stop();
		},
	};
});