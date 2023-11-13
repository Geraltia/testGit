// Добавление
const salariesOfDevelopers = [400,500,600,2000,350]

const newSeniorDeveloperSalary = 5000

salariesOfDevelopers.push(newSeniorDeveloperSalary)


salariesOfDevelopers.unshift(100,101,102,103)


// Удаление

firstRemovedElement = salariesOfDevelopers.shift()
salariesOfDevelopers.shift()
lastRemovedElement = salariesOfDevelopers.pop()
console.log(salariesOfDevelopers)

// Изменение элементов

salariesOfDevelopers[4] = 6000
console.log(salariesOfDevelopers)