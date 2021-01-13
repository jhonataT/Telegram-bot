const fs = require('fs');

class Id {
    static async saveId(chatId){
        await fs.writeFile('./src/db/chatId_db.json', chatId, err => {
            err ? console.log('err (save Id)') : console.log('sucess (save Id)');
        })
    }

    static async verifyId(chatId){
        const data = fs.readFileSync('./src/db/chatId_db.json');
        console.log(data);
    }
}

module.exports = Id;