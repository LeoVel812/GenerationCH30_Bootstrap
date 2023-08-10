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
