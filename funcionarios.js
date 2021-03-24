//- Use o filter() para recuperar um array apenas com objetos da categoria 'gerente'
//- Use o reduce() para retornar o objeto com o menor id
//- Use o map() para colocar todos os nomes no formato UpperCase.


//import funcionarios from './funcionarios';
const funcionarios = [
    {
        id: 11,
        nome: 'joao da silva',
        cpf: '111.222.333-44',
        categoria: 'tecnico'
    },
    {
        id: 22,
        nome: 'joana da silva',
        cpf: '111.222.333-55',
        categoria: 'tecnico'
    },
    {
        id: 23,
        nome: 'joana da Mata',
        cpf: '111.222.333-66',
        categoria: 'analista'
    },
    {
        id: 24,
        nome: 'joana da Mata',
        cpf: '23456789-00',
        categoria: 'gerente'
    },
    {
        id: 45,
        nome: 'joana da Mata',
        cpf: '111222333-44',
        categoria: 'gerente'
    },
    {
        id: 36,
        nome: 'joana da Mata',
        cpf: '654321987-23',
        categoria: 'gerente'
    },
    {
        id: 27,
        nome: 'joana da Mata',
        cpf: '098876654-99',
        categoria: 'gerente'
    }
];

function filtter() {
    
    const func = funcionarios.filter(funcionario => funcionario.categoria === 'gerente');
    return func;
}

function Reduce() {

    const menorId = funcionarios.reduce(function (a,b) {
        if (b.id < a.id) a = b;
        return a;

        
    })

     return menorId;



}

function Map() {
    const Uper = funcionarios.map(funcionario => funcionario.nome.toUpperCase())
    console.log(Uper);
        
    return Uper;  
    


}

module.exports = { filtter, Reduce, Map };


