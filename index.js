

;(function (factory) {
    var registeredInModuleLoader = false;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		window.vanTool = factory();
	}
})(function () {
    return {
        getDate: function () {

        }
    };

});
