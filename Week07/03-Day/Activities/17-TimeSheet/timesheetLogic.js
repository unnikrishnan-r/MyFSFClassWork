var firebaseConfig = {
  apiKey: "AIzaSyClekzQuhpBEf71a_YISF7hn8uTlwavTd4",
  authDomain: "my-first-firebase-projec-3eec5.firebaseapp.com",
  databaseURL: "https://my-first-firebase-projec-3eec5.firebaseio.com",
  projectId: "my-first-firebase-projec-3eec5",
  storageBucket: "",
  messagingSenderId: "291710796124",
  appId: "1:291710796124:web:e5f11a091fc8d287"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Create a variable to reference the database
var database = firebase.database();

console.log("Initialized");

$("#add-employee-btn").on("click", function() {
  console.log("Clicked Submit");
  event.preventDefault();

  database.ref("/employees").push({
    employeeName: $("#employee-name-input")
      .val()
      .trim(),
    employeeRole: $("#role-input")
      .val()
      .trim(),
    employeeStartDate: $("#start-input")
      .val()
      .trim(),
    employeeMonthlyRate: $("#rate-input")
      .val()
      .trim()
  });

  // database.ref("/employees").on("child_added", function(snapshot) {
  //     var latestEmployee = snapshot.val();
  //     console.log(latestEmployee.employeeName);
  //     // $('tbody').append($('<tr>')).append($('<td>',{
  //     //     text: latestEmployee.employeeName
  //     // }))
  // })
});

database.ref("/employees").on("child_added", function(snapshot) {
  var latestEmployee = snapshot.val();
  // console.log(latestEmployee.employeeName);
  $("tbody")
    .append($("<tr>"))
    .append(
      $("<td>", {
        text: latestEmployee.employeeName
      })
    )
    .append(
      $("<td>", {
        text: latestEmployee.employeeRole
      })
    )
    .append(
      $("<td>", {
        text: latestEmployee.employeeStartDate
      })
    )
    .append(
      $("<td>", {
        text: calculateMonthsWorked(latestEmployee.employeeStartDate)
      })
    )
    .append(
      $("<td>", {
        text: latestEmployee.employeeMonthlyRate
      })
    )
    .append(
      $("<td>", {
        text:
          latestEmployee.employeeMonthlyRate *
          calculateMonthsWorked(latestEmployee.employeeStartDate)
      })
    );
});

function calculateMonthsWorked(startDate) {
  var today = new Date();
  var currentDate =
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();

  const date1 = new Date(startDate);
  const date2 = new Date(currentDate);

  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24) / 30);
  return diffDays;
}
