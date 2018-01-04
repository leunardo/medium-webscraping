const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cloudFunctions = require('./cloud-functions');
const ref = functions.database.ref('/topics'); 

admin.initializeApp(functions.config().firebase);

exports.ProcessarTrendsGerais = ref.onWrite(cloudFunctions.processarTrendsGerais);
exports.ProcessarTopicosEspecificos = ref.onWrite(cloudFunctions.processarTopicosEspecificos);
