let classRoom = [
    {
        "Marnie": [
            { "Monday": true },
            { "Tuesday": true },
            { "Wednesday": true },
            { "Thursday": true },
            { "Friday": true }
        ]
    },
    {
        "Lena": [
            { "Monday": false },
            { "Tuesday": false },
            { "Wednesday": true },
            { "Thursday": false },
            { "Friday": true }
        ]
    },
    {
        "Shoshanna": [
            { "Monday": true },
            { "Tuesday": true },
            { "Wednesday": false },
            { "Thursday": true },
            { "Friday": false }
        ]
    },
    {
        "Jessa": [
            { "Monday": false },
            { "Tuesday": false },
            { "Wednesday": false },
            { "Thursday": false },
            { "Friday": true }
        ]
    }
];

// YOUR CODE BELOW


function attendanceCheck(dayOfTheWeek) {

    let studentsInClass = [];

    for (let i = 0; i < classRoom.length; i++) {
        for (let student in classRoom[i]) {

            for(let k = 0; k< classRoom[i][student].length; k++){
                if(classRoom[i][student][k][dayOfTheWeek]){
                    studentsInClass.push(student)
                }
            }
           




        }

    }

    return studentsInClass;

}