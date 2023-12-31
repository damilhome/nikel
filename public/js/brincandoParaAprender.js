let nome = "";
let pessoaDefault = {
    nome: "Danilo Milhome",
    idade: "21",
    trabalho: "Estudante"
};

let nomes = ["Marcelo Eltaz", "Maria Silva", "Pedro Silva"];
let pessoas = [
    {
        nome: "Danilo Milhome",
        idade: "21",
        trabalho: "Estudante"
    },
    {
        nome: "Maria Silva",
        idade: "28",
        trabalho: "UX/UI Designer"
    }
]

function alterarNome() {
    nome = "Henrique Neves";
    console.log("Valor alterado:");
    console.log(nome);
};

//alterarNome();

function recebeEalteraNome(novoNome) {
    nome = novoNome;
    console.log("Valor alterado recebendo novo nome:");
    console.log(nome);
};

//recebeEalteraNome("José");

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    console.log("Idade:");
    console.log(pessoa.idade);
    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
};

function imprimirPessoas() {
    console.log("-------------IMPRIMIR PESSOAS------------")
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:")
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "Porteiro"
})

imprimirPessoas();

//imprimirPessoa(pessoaDefault);
//imprimirPessoa({
//    nome: "Maria Silva",
//    idade: "28",
//    trabalho: "UX/UI Designer"
//})