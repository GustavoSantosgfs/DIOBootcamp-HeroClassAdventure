# DIOBootcamp-HeroClassAdventure

This project was developed as part of a challenge during the DIO Bootcamp. It simulates an attack sequence of a hero based on their type.

## Challenge Details

Given the type of a hero, the program should simulate the attack the hero performs:

- Mago: Uses "magia"
- Guerreiro: Uses "espada"
- Monge: Uses "artes marciais"
- Ninja: Uses "shuriken"

The output of the program will be: "O {tipo} atacou usando {ataque}". For instance: "O mago atacou usando magia".

## Solution

The solution uses the ES6 class structure. A `Hero` class is created with properties such as `name`, `age`, and `type`. Within the class, getter methods are used to retrieve the attack type based on the hero's type. A dictionary (object) inside the class maps each hero type to its corresponding attack.

When the `attack` method of the class is invoked, it fetches the appropriate attack type from the dictionary and prints the desired message.