let listNumber = [];
function addNumber(){
    const number = document.getElementById("number").value * 1;
    listNumber.push(number);
    document.getElementById("ketQua").innerHTML = `Dãy các số nhập vào là ${listNumber.join(", ")}`;
}

function rangeNumber(){
for(i = 0; i < listNumber.length - 1; i++){
    for(let j = i + 1; j < listNumber.length; j++){
        if(listNumber[i] > listNumber [j]){
            let temp = listNumber[i];
            listNumber[i] = listNumber[j];
            listNumber[j] = temp;
        }
    }
}
document.getElementById("lastResult").innerHTML = `Sắp xếp theo thứ tự tăng dần: ${listNumber.join(", ")}`;
}