function greeter(person: string): string {
  return "Hello, " + person;
}

function greetMultiple(people: string[]): string {
  return people.map(person => `Hello, ${person}`).join(', ');
}

let user = ["Jane Doe", "John Smith"];
console.log(greeter(user[0])); // Correct usage
console.log(greetMultiple(user)); // Correct usage for array