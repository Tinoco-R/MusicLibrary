// show users
const opens_show_users = document.getElementById("delete_users_btn");
const show_users = document.getElementById("show_users_id");
const close_show_users = document.getElementById("clear_screen");

opens_show_users.addEventListener("click", () => {
    show_users.classList.add("show");
});

close_show_users.addEventListener("click", () => {
    show_users.classList.remove("show");
});

// ask confirmation to delete
const opens_confirmation_to_delete = document.getElementById("delete_user_button");
const confirmation_to_delete = document.getElementById("ask_confirmation_to_delete_id");
const close_confirmation_to_delete = document.getElementById("no_delete_return_button");

opens_confirmation_to_delete.addEventListener("click", () => {
    confirmation_to_delete.classList.add("show");
});

close_confirmation_to_delete.addEventListener("click", () => {
    confirmation_to_delete.classList.remove("show");
});

// show deletion result
const opens_deletion_result = document.getElementById("yes_delete_button");
const deletion_result = document.getElementById("deletion_result_id");
const closes_deletion_result = document.getElementById("deletion_result_close_button");

opens_deletion_result.addEventListener("click", () => {
    deletion_result.classList.add("show");
});

closes_deletion_result.addEventListener("click", () => {
    deletion_result.classList.remove("show");
    confirmation_to_delete.classList.remove("show");
    show_users.classList.remove("show");
});

// update the data in HTML from data in database
async function logJSON(){
    const response = await fetch('http://localhost:5000/api/usernames');
    const data = await response.json();
    console.log(data);
    //const html_element = document.getElementById("usernames_and_roles_table");
    
        var target = document.getElementById("usernames_and_roles_table");
        var output = "";
        
        for (var row of data){
            output += `
                <tr>
                    <td> '${row.Username}' </td>
                    <td> '${row.Role_Name}' </td>
                </tr> 
            `;
            //console.log(row.Username);
            //console.log(row.Role_Name);
        };
        target.innerHTML = output
    
    /*
    info = "";
    for (row of data){
        info += `
            <tr>
                <td> '${row.Username}' </td>
                <td> '${row.Role_Name}' </td>
            </tr> 
        `
    }
    html_element.innerHTML(info);
    */
}

logJSON();
