moduleCalc.factory('CalFactory', function() {
    return function(nombre1, nombre2) {
        console.log('Utilisation de CalFactory');
        return nombre1 + nombre2;
    };
});
