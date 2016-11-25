var arr = []

function Delete(i) {
    arr.splice(i, 1);
    updateview();
}


function todoApp() {

    var getValue = document.getElementById("icon").value;
    if (getValue == " " || getValue == "") {

        alert("plz write some text!");
    } else {
        arr.push(getValue);
    }
    updateview()



}


function updateview() {

    var item = document.getElementById("item");
    var data = "";

    if (arr.length >= 1) {

        document.getElementById("heading").innerHTML = "Enter Code is Here";


        for (i = 0; i < arr.length; i++) {
            data += "<li>" + arr[i] + " <button onclick='Delete(" + i + ")' >delete</button></li>";
            item.innerHTML = data;
        }
        data = "";
        document.getElementById("icon").value = ""
    } else if (arr.length == 0) {
        item.innerHTML = "";
        document.getElementById("heading").innerHTML = "";

    }
}