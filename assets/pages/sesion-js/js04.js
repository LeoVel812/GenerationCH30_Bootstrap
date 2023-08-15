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
console.log("=========for of========");

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

/* Using forEach */
console.log("=========forEach========");
function loopTeams(team, index, array) {
  console.log(`Team index ${index}: ${team}`);
  team.forEach(loopMembers);
  return team;
}
function loopMembers(member, index, array) {
  console.log(`Member index  ${index}: ${member}`);
  return member;
}
personasEnCh30.forEach(loopTeams); //looping only teams
// personasEnCh30.forEach(loopTeams.forEach(loopMembers)); //looping teams and members

// using forEach
console.log("=========forEach with arrow functions========");

personasEnCh30.forEach((team, indexTeam) => {
  console.log(`Team[${indexTeam}]: ${team}`);
  team.forEach((member, indexMember) =>
    console.log(`Member[${indexMember}]: ${member}`)
  );
});
console.log("=========forEach with arrow functions only indexes========");
personasEnCh30.forEach((team, indexTeam) => {
  team.forEach((member, indexMember) =>
    console.log(`[Team][Member]:[${indexTeam}][${indexMember}]: ${member}`)
  );
});
//printing out the chars of myPet string
myPet.split("").forEach((char, charIndex) => console.log(char));
for (const char of myPet) {
  console.log(char);
}
//using break in loops
for (let index = 0; index < 10; index++) {
  if (index >= 5) {
    console.log("stopped at " + index);
    break;
  }
  console.log(index);
}

//1 to 5 table
for (let i = 1; i < 6; i++) {
  for (let j = 1; j < 11; j++) {
    console.log(`${i}*${j}:${i * j}`);
  }
}
console.log("=====stop in n*4 in all ======");
//stopping at 4 in nested loop
for (let i = 1; i < 6; i++) {
  for (let j = 1; j < 11; j++) {
    if (j === 5) break;
    console.log(`${i}*${j}:${i * j}`);
  }
}
console.log("=====stop in 2*4  use break with tag======");
//put a label before the loops
breakOuterLoop: for (let i = 1; i < 6; i++) {
  for (let j = 1; j < 11; j++) {
    if (i === 2 && j === 5) break breakOuterLoop;
    // if (j === 5) break;
    console.log(`${i}*${j}:${i * j}`);
  }
}
console.log("=====stop in n*3  use continue with tag======");
//put a label before the loops
keepOuterLoop: for (let i = 1; i < 6; i++) {
  for (let j = 1; j < 11; j++) {
    if (j > 3) continue keepOuterLoop;
    // if (j === 5) break;
    console.log(`${i}*${j}:${i * j}`);
  }
}

// While Loop

// let counter = 1;
// while (confirm("Do you want to continue?")) {
//   console.log(`Times you've pushed ok: ${counter}`);
//   counter++;
// }

let value = -3;
while (value < 4) {
  console.log(`value:${value}`);
  value++;
}

// do while loop
console.log(`=======`);
value = 4;
do {
  console.log(`value:${value}`);
  value++;
} while (value < 4);
const numberStars = 5;
let star = "";
for (let i = 1; i <= numberStars; i++) {
  star += "*";
  console.log(star);
}
