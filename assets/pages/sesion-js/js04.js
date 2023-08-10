console.log("Welcome to the JS04 session!");

const personasEnCh30 = [
  ["Luis", "Allan", "Anneth", "Maryluz"] /* ByteMe */,
  ["Ed", "Jimena", "Marifer", "Leo", "Alejandro"] /* PerryCode */,
  ["Lu", "Leo", "Daniel", "Gina"] /* BugBusters */,
];
console.log(`members of ByteMe ${personasEnCh30[2].join(", ")} `);
console.log(`first element of BugBusters ${personasEnCh30[2][0]} `);
//replacing elements:
personasEnCh30[1][3] = "Bryan";
console.log(`first element of BugBusters ${personasEnCh30[1][3]} `);

//another way
personasEnCh30[1].splice(3, 1, "Bryan");
/* getting all elements of each array */
console.table(personasEnCh30);
for (let team = 0; team < personasEnCh30.length; team++) {
  for (let member = 0; member < personasEnCh30[team].length; member++) {
    console.log(personasEnCh30[team][member]);
  }
}
/* Using for of */
const myPet = "Kraken";
for (const character of myPet) {
  console.log(character);
}

for (const team of personasEnCh30) {
  console.log(`printing team:${team}`);
  for (const member of team) {
    console.log(`printing a member:${team}`);
  }
}
