sap.ui.define(
  ["sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"

],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("projetonetflix.controller.Inicio", {
      onInit: function () {
        let menu = {
          primeiro: "BEGIN",
          segundo: "MOVIES"
        };

        //Criar modelo  e preencher com dados
        let menuModel = new JSONModel();
        menuModel.setData(menu);

        //Atribuir o modelo a tela
        let tela = this.getView(); //this esta associado ao Controller. A partir da view atual, buscar o model
        tela.setModel(menuModel, "ModeloMenu");

        // vamos buscar na API NetFlix no site abaixo
        // https://rapidapi.com/Glavier/api/netflix54

        let resultados = {
          titles: []
        };

        let filmesModel = new JSONModel();
        filmesModel.setData(resultados); //criando uma lista vazia como Model
        tela.setModel(filmesModel,"APIFilmes");//Novo modelo de filmes buscados

        //aula inicial
        // foi comentada, proque tinha um model local.
        //
        // // Equivale ao INITIALIZATION do ABAP
        // // Evento que é executado quando o programa é iniciado

        // // Trabalhando com variáveis
        // let serie = "Os Trapalhões";
        // let ano = 1985;

        // let elenco = ["Didi", "Dedé", "Mussum", "Zacarias"];

        // console.log(serie);
        // console.log(ano);
        // console.log(elenco);

        // let liveAction = {
        //   nome: "One Piece",
        //   ano : 2023,
        //   elenco : ["Luffy", "Zoro", "Nami", "Usopp"]
        // };

        // console.log(liveAction);

        // let minhaLista = [
        //   {
        //     nome: "One Piece",
        //     ano : 2023,
        //     elenco : ["Luffy", "Zoro", "Nami", "Usopp"]
        //   },
        //   {
        //     nome: "Os Trapalhões",
        //     ano : 1985,
        //     elenco : ["Didi", "Dedé", "Mussum", "Zacarias"]
        //   }
        // ];

        // console.log(minhaLista);

        
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
      },
      onApertarBuscar: function () {

        // vamos buscar na API NetFlix no site abaixo
        // https://rapidapi.com/Glavier/api/netflix54

        //Obter o valor do campo de busca
        let filtro = this.byId("inputBuscar").getValue();
        // alert(query);

        //--------------------------------
        //snipet copiado do site da API
        // do tipo Javascript, tipo jQuery.
        //--------------------------------
        const settings = {
          async: true,
          crossDomain: true,
          url: 'https://netflix54.p.rapidapi.com/search/?query='
            + filtro + '&offset=0&limit_titles=50&limit_suggestions=20&lang=en',
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '21d19e37d6mshae85162445ac2a1p159418jsn71a195c75976',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
          }
        };
        
        $.ajax(settings).done(function (response) {
          console.log(response);
          //regatar modelo e atualizar os dados dele
          let view = this.getView();
          let model = view.getModel("APIFilmes");
          let dados = model.getData();
          
          //limpar a lista
          dados.title = [];
          dados.titles = response.titles;

          //atualizar o modelo
          model.refresh();

        }.bind(this)); //fazer ligacao da function com o this, que existe fora desta funcao. assim pode acessar variaveis fora dela.
        //--------------------------------
        //Fim do  snipet copiado do site de API 
        //--------------------------------




      }
    });
  }
);
