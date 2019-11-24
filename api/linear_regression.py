# Ignore warnings
import warnings
warnings.simplefilter(action='ignore', category=FutureWarning)

import tensorflow

# Link do dataset https://archive.ics.uci.edu/ml/datasets/Student+Performance

# Imports
import matplotlib.pyplot as plt
from matplotlib import style
import pandas as pd
import numpy as np
import sklearn
from sklearn import linear_model
from sklearn.utils import shuffle
import pickle

# Função responsavel de carregar modelo e retornar previsão
def prediction(n1,n2,study,fail,absences):
	# Carregar modelo do pickle
	pickle_in = open("studentgrades.pickle", "rb")
	linear = pickle.load(pickle_in)

	# Cria objeto de array utilizando argumentos recebidos
	arr = [[n1,n2,study,fail,absences]]
	# Utiliza o objeto do modelo carregado, chama o metodo predict passando o array criado
	res = linear.predict(arr)
	# Retorna previsão
	return str(res[0])

# Carregando dataset
# data = pd.read_csv("student-mat.csv", sep=";")
# data = data[["G1", "G2", "G3", "studytime", "failures", "absences"]]

# Valor que vai ser previsto
# predict = "G3"

# Divisão do dataset para treino e teste
# X = np.array(data.drop([predict], 1))
# y = np.array(data[predict])

# x_train, x_test, y_train, y_test = sklearn.model_selection.train_test_split(X, y, test_size = 0.1)

# Treina o modelo multiplas vezes e salva o com melhor performance
# best = 0
# for _ in range(50):
#         x_train, x_test, y_train, y_test = sklearn.model_selection.train_test_split(X, y, test_size = 0.1)
#         linear = linear_model.LinearRegression()

#         linear.fit(x_train, y_train)
#         acc = linear.score(x_test, y_test)
#         print('Model Accuracy >>', acc)

#         if acc > best:
#                 best = acc
#                 with open("studentgrades.pickle", "wb") as f:
#                         pickle.dump(linear, f)

# Carrega modelo anterior
# pickle_in = open("studentgrades.pickle", "rb")
# linear = pickle.load(pickle_in)
