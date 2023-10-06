class Hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type.toLowerCase()
    }
    
    get attackTypes() {
        return {
            'mago': 'magia',
            'guerreiro': 'espada',
            'monge': 'artes marciais',
            'ninja': 'shuriken'
        }
    }

    get attackType() {
        return this.attackTypes[this.type]
    }

    attack() {
        console.log(`O ${this.type} atacou usando ${this.attackType}`)
    }
}

const hero = new Hero('Gustavo', 30, 'monge')
hero.attack()