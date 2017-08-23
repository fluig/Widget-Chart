 <div id="graph_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="graph.instance({})"> 		 
	<!-- Combo para seleção do tipo do gráfico -->
		
	<select type="button" class="btn btn-default" data-tipo_graph id="cmbTipo">
	  	<option value="line">Line</option> 	
	 	<option value="bar">Bar</option>
	</select>
 	<!-- Exibe o gráfico do tipo bar -->
	<div id="barType"></div>
	<!-- Exibe o gráfico do tipo line -->
	<div id="lineType"></div> 		

</div>
<!-- Carrega a biblioteca para poder ter acesso ao dataset-->
<script src="/webdesk/vcXMLRPC.js"></script>