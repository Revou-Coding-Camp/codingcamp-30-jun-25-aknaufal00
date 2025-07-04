function updateTime() {
  document.getElementById("currentTime").textContent = new Date().toString();
}
updateTime();

document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value.trim();
  const message = document.getElementById("message").value.trim();
  const gender = document.querySelector("input[name='gender']:checked");

  document.getElementById("errorName").classList.add("hidden");
  document.getElementById("errorDob").classList.add("hidden");
  document.getElementById("errorGender").classList.add("hidden");
  document.getElementById("errorMessage").classList.add("hidden");

  let isValid = true;

  if (!name) {
    document.getElementById("errorName").classList.remove("hidden");
    isValid = false;
  }
  if (!dob) {
    document.getElementById("errorDob").classList.remove("hidden");
    isValid = false;
  }
  if (!gender) {
    document.getElementById("errorGender").classList.remove("hidden");
    isValid = false;
  }
  if (!message) {
    document.getElementById("errorMessage").classList.remove("hidden");
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  updateTime();
  document.getElementById("outputBox").innerHTML = `
        <p>Current time: ${new Date().toString()}</p>
        <p>Name: ${name}</p>
        <p>Tanggal Lahir: ${dob}</p>
        <p>Jenis Kelamin: ${gender.value}</p>
        <p>Pesan: ${message}</p>
      `;

  alert("Terimakasih Atas Impian Anda");
});

document.getElementById("resetOutput").addEventListener("click", function () {
  document.getElementById("outputBox").innerHTML = `
        <p>Current time: <span id="currentTime"></span></p>
        <p>Name: </p>
        <p>Tanggal Lahir: </p>
        <p>Jenis Kelamin: </p>
        <p>Pesan: </p>
      `;
  updateTime();
});