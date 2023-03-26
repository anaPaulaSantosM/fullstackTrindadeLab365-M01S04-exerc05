class Person{
    constructor(nome, idade, altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    apresentar(){
        console.log(`Olá me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura.`)
    }
}

class DataPerson extends Person {
    constructor(nome, idade, altura, profissao){
        super(nome, idade, altura);
        this.profissao = profissao;
    }
    apresentar(){
        console.log(`Olá me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura e sou ${this.profissao}.`)
    }
}

const dataPerson = new DataPerson('Ana', 38, 1.64, 'Analista de sistemas');
console.log(dataPerson.apresentar());