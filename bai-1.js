let listNumber =[];
function addNumber(){
const inputNumber = document.getElementById("number_1").value * 1;
listNumber.push(inputNumber);

let result = `Dãy các số: ${listNumber.join(", ")}`;

const divKetQua = document.getElementById("ketQua");
divKetQua.innerHTML = result;
}


function totalNumber(){
    let sum = 0;
    for (let i = 0; i < listNumber.length; i++){
        const number = listNumber[i];
        if(number > 0){
            sum += number;
        }
    let result = `Tổng các số dương: ${sum}`;
    const divTotal = document.getElementById("totalResult");
    divTotal.innerHTML = result;
    }



}