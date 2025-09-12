var produtos = [
    { id: 1, nome: "Produto 1", preco: 100, categoria: "Categoria 1" },
    { id: 2, nome: "Produto 2", preco: 200, categoria: "Categoria 2" },
];
function adicionarProduto(produto) {
    produtos.push(produto);
}
// Criando um novo produto
var novoProduto = {
    id: 3,
    nome: "Produto 3",
    preco: 150,
    categoria: "Categoria 3"
};
// Adicionando ao array
adicionarProduto(novoProduto);
// Exibindo o array atualizado
console.log(produtos);
