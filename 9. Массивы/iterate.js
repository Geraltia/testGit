const developerNames = ['Maxim','Igor','Nastya','Irina']

//1 for

/*
for(let i = 0; i< developerNames.length;i++){
    console.log(developerNames[i])
}*/

//for of

/*
for (const name of developerNames){
    console.log(name)
}

// for each

developerNames.forEach((item,index, array)=>{
    console.log(array)
})*/


// map

const salariesOfDevelopers = [400,500,600,2000,350]

const updatedSalaries = salariesOfDevelopers.map((salary,index,array)=>{
    return salary*2
})
console.log(updatedSalaries)

// filter

const filtredSalary = salariesOfDevelopers.filter((salary,index,array)=>{
    return index % 2 === 0
})
console.log(filtredSalary)

// find

const findedSalary = salariesOfDevelopers.find((salary,index,array)=>{
    return index === 2
})
console.log(findedSalary)

// findIndex

const salaryIndex = salariesOfDevelopers.findIndex((salary,index,array)=>{
    return salary === 300
})
console.log(salaryIndex)

// some every
const someSalary = salariesOfDevelopers.every((salary,idnex,array)=>{
    return salary === 400
})

console.log(someSalary)