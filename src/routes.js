const bodyParser = require('body-parser');
const express = require('express');
const {dataToDiaDaSemana} = require('./utils/dateutils')

const routes = express.Router();

const jsonParser = bodyParser.json()

routes.get('/', (req,res) => {
    return res.send('Listen on port: 3333');
});

routes.post('/', jsonParser, (req,res) => {
    const { data, petsPequenos, petsGrandes } = req.body
    const petShopData = (nome, valor, distancia) => ({nome, valor, distancia})
    const diaDaSemana = dataToDiaDaSemana(data)

    if(!diaDaSemana.isWeekend){
        
        const valorMeuCanino = ((petsPequenos * 20) + (petsGrandes * 40))
        const valorVaiRex = ((petsPequenos * 15) + (petsGrandes * 50))
        const valorChowChawgas = ((petsPequenos * 30) + (petsGrandes * 45))

        const petShops = [
            petShopData("Meu Canino",valorMeuCanino, 2), 
            petShopData("Vai Rex", valorVaiRex, 1.7), 
            petShopData("ChowChawgas", valorChowChawgas, 0.8)
        ];

        const menorValor = Math.min(...petShops.map(({valor}) => valor));
        
        const menoresValores = petShops.filter(({valor}) => valor === menorValor);

        const menorDistancia = Math.min(...menoresValores.map(({distancia}) => distancia));

        const petShopMaisBarato = menoresValores.filter(({distancia})=> distancia === menorDistancia);
        
        console.log(petShops);
        
        return res.send({petShopMaisBarato: petShopMaisBarato[0], diaDaSemana})

    }else{
        const valorMeuCanino = (((petsPequenos * 20) + (petsGrandes * 40)) * 1.2);
        const valorVaiRex = ((petsPequenos * 20) + (petsGrandes * 55));
        const valorChowChawgas = ((petsPequenos * 30) + (petsGrandes * 45));

        const petShops = [
            petShopData("Meu Canino Feliz",valorMeuCanino, 2), 
            petShopData("Vai Rex", valorVaiRex, 1.7), 
            petShopData("ChowChawgas", valorChowChawgas, 0.8)
        ];
    
        const menorValor = Math.min(...petShops.map(({valor}) => valor));
        
        const menoresValores = petShops.filter(({valor}) => valor === menorValor);

        const menorDistancia = Math.min(...menoresValores.map(({distancia}) => distancia))

        const petShopMaisBarato = menoresValores.filter(({distancia}) => distancia === menorDistancia);
        
        console.log(petShops)
        
        return res.send({petShopMaisBarato: petShopMaisBarato[0], diaDaSemana})
    }
})




//Meu Canino Feliz - 2KM - DS P-20 G-40 - FS 20% +
//Vai Rex - 1.7km - DS P-15 G-50 - FS P-20 G-55
//ChowChawgas - 0.8km - P-30 G-45

module.exports = routes;