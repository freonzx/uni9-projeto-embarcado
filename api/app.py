from flask import Flask
from flask_restful import reqparse, abort, Api, Resource
from linear_regression import prediction
from flask_cors import CORS
import os

app = Flask(__name__)
api = Api(app)
CORS(app, resources={r"/*": {"origins": "*"}})

# Definição dos argumentos recebidos pela API
parser = reqparse.RequestParser()
parser.add_argument('n1', type=int)
parser.add_argument('n2', type=int)
parser.add_argument('studytime', type=int)
parser.add_argument('failures', type=int)
parser.add_argument('absences', type=int)

# Nosso Endpoint do recurso de prediction
class Prediction(Resource):
    # Metodo do recurso que responde Requisições POST
    def post(self):
        # Recebe argumentos
        args = parser.parse_args()
        # Passa argumentos recebidos pra função com modelo de previsão
        pred = prediction(args['n1'],args['n2'],args['studytime'],args['failures'],args['absences'])
        # Retorna resposta JSON com previsão
        return {'prediction': pred}

# Registra nossa rota na aplicação
api.add_resource(Prediction, '/prediction')

if __name__ == '__main__':
	# Rodando nosso projeto, variavel port adicionada devido a configuração necessaria do Heroku
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, host='0.0.0.0', port=port)

