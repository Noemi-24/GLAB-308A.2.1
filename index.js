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

// ====== Part 3: Class Features & Part 4: Class Uniforms  & Part 6: Developing Skills =====
//Adventurer Class
class Adventurer extends Character {
    static  ROLES = ["Fighter", "Healer", "Wizard", "Archer", "Warrior"];
    
    constructor (name, role) {
        super(name);
        
        if (!Adventurer.ROLES.includes(role)) { 
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

    duel(opponent) {

        console.log(`⚔️ Duel between ${this.name} and ${opponent.name}`);
        console.log("================================");

        while (this.health > 50 && opponent.health > 50) {

            const myRoll = this.roll();
            const opponentRoll = opponent.roll();

            console.log(`${this.name} got: ${myRoll}`);
            console.log(`${opponent.name} got: ${opponentRoll}`);

            if (myRoll < opponentRoll) {

                this.health -= 1;
                console.log(`${this.name} lose 1 health point`);

            } else if (opponentRoll < myRoll) {

                opponent.health -= 1;
                console.log(`${opponent.name} lose 1 health point`);

            } else {

                console.log("🤝 Tie, no one loses health points");
            }

            console.log("❤️ Curretn Health:");
            console.log(`${this.name}: ${this.health}`);
            console.log(`${opponent.name}: ${opponent.health}`);
            console.log("--------------------------------");
        }

        // Display winner
        if (this.health > opponent.health) {

            console.log(`🏆 Winner: ${this.name}`);

        } else {

            console.log(`🏆 Winner: ${opponent.name}`);
        }
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


// ====== Part 7: Adventure Forth =====

const fighter = new Adventurer("Luis", "Fighter");
const wizard = new Adventurer("Ana", "Wizard");

fighter.duel(wizard);
