let listNumber =[];
function addNumber(){
const number = document.getElementById("number_2").value * 1;
listNumber.push(number);

let result = `Dãy các số: ${listNumber.join(", ")}`;
const divKetQua = document.getElementById("ketQua");
divKetQua.innerHTML = result;
}

function countNumber(){
    let count = 0;
    for(let i = 0; i < listNumber.length; i++){
    const printNumber = listNumber[i];
        if(printNumber > 0){
            count++;
        }
        let result = `Có ${count} số dương`;
        const divTotalResult = document.getElementById("totalResult");
        divTotalResult.innerHTML = result;
    }
}