//import filtter from './Objs'


const {filtter, Reduce, Map} = require('./funcionarios');

describe ('teste geral', () => {
    test ('filter', () => {
        const result = filtter();

        expect(result.length).toBe(4);


    })

    test ('reduce', () => {
        
        const result = Reduce();
        

        expect(result.id).toBe(11);
        expect(result.nome).toBe('joao da silva');
    })

    test ('map', () => {

        const result = Map();
        //console.log(result);

        expect(result).toEqual([
            'JOAO DA SILVA',
            'JOANA DA SILVA',
            'JOANA DA MATA',
            'JOANA DA MATA',
            'JOANA DA MATA',
            'JOANA DA MATA',
            'JOANA DA MATA'
          ]);

        


    })
        
})
