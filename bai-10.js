let listNumber = [];
function addNumber() {
  const number = document.getElementById("number").value * 1;
  listNumber.push(number);
  document.getElementById(
    "firstResult"
  ).innerHTML = `Dãy các số: ${listNumber.join(", ")}`;
}

function compareNumber() {
  let positiveNumber = 0;
  let negativeNumber = 0;
  for (i = 0; i < listNumber.length; i++) {
    const n = listNumber[i];
    if (n > 0) {
      positiveNumber++;
    } else if (n < 0) {
      negativeNumber++;
    }
  }
  let result = "";
  if (positiveNumber > negativeNumber) {
    result = "Số dương nhiều hơn";
  } else if (positiveNumber < negativeNumber) {
    result = "Số âm nhiều hơn";
  } else {
    result = "Số dương bằng số âm";
  }
  document.getElementById("nextResult").innerHTML = `
   <p>Số dương: ${positiveNumber}</p>
   <p>Số âm: ${negativeNumber}</p>
   <p>Kết quả so sánh: ${result}</p>
   
   `;
}
