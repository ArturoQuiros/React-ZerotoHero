//console.log("Hola Mundo");
//variables
//const nombre = "Arturo";
//let apellido = "Quiros";

/* 
-----------------------------------
DES OBJ
-----------------------------------
const persona = {
  name: "Jose",
  age: 22,
  mail: "email@example.com",
};

const useContext = ({ name, age, mail, phone = "8888" }) => {
  return {
    name: name,
  };
};

const man = useContext(persona);
console.log(man);
*/

/* 
-----------------------------------
DES ARR
-----------------------------------
*/
//estandar way
const people = ["Uno", "Dos", "Tres"];
console.log(people[0]);

//desestrucutred way
const [] = people;
const [P1] = people;
const [, , P3] = people; //ignoring indexes
console.log(P1); //index 01
console.log(P3);

const returnArra = () => {
  return ["ABC", 123];
};

const [letras, numeros] = returnArra();
console.log(letras, numeros); //got the array data on names

//Tarea
const useState = (value) => {
  return (
    value,
    () => {
      console.log("Hola");
    }
  );
};

const arr = useState("Goku");
arr[1](); //calling de function

//tarea

/*PROMESAS*/
//basic sintaxis

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    //logic goes here
    console.log("something");
    resolve(); //that triggers the .then
  });
}, 2000);

promesa
  .then((param) => {
    /*logic goes here too */
  })
  .catch((e) => console.error(e));

//-------------------------------------------------
//standar sintaxis
const getMyDatabyID = (id) => {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      //logic goes here
      const data = 1;
      if (data) {
        resolve(data); //that triggers the .then
      } else {
        reject("not found");
      }
    });
  }, 2000);
};

getMyDatabyID(5)
  .then(console.log("this is the then"))
  .catch((e) => console.warn(e)); //-> catch(console.warn);
