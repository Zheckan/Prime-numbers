let num = prompt('Число', 100);
console.log(num);

// for (i = 1; i < num - 1; i++) {
//     let test;
//     test = (num / (num - i));

//     let test1 = Number.isInteger(num / (num - i));
//     console.log(i);
//     console.log(test);
//     console.log(test1);
// }
if (num % 2 === 0) {

}
if (num == 1) {
    console.log("Исключение");
}
else if (num == 2) {
    console.log("Простое");
}
else {
    if (a = Number.isInteger(num / 2)) {
        console.log("Не простое");
    }
    else if (a = !Number.isInteger(num / 2)) {
        for (i = 1; i < num - 1; i++) {
            let test;
            test = Number.isInteger(num / (num - i));
            // console.log(test);
            if (test == true) {
                console.log("Не Простое");
                break;
            }
            else {
                console.log("Простое");
            }
        }
    }
}

// status: string like "open" "closed" "brain fuck"
class Order {
    id;
    status;
}

class OrderEugen extends Order {
    special
}

// если статус Open то показывать сообщение статуса "The order is opened"

// const statusMap = new Map();
const statusMap = {
    open: 'The order id opened',
    closed: 'The order id closed',
    "brain fuck": 'The order id brain fuck',
};

function getStatusPresentation(status) {
    // if (status == 'opened'){
    //     return `The order is ${status}`;
    // } else {
    //     return 'The order is closed'; 
    // }

    return statusMap[status];
}