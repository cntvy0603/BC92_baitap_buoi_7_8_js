let listNumber = [];
function addNumber() {
  const number_6 = document.getElementById("number_6").value * 1;

  listNumber.push(number_6);
  document.getElementById(
    "Resutl_1"
  ).innerHTML = `Dãy các số đã nhập là ${listNumber.join(", ")}`;
}

function changePosition() {
  const post_1 = document.getElementById("post_1").value * 1;
  const post_2 = document.getElementById("post_2").value * 1;

  let newPosition = [];

  for (let i = 0; i < listNumber.length; i++) {
    if (i === post_1) {
      newPosition[i] = listNumber[post_2];
    } else if (i === post_2) {
      newPosition[i] = listNumber[post_1];
    } else {
      newPosition[i] = listNumber[i];
    }
  }

  document.getElementById("Resutl_2").innerHTML =
    "Dãy số sau khi đổi chỗ vị trí: " + newPosition.join(" ");
}
