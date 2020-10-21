
 const dataDiaDaSemana = (data) => {
    const dataArray = data.split("/");
    const diasSemana = [
      "Domingo",
      "Segunda Feira",
      "Terça Feira",
      "Quarta Feira",
      "Quinta Feria",
      "Sexta Feira",
      "Sábado",
    ];
    
    const date = new Date(dataArray[2], dataArray[1] + 1, dataArray[0])
    
    return {
      diaDaSemana: diasSemana[date.getDay()],
      fimDeSemana: date.getDay() === 0 || date.getDay() === 6
    };
  };

  module.exports = {dataDiaDaSemana}