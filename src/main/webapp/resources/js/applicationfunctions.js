/**
 * Created by dougllas.sousa on 20/06/2017.
 */

var calculaCalorias = function ( proteinas, carbos, gorduras ) {

    if(!proteinas){
        proteinas = 0;
    }

    if(!carbos){
        carbos = 0;
    }

    if(!gorduras){
        gorduras = 0;
    }

    return (proteinas * 4) + (carbos * 4) + (gorduras * 9);
}