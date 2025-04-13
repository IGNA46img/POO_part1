// Ejercicio 1:
// Crear la clase Person, con propiedades name, age y genre, y el método 
// obtDetails(), que muestra por consola las propiedades de la persona.

class Person {
  constructor(name, age, genre) {
  this.name = name
  this.age = age
  this.genre = genre
  }
  obtDetails = () => {
  // console.log(`${this.name}`)
  console.log(this)
  }
}
  
  const mePerson = new Person('Igna', '46', 'male')
  mePerson.obtDetails()

// Ejercicio 2
// Crear la clase Student, que hereda de Person, e incluye las propiedades 
// course y group y el método register(), que muestre por consola el resultado.

class Student extends Person {
  constructor(name, age, genre, course, group) {
    super(name, age, genre)
    this.course = course
    this.group = group    
  }
  // register = ()=> console.log(this)
  register = ()=> this.obtDetails()
}

const meStudent = new Student('Igna', '46', 'male', '1º', 'A')
meStudent.register()
meStudent.obtDetails()

// Ejercicio 3
// Crear la clase Teacher, que hereda de Person, e incluye las propiedades 
// asignatura y level y el método assign(), que muestre por consola el resultado.

class Teacher extends Person {
  constructor(name, age, genre, asignatura, level) {
    super(name, age, genre)
    this.asignatura = asignatura
    this.level = level    
  }
  assign = ()=> this.obtDetails()
}

const meTeacher = new Teacher('Igna', '46', 'male', 'Mathematics', '1')
meTeacher.assign()
meTeacher.obtDetails()

// Ejercicio extra 1.1:
// Construye las siguientes clases:
// Warrior:
// constructor(life, power): Establece el valor de las propiedades life y power
// attack: Devuelve el valor de power del guerrero
// defend(damage): resta el valor del parámetro recibido damage al valor de la 
// propiedad life. Después, imprime el valor de la vida restante.
// Maya: extiende de la clase Warrior
// constructor: Aquí establecemos los valores para el maya, que no hay que olvidar 
// que es un guerrero.
// drinkColaCao: Suma 10 al poder.
// Aztec: extiende de la clase Warrior
// constructor: Aquí establecemos los valores para el azteca, que no hay que olvidar 
// que es un guerrero.
// drinkNesquik: Suma 10 a la vida.

class Warrior {
  constructor(life, power) {
  this.life = life
  this.power = power
  }
  attack = () => {
    return this.power
  }
  defend = (damage) => {
    this.life -= damage
    console.log(this.life)
  }
}

class Maya extends Warrior {
  drinkColaCao = () => this.power += 10
}

class Aztec extends Warrior {
  drinkNesquik = () => this.life += 10
}

// Ejercicio extra 1.2:
// Realiza la siguiente cadena de intercambio de golpes.
// Azteca bebe nesquik
const aztec = new Aztec(1000, 100)
aztec.drinkNesquik()
// Maya bebe Cola Cao
const maya = new Maya(1000, 100)
maya.drinkColaCao()
// Maya ataca a azteca. Azteca defiende.
// maya.attack(aztec)
// aztec.defend()
aztec.defend(maya.attack())
// Azteca ataca a maya. Maya defiende.
// aztec.attack(maya)
// maya.defend()
maya.defend(aztec.attack())