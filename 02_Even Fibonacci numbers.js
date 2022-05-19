//Cada novo termo na sequência de Fibonacci é gerado pela adição dos dois termos anteriores. Começando com 1 e 2, os 10 primeiros termos serão:

//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

//Considerando os termos da sequência de Fibonacci cujos valores não excedem quatro milhões, encontre a soma dos termos de valor par.


function multiplos(x, y) {

    var soma = 0;

    for (i = 0; i < 1000; i++) {

        if (i % x == 0 || i % y == 0) {

            soma += i

        }

    }
    return console.log(soma)

}
multiplos(3,5);