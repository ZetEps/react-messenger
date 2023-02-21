

class Database{
    private static isExist:boolean;
    private static instance:Database
    constructor() {
        if(Database.isExist) return Database.instance;
        Database.isExist = true;
        Database.instance = this;
    }
}



export default Database;