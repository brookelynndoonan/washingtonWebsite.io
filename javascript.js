


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('suggestionForm').addEventListener('submit', function(event) {
        var email = document.getElementById('email').value;
        var confirmEmail = document.getElementById('confirmEmail').value;

        if (email !== confirmEmail) {
            alert("Your email does not match, please try again.");
            event.preventDefault(); 
            return false; 
        }
        return true;
    });
});