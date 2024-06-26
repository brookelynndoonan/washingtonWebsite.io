


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('suggestionForm').addEventListener('submit', function(event) {
        var email = document.getElementById('email').value;
        var confirmEmail = document.getElementById('confirmEmail').value;

        if (email !== confirmEmail) {
            alert("Your email does not match, please try again.");
            document.getElementById('confirmEmail').style.color = "crimson";
            event.preventDefault(); 
            return false; 
        }
        if (email == confirmEmail)
            alert("Your emails match, please continue!");
        document.getElementById('confirmEmail').style.color = "green";
        return true;
    });
});
