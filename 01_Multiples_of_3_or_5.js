//Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, obtemos 3, 5, 6 e 9. A soma desses múltiplos é 23.
//Encontre a soma de todos os múltiplos de 3 ou 5 abaixo de 1000. */

//OBS: todo número que é inteiro e positivo é natural


function multiplos(x, y) {

    var soma = 0;

    for (i = 0; i < 1000; i++) {

        if (i % x == 0 || i % y == 0) {

            soma += i

        }

    }
    return soma

}
console.log(multiplos(3, 5))


