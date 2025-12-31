let listNumber = [];
function addNumber() {
  const number = document.getElementById("number_5").value * 1;
  listNumber.push(number);

  let result = `Dãy số nhập vào là ${listNumber.join(", ")}`;
  const firstResult = document.getElementById("firstResult");
  firstResult.innerHTML = result;
}

function findEvenNumber() {
  let even = -1;
  for (let i = 0; i < listNumber.length; i++) {
    const n = listNumber[i];
    if (n % 2 === 0) {
      even = n;
    }
  }
  let rs = `Số chẵn cuối cùng là ${even}`;
  const lastResult = document.getElementById("lastResult");
  lastResult.innerHTML = rs;
}
