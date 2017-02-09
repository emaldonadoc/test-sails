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

				{
  "id_tramite": 2,
  "id_dependencia": 1,
  "id_formulario": "2",
  "dependencia": "Secretaría de la Defensa Nacional",
  "nombre": "dumy",
  "fecha_inicio": "2017-01-01T00:00:00.000Z",
  "fecha_fin": "2017-03-21T00:00:00.000Z",
  "captcha": "f",
  "steps": [
    {
      "stepTitle": "Paso 1",
      "name":"paso-1",
      "fields": [
        {
          "options": [
            {
              "label": "",
              "value": "Label",
              "text": "value"
            },
            {
              "label": "",
              "value": "Label",
              "text": "value"
            }
          ],
          "type": "selectnested",
          "name": "selectnested-1484247927980",
          "label": "Select box Nested",
          "class": " select form-group col-md-7 ",
          "posicion": 1
        },
        {
          "type": "select-ws",
          "posicion": 2,
          "textoApoyo": "",
          "wsList": [
            {
              "name": "estado",
              "label": "Estados de la Republica",
              "requerido": false,
              "class": " select form-group col-md-7 ",
              "url": "http://10.20.58.23:3001/vun/estados",
              "responseDisplay": "nombre",
              "responseValue": "id_estado"
            },
            {
              "name": "selectws-1484247986565",
              "label": "municipios",
              "requerido": false,
              "class": " select form-group col-md-7 ",
              "url": "http://10.20.58.23:3001/vun/municipios?filter[where][id_estado]={estado}",
              "responseDisplay": "nombre",
              "responseValue": "id_estado"
            }
          ]
        },
        {
          "regextype": "Sin Validaci&oacute;n",
          "subtype": "text",
          "type": "text",
          "required": "true",
          "name": "text-1484175355765",
          "label": "1 .- pregunta uno",
          "class": "form-control text-input form-group col-md-7 ",
          "posicion": 3
        },
        {
          "regextype": "Sin Validaci&oacute;n",
          "type": "textarea",
          "name": "textarea-1484175358206",
          "label": "2.- pregunta dos",
          "class": "form-control text-area form-group col-md-7 ",
          "posicion": 4
        },
        {
          "type": "date",
          "name": "date-1484175362871",
          "label": "3.- pregunta tres",
          "class": "form-control calendar form-group col-md-7 ",
          "posicion": 5
        },
        {
          "options": [
            {
              "value": "opción-1",
              "text": "Opción 1"
            },
            {
              "value": "opción-2",
              "text": "Opción 2"
            },
            {
              "value": "opcion-3",
              "text": "Opcion 3"
            },
            {
              "value": "opcion-4",
              "text": "Opcion 4"
            }
          ],
          "importancia": "Si",
          "nseleccionados": "2",
          "type": "checkbox-group",
          "required": "true",
          "name": "checkbox-group-1484175366328",
          "label": "4.- preugnta cuatro",
          "class": "checkbox-group form-group col-md-7 ",
          "posicion": 6
        },
        {
          "type": "select-ws",
          "posicion": 7,
          "textoApoyo": "",
          "wsList": [
            {
              "name": "selectws-1484175379319",
              "label": "Pregunta 5",
              "requerido": false,
              "class": " select form-group col-md-7 ",
              "url": "http://10.20.58.23:3001/vun/estados",
              "responseDisplay": "nombre",
              "responseValue": "id_estado"
            }
          ]
        },
        {
          "options": [
            {
              "value": "opción-1",
              "text": "Opción 1"
            },
            {
              "value": "opción-2",
              "text": "Opción 2"
            },
            {
              "value": "opción-3",
              "text": "Opción 3"
            },
            {
              "value": "opción-4",
              "text": "Opción 4"
            },
            {
              "value": "opción-5",
              "text": "Opción 5"
            },
            {
              "value": "opción-6",
              "text": "Opción 6"
            },
            {
              "value": "opción-7",
              "text": "Opción 7"
            },
            {
              "value": "opción-8",
              "text": "Opción 8"
            },
            {
              "value": "opción-9",
              "text": "Opción 9"
            },
            {
              "value": "opción-10",
              "text": "Opción 10"
            },
            {
              "value": "opción-11",
              "text": "Opción 11"
            },
            {
              "value": "opcion-12",
              "text": "OPcion 12"
            }
          ],
          "importancia": "No",
          "nseleccionados": "21",
          "type": "checkbox-group",
          "name": "checkbox-group-1484175392010",
          "label": "Pregunta 6",
          "class": "checkbox-group form-group col-md-7 ",
          "posicion": 8
        },
        {
          "regextype": "Sin Validaci&oacute;n",
          "subtype": "text",
          "type": "text",
          "name": "text-1484175666071",
          "label": "Text field",
          "class": "form-control text-input form-group col-md-7 ",
          "posicion": 9
        },
        {
          "options": [
            {
              "label": "",
              "value": "Opción 1",
              "text": "opción-1"
            },
            {
              "label": "",
              "value": "Opción 2",
              "text": "opción-2"
            }
          ],
          "type": "selectnested",
          "name": "selectnested-1484176787924",
          "label": "Select box Nested",
          "class": " select form-group col-md-7 ",
          "posicion": 10
        },
        {
          "regextype": "Sin Validaci&oacute;n",
          "subtype": "text",
          "type": "text",
          "required": "true",
          "name": "text-1484182507613",
          "label": "pregunta salvaje",
          "class": "form-control text-input form-group col-md-7 ",
          "posicion": 11
        }
      ]
    },
    {
      "stepTitle": "Paso 2",
      "name": "paso-2",
      "fields": [
        {
          "options": [
            {
              "label": "",
              "value": "Label",
              "text": "value"
            },
            {
              "label": "",
              "value": "Label",
              "text": "value"
            }
          ],
          "type": "selectnested",
          "name": "selectnested-1484247927980",
          "label": "Select box Nested",
          "class": " select form-group col-md-7 ",
          "posicion": 1
        },
        {
          "type": "select-ws",
          "posicion": 2,
          "textoApoyo": "",
          "wsList": [
            {
              "name": "estado",
              "label": "Estados de la Republica",
              "requerido": false,
              "class": " select form-group col-md-7 ",
              "url": "http://10.20.58.23:3001/vun/estados",
              "responseDisplay": "nombre",
              "responseValue": "id_estado"
            },
            {
              "name": "selectws-1484247986565",
              "label": "municipios",
              "requerido": false,
              "class": " select form-group col-md-7 ",
              "url": "http://10.20.58.23:3001/vun/municipios?filter[where][id_estado]={estado}",
              "responseDisplay": "nombre",
              "responseValue": "id_estado"
            }
          ]
        },
        {
          "regextype": "Sin Validaci&oacute;n",
          "subtype": "text",
          "type": "text",
          "required": "true",
          "name": "text-1484175355765",
          "label": "1 .- pregunta uno",
          "class": "form-control text-input form-group col-md-7 ",
          "posicion": 3
        },
        {
          "regextype": "Sin Validaci&oacute;n",
          "type": "textarea",
          "name": "textarea-1484175358206",
          "label": "2.- pregunta dos",
          "class": "form-control text-area form-group col-md-7 ",
          "posicion": 4
        },
        {
          "type": "date",
          "name": "date-1484175362871",
          "label": "3.- pregunta tres",
          "class": "form-control calendar form-group col-md-7 ",
          "posicion": 5
        },
        {
          "options": [
            {
              "value": "opción-1",
              "text": "Opción 1"
            },
            {
              "value": "opción-2",
              "text": "Opción 2"
            },
            {
              "value": "opcion-3",
              "text": "Opcion 3"
            },
            {
              "value": "opcion-4",
              "text": "Opcion 4"
            }
          ],
          "importancia": "Si",
          "nseleccionados": "2",
          "type": "checkbox-group",
          "required": "true",
          "name": "checkbox-group-1484175366328",
          "label": "4.- preugnta cuatro",
          "class": "checkbox-group form-group col-md-7 ",
          "posicion": 6
        },
        {
          "type": "select-ws",
          "posicion": 7,
          "textoApoyo": "",
          "wsList": [
            {
              "name": "selectws-1484175379319",
              "label": "Pregunta 5",
              "requerido": false,
              "class": " select form-group col-md-7 ",
              "url": "http://10.20.58.23:3001/vun/estados",
              "responseDisplay": "nombre",
              "responseValue": "id_estado"
            }
          ]
        },
        {
          "options": [
            {
              "value": "opción-1",
              "text": "Opción 1"
            },
            {
              "value": "opción-2",
              "text": "Opción 2"
            },
            {
              "value": "opción-3",
              "text": "Opción 3"
            },
            {
              "value": "opción-4",
              "text": "Opción 4"
            },
            {
              "value": "opción-5",
              "text": "Opción 5"
            },
            {
              "value": "opción-6",
              "text": "Opción 6"
            },
            {
              "value": "opción-7",
              "text": "Opción 7"
            },
            {
              "value": "opción-8",
              "text": "Opción 8"
            },
            {
              "value": "opción-9",
              "text": "Opción 9"
            },
            {
              "value": "opción-10",
              "text": "Opción 10"
            },
            {
              "value": "opción-11",
              "text": "Opción 11"
            },
            {
              "value": "opcion-12",
              "text": "OPcion 12"
            }
          ],
          "importancia": "No",
          "nseleccionados": "21",
          "type": "checkbox-group",
          "name": "checkbox-group-1484175392010",
          "label": "Pregunta 6",
          "class": "checkbox-group form-group col-md-7 ",
          "posicion": 8
        },
        {
          "regextype": "Sin Validaci&oacute;n",
          "subtype": "text",
          "type": "text",
          "name": "text-1484175666071",
          "label": "Text field",
          "class": "form-control text-input form-group col-md-7 ",
          "posicion": 9
        },
        {
          "options": [
            {
              "label": "",
              "value": "Opción 1",
              "text": "opción-1"
            },
            {
              "label": "",
              "value": "Opción 2",
              "text": "opción-2"
            }
          ],
          "type": "selectnested",
          "name": "selectnested-1484176787924",
          "label": "Select box Nested",
          "class": " select form-group col-md-7 ",
          "posicion": 10
        },
        {
          "regextype": "Sin Validaci&oacute;n",
          "subtype": "text",
          "type": "text",
          "required": "true",
          "name": "text-1484182507613",
          "label": "pregunta salvaje",
          "class": "form-control text-input form-group col-md-7 ",
          "posicion": 11
        }
      ]
    },
    {
      "stepTitle": "Pasito Perron",
      "name": "perron",
      "fields": [
        {
          "options": [
            {
              "label": "",
              "value": "Label",
              "text": "value"
            },
            {
              "label": "",
              "value": "Label",
              "text": "value"
            }
          ],
          "type": "selectnested",
          "name": "selectnested-1484247927980",
          "label": "Select box Nested",
          "class": " select form-group col-md-7 ",
          "posicion": 1
        },
        {
          "type": "select-ws",
          "posicion": 2,
          "textoApoyo": "",
          "wsList": [
            {
              "name": "estado",
              "label": "Estados de la Republica",
              "requerido": false,
              "class": " select form-group col-md-7 ",
              "url": "http://10.20.58.23:3001/vun/estados",
              "responseDisplay": "nombre",
              "responseValue": "id_estado"
            },
            {
              "name": "selectws-1484247986565",
              "label": "municipios",
              "requerido": false,
              "class": " select form-group col-md-7 ",
              "url": "http://10.20.58.23:3001/vun/municipios?filter[where][id_estado]={estado}",
              "responseDisplay": "nombre",
              "responseValue": "id_estado"
            }
          ]
        },
        {
          "regextype": "Sin Validaci&oacute;n",
          "subtype": "text",
          "type": "text",
          "required": "true",
          "name": "text-1484175355765",
          "label": "1 .- pregunta uno",
          "class": "form-control text-input form-group col-md-7 ",
          "posicion": 3
        },
        {
          "regextype": "Sin Validaci&oacute;n",
          "type": "textarea",
          "name": "textarea-1484175358206",
          "label": "2.- pregunta dos",
          "class": "form-control text-area form-group col-md-7 ",
          "posicion": 4
        },
        {
          "type": "date",
          "name": "date-1484175362871",
          "label": "3.- pregunta tres",
          "class": "form-control calendar form-group col-md-7 ",
          "posicion": 5
        },
        {
          "options": [
            {
              "value": "opción-1",
              "text": "Opción 1"
            },
            {
              "value": "opción-2",
              "text": "Opción 2"
            },
            {
              "value": "opcion-3",
              "text": "Opcion 3"
            },
            {
              "value": "opcion-4",
              "text": "Opcion 4"
            }
          ],
          "importancia": "Si",
          "nseleccionados": "2",
          "type": "checkbox-group",
          "required": "true",
          "name": "checkbox-group-1484175366328",
          "label": "4.- preugnta cuatro",
          "class": "checkbox-group form-group col-md-7 ",
          "posicion": 6
        },
        {
          "type": "select-ws",
          "posicion": 7,
          "textoApoyo": "",
          "wsList": [
            {
              "name": "selectws-1484175379319",
              "label": "Pregunta 5",
              "requerido": false,
              "class": " select form-group col-md-7 ",
              "url": "http://10.20.58.23:3001/vun/estados",
              "responseDisplay": "nombre",
              "responseValue": "id_estado"
            }
          ]
        },
        {
          "options": [
            {
              "value": "opción-1",
              "text": "Opción 1"
            },
            {
              "value": "opción-2",
              "text": "Opción 2"
            },
            {
              "value": "opción-3",
              "text": "Opción 3"
            },
            {
              "value": "opción-4",
              "text": "Opción 4"
            },
            {
              "value": "opción-5",
              "text": "Opción 5"
            },
            {
              "value": "opción-6",
              "text": "Opción 6"
            },
            {
              "value": "opción-7",
              "text": "Opción 7"
            },
            {
              "value": "opción-8",
              "text": "Opción 8"
            },
            {
              "value": "opción-9",
              "text": "Opción 9"
            },
            {
              "value": "opción-10",
              "text": "Opción 10"
            },
            {
              "value": "opción-11",
              "text": "Opción 11"
            },
            {
              "value": "opcion-12",
              "text": "OPcion 12"
            }
          ],
          "importancia": "No",
          "nseleccionados": "21",
          "type": "checkbox-group",
          "name": "checkbox-group-1484175392010",
          "label": "Pregunta 6",
          "class": "checkbox-group form-group col-md-7 ",
          "posicion": 8
        },
        {
          "regextype": "Sin Validaci&oacute;n",
          "subtype": "text",
          "type": "text",
          "name": "text-1484175666071",
          "label": "Text field",
          "class": "form-control text-input form-group col-md-7 ",
          "posicion": 9
        },
        {
          "options": [
            {
              "label": "",
              "value": "Opción 1",
              "text": "opción-1"
            },
            {
              "label": "",
              "value": "Opción 2",
              "text": "opción-2"
            }
          ],
          "type": "selectnested",
          "name": "selectnested-1484176787924",
          "label": "Select box Nested",
          "class": " select form-group col-md-7 ",
          "posicion": 10
        },
        {
          "regextype": "Sin Validaci&oacute;n",
          "subtype": "text",
          "type": "text",
          "required": "true",
          "name": "text-1484182507613",
          "label": "pregunta salvaje",
          "class": "form-control text-input form-group col-md-7 ",
          "posicion": 11
        }
      ]
    }
  ],
  "id": "5877d3d8ecf11f6ac9000006",
  "submitButton": {
    "urlbutton": "http://10.20.58.23:3001/vun/resultados",
    "type": "button",
    "name": "button-1484176794596",
    "label": "Mandalo",
    "class": "btn button-input form-group col-md-7 ",
    "posicion": 12
  }
}

				);
		}
	}
};