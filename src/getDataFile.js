const fs = require('fs');

class FileData {
    // Get datas from JSON file; 
    static async getData() {
        const data = fs.readFileSync('../realtime-covid19/db/covid_datas.json');
        return JSON.parse(data);
    }

    static async formattingData() {
        const data = await this.getData();
        return `
        
        ${data.updateDate} 

        ----- Covid-19 -----
        Total de casos: ${data.accumulated}, 
        Recuperados: ${data.recoveredCases},
        Novos casos: ${data.newCases},
        Total de mortes: ${data.accidentalDeaths},
        Novas mortes: ${data.newDeaths}
        --------------------

        https://covid.saude.gov.br/
        `;
    }
}

module.exports = FileData;