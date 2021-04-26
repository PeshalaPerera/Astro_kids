// getting query page innerHTML and assigning it to variable(details)
var elem = document.getElementById("wrap-form");
var details = elem.innerHTML;

// variables to store query fields
var name = "";
var email = "";
var query = "";
var subject = "";

function viewQuery(){
    // getting values from fields
    name = document.form.name.value;
    email = document.form.email.value;
    query = document.form.message.value;
    subject = document.form.subject.value;
    

    if(checkName(name.trim())){
        alert("Name is invalid");
    } else if(query.trim() == ""){
        alert("Query is invalid");
    } else if(subject.trim() == ""){
        alert("Please select your subject");
    } else if (checkEmail(email.trim())) {
        alert("Email is invalid");
    } else {
        // Showing the results & two buttons
        elem.innerHTML = `<p> Name: ${name} <br><br> Email: ${email} <br><br> Subject: ${subject} <br><br> Details: ${query} </p>`;
        
        var send_btn = document.createElement("BUTTON");
        send_btn.innerHTML = "Send";        
        send_btn.classList.add("send_btn");

        var edit_btn = document.createElement("BUTTON");
        edit_btn.innerHTML = "Edit";
        edit_btn.classList.add("edit_btn");

        elem.appendChild(send_btn);
        elem.appendChild(edit_btn);

        // when the edit button is clicked we showing the previous page with filled in results
        edit_btn.addEventListener("click", function() {
            elem.innerHTML = details;
            document.form.name.value = name;
            document.form.email.value = email;
            document.form.message.value = query;
            document.form.subject.value = subject;
        });   

        //sending our details using gmail
        send_btn.addEventListener("click", function() {
            elem.innerHTML = details;  
            alert("Sending email to " + email); 
            let mail_query = `mailto:${email}?subject=Query&body=Name:${name}%0D%0AEmail:${email}%0D%0ASubject:${subject}%0D%0ADetails:${query}`;
            window.open(mail_query,'_blank');
        });                  
    }
}

// function to validate email using regular expression
// function returns true if email is in valid format
function checkEmail(email) {
    let pattern =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !pattern.test(email);
}

// function to validate name using regular expression
// function returns true if name is in correct format
function checkName(name) {
    let pattern = /^[ a-zA-Z\-\’]+$/;
    return !pattern.test(name);
}