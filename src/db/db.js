const fs = require('fs');

class Id {
    static async saveId(chatId){
        await fs.appendFile('./src/db/chatId_db.json', chatId + '\n', err => {
            err ? console.log('err (save Id)') : console.log('sucess (save Id)');
        })
    }

    static async verifyId(chatId){
        const data = fs.readFileSync('./src/db/chatId_db.json').toString().split('\n');
        let chatIdExist = false;
        
        data.forEach( data => {
            if(data == chatId) chatIdExist = true;
        });

        !chatIdExist ? this.saveId(chatId) : console.log('ChatId exists!');

    }
}

module.exports = Id;