$(document).ready(function () {
  getData();
});

function getData() {
  let localStorageData = localStorage.getItem("student");
  let studentObj = JSON.parse(localStorageData);
  console.log(studentObj);
  $("#Username").text(studentObj.Username);
  $("#Password").text(studentObj.Password);
}
