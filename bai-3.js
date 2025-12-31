let listNumber =[];
function addNumber(){
const number = document.getElementById("number_1").value * 1;
listNumber.push(number);

let result = `Dãy các số: ${listNumber.join(", ")}`;
const divKetQua = document.getElementById("ketQua");
divKetQua.innerHTML = result;
}

function minNumber(){
   let min = listNumber[0];
   for(let i = 0; i < listNumber.length; i++){
    const num = listNumber[i];
    if(num < min){
        min = num;
    }
   } 
   let result = `Số nhỏ nhất là ${min}`;
   const nextResult = document.getElementById("nextResult");
   nextResult.innerHTML = result;
}

