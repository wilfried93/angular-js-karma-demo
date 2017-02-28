
moduleCalc.service('CalService', function() {
    // Creer un object service
    var service = {};

    // La methode calculer du service
    service.calculer = function(nombre1, nombre2) {
        return nombre1 + nombre2;
    };

    // Retourner l'object service
    return service;
});