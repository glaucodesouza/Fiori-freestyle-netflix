sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("projetonetflix.controller.Inicio", {
      onInit: function () {
        // Equivale ao INITIALIZATION do ABAP
        // Evento que é executado quando o programa é iniciado

        // Trabalhando com variáveis
        let serie = "Os Trapalhões";
        let ano = 1985;

        let elenco = ["Didi", "Dedé", "Mussum", "Zacarias"];

        console.log(serie);
        console.log(ano);
        console.log(elenco);

        let liveAction = {
          nome: "One Piece",
          ano : 2023,
          elenco : ["Luffy", "Zoro", "Nami", "Usopp"]
        };

        console.log(liveAction);

        let minhaLista = [
          {
            nome: "One Piece",
            ano : 2023,
            elenco : ["Luffy", "Zoro", "Nami", "Usopp"]
          },
          {
            nome: "Os Trapalhões",
            ano : 1985,
            elenco : ["Didi", "Dedé", "Mussum", "Zacarias"]
          }
        ];

        console.log(minhaLista);

        
        //site do API:
        // https://rapidapi.com/hub
        // https://rapidapi.com/Glavier/api/netflix54/

        //site do JSON viewr
        //https://jsonviewer.stack.hu/


      },

      onPressLinkInicio: function () {
        alert("Voce clicou em Inicio");
      },

      onPressLinkSeries: function () {
        alert("Voce clicou em Series");
      }
    });
  }
);
