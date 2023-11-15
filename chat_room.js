function addRoom() {
    room_name = document.getElementById("room_name").Value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name)
    window.location = "kwitter_page.html"
}

function getData() {
    firebase.database.ref("/").on("value", function (snapshot) ) { document.getElementById("output").innerHTML }
    room_names = childkey;
    console.log("room name - " + room_names);
    row = "<div class='room_name'id=" + room_names +
        "oneclick='redirectToRoomName(this.id)'>#" + Room_Names + "</div><hr>"
    document.getElementById("output").innerHTML += row;

};

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem(
        "room_name", name
    );
    window.location = "kwitter_page.html"
}