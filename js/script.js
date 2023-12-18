function gantiNama() {
  let nama = prompt("Masukkan nama anda", "");
  document.getElementById("halo-nama").innerHTML = nama;
}

gantiNama();

function validateForm() {
  let name = document.forms["message-form"]["name"].value;
  let birthDate = document.forms["message-form"]["tanggal"].value;
  let gender = document.forms["message-form"]["gender"].value;
  let messages = document.forms["message-form"]["message-from"].value;
  let timeNow = new Date();

  document.getElementById("time-api").innerHTML = timeNow;
  document.getElementById("sender-name").innerHTML = name;
  document.getElementById("sender-birth-date").innerHTML = birthDate;
  document.getElementById("sender-gender").innerHTML = gender;
  document.getElementById("sender-message").innerHTML = messages;

  return false;
}
