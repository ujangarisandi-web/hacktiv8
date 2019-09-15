// var obj = {}
// obj['a'] = {}
// obj['b'] = {}
// console.log(obj);
// // // obj{
// // //     a:{}
// // //     b{}
// // // }
// obj.a = {
//     name: 'alif',
//     score: 90
// }
// obj.b = {
//     name: 'aris',
//     score: 80
// }
// console.log(obj);

function highestScore(students) {
    // Code disini
    var tampungObject = {}
    for (var i = 0; i < students.length; i++) {
        // console.log(students[i].class);
        // console.log(students[i].name);
        // console.log(students[i].score);
        // console.log(students[i]);
        // tampungObject[students[i].class] = {}
        if (tampungObject[students[i].class] === undefined || tampungObject[students[i].class.score] < students[i].score) {
            tampungObject[students[i].class] = {
                name: students[i].name,
                score: students[i].score,
            }
        }
    }
    return tampungObject
}
// TEST CASE
console.log(highestScore([{
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


// // console.log(highestScore([{
// //         name: 'Alexander',
// //         score: 100,
// //         class: 'foxes'
// //     },
// //     {
// //         name: 'Alisa',
// //         score: 76,
// //         class: 'wolves'
// //     },
// //     {
// //         name: 'Vladimir',
// //         score: 92,
// //         class: 'foxes'
// //     },
// //     {
// //         name: 'Albert',
// //         score: 71,
// //         class: 'wolves'
// //     },
// //     {
// //         name: 'Viktor',
// //         score: 80,
// //         class: 'tigers'
// //     }
// // ]));

// // {
// //   foxes: { name: 'Alexander', score: 100 },
// //   wolves: { name: 'Alisa', score: 76 },
// //   tigers: { name: 'Viktor', score: 80 }
// // }


// // console.log(highestScore([])); //{}