
function saveUserInfo() {
    var username = document.getElementById("name").value;
    var usernickname = document.getElementById("nickname").value;

    if (username && usernickname) {
        var userInfo = {
            username: username,
            usersnickname: usernickname,
        };

        localStorage.setItem("userInfo", (userInfo));

        alert("Welcome, " + username + "! Your info has been saved successfully!");
    } else {
        alert("Please fill in both name and nickname fields.");
    }
}
var button = document.getElementById("bt-n");
button.addEventListener("click", () => {
    window.location.href = "./game1.html";
});