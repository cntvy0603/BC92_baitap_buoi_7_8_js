let listNumber = [];
function addNumber(){
    const number = document.getElementById("number").value * 1;
    listNumber.push(number);
    document.getElementById("firstResult").innerHTML = `Dãy các số là ${listNumber.join(", ")}`;
}

function findNumber(){
    let content = "";
    for(let i = 0; i < listNumber.length; i++){
        const n = listNumber[i];
        if(n % 1 === 0){
            content += n + " ";
        }
    }
    document.getElementById("nextResult").innerHTML = `Số nguyên là ${content}`;
}