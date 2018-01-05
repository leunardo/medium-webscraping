# coding: utf-8
"""Modulo responsavel por conectar-se ao firebase RealTime Database, e salvar os dados coletados."""

import firebase_admin
import json 

from firebase_admin import db
from firebase_admin import credentials

cred = credentials.Certificate("serviceAccountKey.json")

firebase_admin.initialize_app(cred, { 'databaseURL': 'https://medium-toptrends.firebaseio.com/' })

ref = db.reference('/')

def salvar_topicos(topics):
    print('A salvar topicos...')
    ref.child('topics').set(topics)
    print('Topicos salvos com sucesso.')
