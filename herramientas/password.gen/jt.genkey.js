function genkey(size = 8, mode = 0, min = true, may = true, num = true, esp = false){
    if(size > 0 && size <= 128){
        var chain = "";
        var pwgen = "";
        var randn,randl;
        switch(mode){
            case 1: //Hex codes
            case "1": //Hex codes
                chain += "0123456789abcdf";
                for(i = 1; i <= size; i++){
                    randn = Math.floor((Math.random() * chain.length));
                    randl = chain.split('').sort(function(){return 0.5-Math.random()}).join('');
                    pwgen += randl[randn];
                }
                return pwgen;
            break;
            case 0:
            case "0":
            default:
                if(min){
                    chain += "abcdefghihklmnopqrstuvwxyz";
                }
                if(may){
                    chain += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                }
                if(num){
                    chain += "0123456789";
                }
                if(esp){
                    if(min){
                        chain += "ñáéíóúäëïöü";
                    }
                    if(may){
                        chain += "ÑÁÉÍÓÚÄËÏÖÜ";
                    }
                    chain += '@!"#$%&/()=?¡_-:.;,[{}]¨*´+<^>|° ';
                }
                if(chain.length > 0){
                    for(i = 1; i <= size; i++){
                        randn = Math.floor((Math.random() * chain.length));
                        randl = chain.split('').sort(function(){return 0.5-Math.random()}).join('');
                        pwgen += randl[randn];
                    }
                    return pwgen;
                }else{
                    return "Debes activar algún parametro de generación.";
                }
                
            break;
        }
    }else{
        return "Debes elegir un tamaño superior a 0 e inferior o igual a 128.";
    }
}
