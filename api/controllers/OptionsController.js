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
				{"fields":[{
					"wsList": [
					{
						"name": "estado",
						"label": "Estado",
						"class": "form-group col-md-7 required",
						"requerido":true,
						"class": "form-group col-md-7 required",
						"url":"http://10.20.58.9/vun/estados",
						"responseDisplay":"nombre",
						"responseValue":"id_estado"
					},
					{
						"name": "municipio",
						"label": "Municipio",
						"requerido":true,
						"class": "form-group col-md-7 required",
						"url":"http://10.20.58.9/vun/municipios?filter[where][id_estado]={estado}",
						"responseDisplay":"nombre",
						"responseValue":"id_municipio"
					}
					],

					"type": "select-ws",
					"posicion": 1,
					"textoApoyo": "Debes seleccionar todo como si tu vida dependiera de ello."
				},

				{
					"wsList": [
					{
						"name": "municipio",
						"label": "Municipio",
						"class": "form-group col-md-7 required",
						"requerido":true,
						"class": "form-group col-md-7 required",
						"url":"http://10.20.58.9/vun/estados",
						"responseDisplay":"nombre",
						"responseValue":"id_estado"
					},
					{
						"name": "localidad",
						"label": "Localidad",
						"requerido":true,
						"class": "form-group col-md-7 required",
						"url":"http://10.20.58.9/vun/municipios?filter[where][id_estado]={municipio}",
						"responseDisplay":"nombre",
						"responseValue":"id_municipio"
					}
					],

					"type": "select-ws",
					"posicion": 2,
					"textoApoyo": "Debes seleccionar todo como si tu vida dependiera de ello."
				},

				{
					"name": "estado",
					"type": "select-ws",
					"class": "form-group col-md-7",
					"label": "Estado",
					"posicion": 4,
					"options": [
					{
						"value": 13,
						"text": "Hidalgo",
						"class": "form-group col-md-7",
						"label": "Municipio",
						"name": "municipio",
						"options": [
						{
							"value": "tula",
							"text": "Tula"
						},
						{
							"value": "pachuca",
							"text": "Pachuca",
							"class": "form-group col-md-7",
							"label": "Colonia",
							"name": "colonia",
							"options": [
							{
								"value": "centro",
								"text": "Centro"
							},
							{
								"value": "tuzos",
								"text": "Tuzos"
							}
							]
						}
						]
					},
					{
						"value": 14,      
						"text": "Jalisco",
						"class": "form-group col-md-7",
						"label": "Departamento",
						"name":  "departamento",
						"options": [
						{
							"value": "guadalajara",
							"text": "Guadalajara"
						},
						{
							"value": "tlaquepaque",
							"text": "Tlaquepaque"
						}
						]
					}
					]
				},
				{"options":[{"value":"opción-1","text":"Opción 1"},{"value":"opción-2","text":"Opción 2"}],"type":"select","required":"true","name":"select-1478884901472","label":"Opciones cmb","class":"form-control form-group col-md-7 ","posicion":5}


				]} 
				);
}
}
};