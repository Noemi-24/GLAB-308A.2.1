# 📜 Object-Oriented Adventure Game (GLAB 308A.2.1)

## 📌 Description

This project is part of **GLAB 308A.2.1: An Object-Oriented Adventure**.  
It demonstrates the use of Object-Oriented Programming (OOP) principles in JavaScript by creating a simple adventure game with characters, roles, and interactions.

The project includes classes for characters, adventurers, companions, and a factory to generate multiple adventurers.

---

## 🎯 Objectives

This project practices:

- Using objects and nested structures
- Creating and using JavaScript classes
- Implementing class inheritance
- Using static properties
- Validating constructor input
- Creating class methods
- Applying the factory design pattern
- Simulating interactions with game logic

---

## 🛠 Technologies Used

- JavaScript (ES6+)
- Node.js
- Git & GitHub

---

## 📁 Project Structure
/object-oriented-adventure
│
├── index.js
└── README.md

> Note: The main logic is contained in `index.js`.

---

## 🧩 Features

### ✔ Character Class
- Properties: `name`, `health`, `inventory`
- Static property: `MAX_HEALTH`
- Method: `roll()`

### ✔ Adventurer Class (extends Character)
- Static property: `ROLES`
- Role validation in constructor
- Method: `scout()`
- Method: `duel()`

### ✔ Companion Class
- Adds `type` property

### ✔ AdventurerFactory Class
- Generates adventurers with a specific role
- Stores created instances
- Search by name or index

### ✔ Duel System
- Simulates a duel using dice rolls
- Decreases health based on results
- Logs each round
- Declares a winner

---

## ⚔️ Duel Rules

1. Each adventurer rolls using `roll()`
2. The adventurer with the lower roll loses 1 health point
3. Results are logged
4. The duel continues until one reaches 50 health
5. The winner is the one with more than 50 health

---

## ▶️ How to Run the Project

### 1. Clone the Repository

```bash
git clone <your-github-repo-link>
cd object-oriented-adventure
node adventure.js
```
---

## 🧪 Example Usage
```
const fighter = new Adventurer("Luis", "Fighter");
const wizard = new Adventurer("Ana", "Wizard");

fighter.duel(wizard);
```
---

##📚 Learning Outcomes

Through this project, I learned how to:
- Apply object-oriented design in JavaScript
- Use inheritance effectively
- Create reusable class structures
- Validate data using static properties
- Implement basic game mechanics
- Organize code using factories
---

##👩‍💻 Author

Noemi Delgadillo Roldan
LinkedIn: https://www.linkedin.com/in/noemidelgadilloroldan
GitHub: Add your GitHub profile link here

