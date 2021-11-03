var array = ['tesoura corta papel','papel cobre veneno',
        'pedra esmaga lagarto','lagarto corta Spock',
        'Spock vaporiza tesoura','tesoura decapita Spock',
        'lagarto come papel','veneno refuta lagarto',
        'Spock vaporiza pedra','veneno esmaga tesoura'];
    
    var separador = array.join(" - ");
    
    var A = separador.replace('esmaga', 'quebra');
    var B = separador.replace('lagarto', 'tesoura');
    var C = separador.replace('Spock', 'papel');
    var D = separador.replace('vaporiza', 'embrulha');
    var E = separador.replace('cobre', 'embrulha');
    var F = separador.replace('decapita', 'corta');
    var G = separador.replace('come', 'corta');
    var H = separador.replace('veneno', 'pedra');
    var I = separador.replace('refuta', 'quebra');

    console.log(separador);