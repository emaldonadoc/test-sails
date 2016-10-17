module.exports = {

	list: function (req, res) {
		if(isNaN(req.param('id'))){
			res.statusCode=400;
			return res.end("Bad request, send monograph id")
		}
		console.log("value"	+ parseInt(req.param('id')));
		if(req.param('id') > 1){
			return res.json([{"value":"perro"},{"value":"gato"}]);
		}
		else{
			return res.json(
				{"id_tramite":1,"id_estado":13,"estado":"Hidalgo","id_tipo_pago":2,"id":"57abaf288d25ea58a9000001","fields":[
				{
					"wsList": [
						 {
						 "name": "estado",
						 "label": "Estado",
						 "class": "form-group col-md-7 required",
						 "requerido":true,
						 "class": "form-group col-md-7 required",
						 "url":"http://10.15.9.2:3000/gobmx/estados",
						 //"url":"http://localhost:1337/options/{municipio}",
						 "responseDisplay":"nombre",
						 "responseValue":"2"
						 },
						 {
						 "name": "otraCosa",
						 "label": "Municipio",
						 "requerido":true,
						 "class": "form-group col-md-7 required",
						 "url":"http://10.15.9.2:3000/gobmx/municipios?filter[where][id_estado]={estado}and[0traCosa]={otraCosa}",
						 "responseDisplay":"nombre",
						 "responseValue":"id_municipio"
						 }

					],
					"class": "form-control form-group col-md-7 ",
					"required": true,
					"name": "primer",
					"type": "select",
					"posicion": 1,
					"textoApoyo": "Debes seleccionar todo como si tu vida dependiera de ello."
				},
				{
					"wsList": [
						 {
						 "name": "otraCosa",
						 "label": "Otra Cosa",
						 "class": "form-group col-md-7 required",
						 "requerido":true,
						 "class": "form-group col-md-7 required",
						 "url":"http://10.15.9.2:3000/gobmx/estados",
						 //"url":"http://localhost:1337/options/{municipio}",
						 "responseDisplay":"nombre",
						 "responseValue":"id_estado"
						 },
						 {
						 "name": "cosaExtra",
						 "label": "cosa Extra",
						 "requerido":true,
						 "class": "form-group col-md-7 required",
						 "url":"http://10.15.9.2:3000/gobmx/municipios?filter[where][id_estado]={otraCosa}",
						 "responseDisplay":"nombre",
						 "responseValue":"id_municipio"
						 }
					 ],
					"class": "form-control form-group col-md-7 ",
					"required": true,
					"name": "segundo",
					"type": "select",
					"posicion": 2,
					"textoApoyo": "Debes seleccionar todo como si tu vida dependiera de ello."
				}

				]}

				);
		}
	}
};