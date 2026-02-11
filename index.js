// ====== Part 2: Class Fantasy & Part 4: Class Uniforms =====
// Character Class
class Character{
    static MAX_HEALTH = 100;

    constructor(name){
        this.name = name;         
        this.health = Character.MAX_HEALTH;     
        this.inventory = [];
    }

    roll(mod = 0){
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        return result;
    }
}
// Re-create Robin using the Character class
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// ====== Part 3: Class Features & Part 4: Class Uniforms =====
//Adventurer Class
class Adventurer extends Character {
    static  ROLES = ["Fighter", "Healer", "Wizard", "Archer", "Warrior"];
    
    constructor (name, role) {
        super(name);
        
        if (!Adventurer.ROLES.includes(role)) { //Check this seccion for validation
            throw new Error(`Invalid rol: ${role}. Instance role must match: ${Adventurer.ROLES.join(', ')}`);            
        }
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }

    // Adventurers have the ability to scout ahead of them.
    scout () {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }

    duel(adventurer){
        opponent = super.roll();
        //todo: complete method
    }
}

// Companion Class
class Companion extends Character{
    constructor(name, type){
        super(name);
        this.type = type;
    }
}


// ====== Part 5: Gather your Party =====
// AdventurerFactory Class
class AdventurerFactory {  
    constructor (role) {
        this.role = role;
        this.adventurers = [];
    }
    generate (name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
        return this.adventurers[index];
    }
    findByName (name) {
        return this.adventurers.find((a) => a.name === name);
    }
}

const healers = new AdventurerFactory("Healer");
const robin1 = healers.generate("Robin");


//console.log(healers);