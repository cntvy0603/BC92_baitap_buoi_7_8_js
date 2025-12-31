let listNumber = [];
function addNumber(){
    const number = document.getElementById("number_4").value * 1;
    listNumber.push(number);
    let result = `Dãy các số là ${listNumber.join(", ")}`;
    const firstResult = document.getElementById("firstResult");
    firstResult.innerHTML = result;
}

function minNumber(){
    let min = listNumber[0];
    for(let i = 0; i < listNumber.length; i++){
        const n = listNumber[i];
        if(n > 0 && n < min){
            min = n;
        }
    }

    let result = `Số dương nhỏ nhất: ${min}`;
    const nextResult = document.getElementById("nextResult");
    nextResult.innerHTML = result;
}