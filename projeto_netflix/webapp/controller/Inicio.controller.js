sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("projetonetflix.controller.Inicio", {
      onInit: function () {},

      onPressLinkInicio: function () {
        alert("Voce clicou em Inicio");
      },

      onPressLinkSeries: function () {
        alert("Voce clicou em Series");
      },
    });
  }
);
