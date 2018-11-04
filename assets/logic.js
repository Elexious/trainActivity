
<script src="https://www.gstatic.com/firebasejs/5.5.7/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDJsJvwFdYzH6NLT_z1uGaIQJKHo53E1rU",
    authDomain: "train-activity-5de67.firebaseapp.com",
    databaseURL: "https://train-activity-5de67.firebaseio.com",
    projectId: "train-activity-5de67",
    storageBucket: "",
    messagingSenderId: "317320308418"
  };
  firebase.initializeApp(config);
</script>

var database = firebase.database();

$("#add").on("click", function (event) {
    event.preventDefault();
    
    var name = $("#train").val().trim();
    var destination = $("#destination").val().trim();
    var time = moment($("#time").val().trim(), "HH:mm").format("X");
    var frequency = $("#frequency").val().trim();
    
    var newTrain = {
        name: name,
        destination: destination,
        time: time,
        frequency: frequency
    };
    database.ref().push(newTrain);
    alert("Train successfully added");

    
    $("#train").val("");
    $("#destination").val("");
    $("#time").val("");
    $("#frequency").val("");
});

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    var name = childSnapshot.val().name;
    var destination = childSnapshot.val().destination;
    var time = childSnapshot.val().time;
    var frequency = childSnapshot.val().frequecy;

    

    var new = $("<tr>").append(
        $("<td>").text(name),
        $("<td>").text(destination),
        $("<td>").text(time),
        $("<td>").text(frequency),
    );

    $("#table").append(new);
});