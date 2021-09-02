# 📋 Sobre a atividade

Na atividade de hoje, iremos aprender sobre métodos de array em conjunto com o React. No React utilizamos diversos métodos de array em conjunto com o state, sempre respeitando a imutabilidade.

# ℹ️ Informações úteis

## Resultado

![](https://i.imgur.com/U8zQige.gif)

## 🖐️🍝Mão na massa!

*   Com seu projeto React criado, importe o useState e instancie ele dessa forma:

    const [fruits, setFruits] = useState([
        { name: "banana", color: "yellow", price: 2 },
        { name: "cherry", color: "red", price: 3 },
        { name: "strawberry", color: "red", price: 4 },
      ]);

*   Com isso, temos 3 frutas dentro do nosso array, com suas respectivas cores, preços e nomes
*   Dentro do JSX, faça um map no state `fruits` e faça a exibição do nome de cada fruta
*   Adicione um botão na exibição, sem função por enquanto.
*   Agora, crie uma função `filterRedFruits` que deverá fazer um filtro no state `fruits`, onde a cor seja "red", ou seja, você deverá utilizar o método `filter` para filtrar. Não esqueça de fazer o `setFruits()` onde o parâmetro será o resultado do `filter`
*   Adicione a função `filterRedFruits` no evento `onClick` do botão que você criou antes.
*   Crie uma constante `totalPrice` que será a soma dos preços do state `fruits` utilize o método `reduce` para realizar essa operação.
*   Renderize o `totalPrice` acima da lista.
*   Agora, clicando no botão, o filtro irá acontecer e de forma reativa o React irá atualizar o preço do nosso state `fruits`!

## 💪Agora é com você

*   Separe em um componente `<FruitList />` que receberá por props o array de fruits e será responsável por fazer a renderização da lista.
*   Estilize a aplicação.

## 🔗 Links úteis

[Array.prototype.reduce() - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

[Array.prototype.filter() - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

[Array.prototype.map() - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

# 💡Conhecimentos aplicados:

*   Componentes
*   Props
*   State
*   Métodos de array
