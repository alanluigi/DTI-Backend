/**
 * string [string] formato dd/mm/aaaa
 */
 const dataToDiaDaSemana = (data) => {
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
    
    console.log(date)
    return {
      diaDaSemana: diasSemana[date.getDay()],
      isWeekend: date.getDay() === 0 || date.getDay() === 6
    };
  };

  module.exports = {dataToDiaDaSemana}