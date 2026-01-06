const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  if (!weight || !height) {
    alert("wajib diisi yaa");
    return;
  }

  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
  let status = "";

  if (bmi < 18.5) status = "Kurus";
  else if (bmi < 25) status = "Normal";
  else if (bmi < 30) status = "Gemuk";
  else status = "Obesitas";

  document.getElementById("bmiValue").textContent = bmi;
  document.getElementById("bmiStatus").textContent = status;
});
