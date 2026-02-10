class Character{
    static MAX_HEALTH = 100;

    constructor(name){
        this.name = name;       
        this.inventory = [];
    }

    roll(mod = 0){
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        return result;
    }
}