document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let country = document.getElementById("country").value;
    let terms = document.getElementById("terms").checked;
    
    if (!gender) {
        alert("Confirm a Gender");
        return;
    }
    
    if (!terms) {
        alert("Agree to the terms and conditions");
        return;
    }
    
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <h3>Submitted Data:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender.value}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Terms Accepted:</strong> Yes</p>
    `;
});
