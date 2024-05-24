/*  Loop types :

for: It loops through a set of code for a specified amount of times


while: requires a condition to be met to loop through a set of code.


foreach: goes through each value/element in an array.


for in: loops through object properties.

*/

let numbers = [9, 3, 11, 4, 7, 12]
for (let i = 0; i <= numbers.length -1; i++) {
        console.log(numbers[i])

 }

 let cnt = 2
while (cnt < numbers.length) {
    console.log(numbers[cnt])
    console.table()
    cnt++
}

for (let n in numbers) {
    console.log(`Element: ${numbers[n]}, is at position Index: ${n}`)
}

let numb = [1, 2, 3, 5, 8, 9, 7]
    numb.forEach((value) => {
        if (value == 7) {
            console.log('Seven')
        } else {
            console.log(value)
        }
    })


    //function expression



    let data = [9, 'Peter', 'sipho', 3, 4, 11, 'Sarah', 'Sisi']
    data.forEach((person) => {
        if ((typeof person == 'string') && (person.toLowerCase()[0] == 's'))
                console.log(person)
    })