class Adventurer extends Character {
    static  ROLES = ["fighter", "Healer", "Wizard"];
    
    constructor (name, role) {
        super(name);
        // Every adventurer starts with a bed and 50 gold coins.
        if (role !== Adventurer.ROLES) {
            throw new Error(`Instance role must match ${Adventurer.ROLES}`);
            
        }
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
    }

    // Adventurers have the ability to scout ahead of them.
    scout () {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }

    duel(adventurer){
        opponent = super.roll();
    }
}