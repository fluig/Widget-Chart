// criando a super widget
var graph = SuperWidget.extend({

	//eventos invocados
    bindings: {
        local: {
            // quando houver alguma mudança no select ele executará essa função
        	'tipo_graph': ['change_fnGrafico']
        }    
    },
    
    // função invocada na mudança dos itens do select
    fnGrafico: function(){
   	
    	// exemplo de array com valores fixos
    	var array_fixo = [65, 59, 80, 81, 56, 55, 40];
    	
    	// consulta um dataset customizado
    	var ds = DatasetFactory.getDataset("dt_customizadoGrafico",null,null,null);

    	// criar um array vazio para receber os dados do dataset
        var array_vazio = [];

    	// popula o array 
        for (x = 0; x < ds.values.length; x++){
        	array_vazio[x] = ds.values[x].Valor;
        }
    	
    	// verifica o valor do setado no combo 
    	var tipoCombo = $("#cmbTipo").val();
    	
    	// se for selecionado valor "bar"
    	if(tipoCombo == "bar"){
    	 	
    		// oculta o gráfico do tipo line
    		$("#lineType").hide();
    		
    		// exibe o gráfico do tipo bar
        	$("#barType").show();
        	
        	//definição dos dados utilizados para gerar o gráfico
    		var data = {
        		    //campos do gráfico
    				labels: ["Ferro de Passar", "Fogão", "Guarda-roupas", "Máquina de lavar", "Refrigerador"],
    				// valores e formatações
        		    datasets: [
        		        {        		            
        		            fillColor: "rgba(220,220,220,0.2)",
        		            strokeColor: "rgba(220,220,220,1)",
        		            pointColor: "rgba(220,220,220,1)",
        		            pointStrokeColor: "#fff",
        		            pointHighlightFill: "#fff",
        		            pointHighlightStroke: "rgba(220,220,220,1)",
        		            // passando um dataset customizado como valor de fonte para o gráfico
        		            data: array_vazio 
        		        },
        		        {        		            
        		            fillColor: "rgba(151,187,205,0.2)",
        		            strokeColor: "rgba(151,187,205,1)",
        		            pointColor: "rgba(151,187,205,1)",
        		            pointStrokeColor: "#fff",
        		            pointHighlightFill: "#fff",
        		            pointHighlightStroke: "rgba(151,187,205,1)",
        		            // passando um array fixo como valor de fonte para o gráfico
        		            data: [280, 480, 940, 1900, 860, 727, 690]
        		        }
        		    ]
        		};
        	
    		// criação do gráfico
        	var chart = FLUIGC.chart('#barType', {
        	    id: 'barNew',
        	    width: '700',
        	    height: '200',
        	    // aqui poderão ser definidos outros options
        	});
        	
        	// definição do dados utilizados e o tipo de gráfico
        	var barChart = chart.bar(data, "");        	
    	}
    	
    	//se for selecionado valor "bar"
    	if(tipoCombo == "line"){
    		
    		//oculta gráfico de colunas
    		$("#barType").hide();
    		//oculta gráfico de 
    	 	$("#lineType").show();
    	 	
    	  	//definição dos dados utilizados para gerar o gráfico
    		var data = {
    				labels: ["Ferro de Passar", "Fogão", "Guarda-roupas", "Máquina de lavar", "Refrigerador"],
    				// valores e formatações
        		    datasets: [
        		        {        		           
        		            fillColor: "rgba(220,220,220,0.2)",
        		            strokeColor: "rgba(220,220,220,1)",
        		            pointColor: "rgba(220,220,220,1)",
        		            pointStrokeColor: "#fff",
        		            pointHighlightFill: "#fff",
        		            pointHighlightStroke: "rgba(220,220,220,1)",
        		            data: array_vazio 
        		        },
        		        {        		            
        		            fillColor: "rgba(151,187,205,0.2)",
        		            strokeColor: "rgba(151,187,205,1)",
        		            pointColor: "rgba(151,187,205,1)",
        		            pointStrokeColor: "#fff",
        		            pointHighlightFill: "#fff",
        		            pointHighlightStroke: "rgba(151,187,205,1)",
        		            data: [280, 480, 940, 1900, 860, 727, 690]
        		        }
        		    ]
        		};
    		
    		// criação do gráfico       	
        	var chart = FLUIGC.chart('#lineType', {
        	    id: 'lineNew',
        	    width: '700',
        	    height: '200',
        	 // passando um array fixo como valor de fonte para o gráfico
        	});
        	
        	// definição do dados utilizados e o tipo de gráfico
        	var lineChart = chart.line(data, "");
    	}
    }
    

});
