// change username pop-up
const open_edit_username_modal_btn = document.getElementById("open_edit_username_modal_btn");
const modal_container_id = document.getElementById("modal_container_id");
const close_edit_username_modal_btn = document.getElementById("close_edit_username_modal_btn");

open_edit_username_modal_btn.addEventListener("click", () => {
    modal_container_id.classList.add("show");
    document.getElementById("open_edit_email_modal_btn").classList.add("inactive");
    document.getElementById("open_edit_password_modal_btn").classList.add("inactive");
    document.getElementById("open_contact_us_modal_btn").classList.add("inactive");
});

close_edit_username_modal_btn.addEventListener("click", () => {
    modal_container_id.classList.remove("show");
    document.getElementById("open_edit_email_modal_btn").classList.remove("inactive");
    document.getElementById("open_edit_password_modal_btn").classList.remove("inactive");
    document.getElementById("open_contact_us_modal_btn").classList.remove("inactive");
});

// change username pop-up response
const open_edit_username_modal_btn_response = document.getElementById("OK_user_name_pop_up");
const modal_container_id_response = document.getElementById("modal_container_id_response");
const close_edit_username_modal_btn_response = document.getElementById("close_edit_username_modal_btn_response");

open_edit_username_modal_btn_response.addEventListener("click", () => {
    modal_container_id_response.classList.add("show");
});

close_edit_username_modal_btn_response.addEventListener("click", () => {
    modal_container_id_response.classList.remove("show");
    modal_container_id.classList.remove("show");
    document.getElementById("open_edit_email_modal_btn").classList.remove("inactive");
    document.getElementById("open_edit_password_modal_btn").classList.remove("inactive");
    document.getElementById("open_contact_us_modal_btn").classList.remove("inactive");
});

// change email pop-up
const open_edit_email_modal_btn = document.getElementById("open_edit_email_modal_btn");
const modal_container_id_email = document.getElementById("modal_container_id_email");
const close_edit_email_modal_btn = document.getElementById("close_edit_email_modal_btn");

open_edit_email_modal_btn.addEventListener("click", () => {
    modal_container_id_email.classList.add("show");
    document.getElementById("open_edit_username_modal_btn").classList.add("inactive");
    document.getElementById("open_edit_password_modal_btn").classList.add("inactive");
    document.getElementById("open_contact_us_modal_btn").classList.add("inactive");
});

close_edit_email_modal_btn.addEventListener("click", () => {
    modal_container_id_email.classList.remove("show");
    document.getElementById("open_edit_username_modal_btn").classList.remove("inactive");
    document.getElementById("open_edit_password_modal_btn").classList.remove("inactive");
    document.getElementById("open_contact_us_modal_btn").classList.remove("inactive");
});

// change email pop-up response
const open_edit_email_modal_btn_response = document.getElementById("OK_change_email_pop_up");
const modal_container_id_email_response = document.getElementById("modal_container_id_email_response");
const close_edit_email_modal_btn_response = document.getElementById("close_edit_email_modal_btn_response");

open_edit_email_modal_btn_response.addEventListener("click", () => {
    modal_container_id_email_response.classList.add("show");
});

close_edit_email_modal_btn_response.addEventListener("click", () => {
    modal_container_id_email_response.classList.remove("show");
    modal_container_id_email.classList.remove("show");
    document.getElementById("open_edit_username_modal_btn").classList.remove("inactive");
    document.getElementById("open_edit_password_modal_btn").classList.remove("inactive");
    document.getElementById("open_contact_us_modal_btn").classList.remove("inactive");
});


// change password pop-up
const open_edit_password_modal_btn = document.getElementById("open_edit_password_modal_btn");
const modal_container_id_password = document.getElementById("modal_container_id_password");
const close_edit_password_modal_btn = document.getElementById("close_edit_password_modal_btn");

open_edit_password_modal_btn.addEventListener("click", () => {
    modal_container_id_password.classList.add("show");
    document.getElementById("open_edit_username_modal_btn").classList.add("inactive");
    document.getElementById("open_edit_email_modal_btn").classList.add("inactive");
    document.getElementById("open_contact_us_modal_btn").classList.add("inactive");
});

close_edit_password_modal_btn.addEventListener("click", () => {
    modal_container_id_password.classList.remove("show");
    document.getElementById("open_edit_username_modal_btn").classList.remove("inactive");
    document.getElementById("open_edit_email_modal_btn").classList.remove("inactive");
    document.getElementById("open_contact_us_modal_btn").classList.remove("inactive");
});

// change password pop-up response
const open_edit_password_modal_btn_response = document.getElementById("OK_change_password_pop_up");
const modal_container_id_password_response = document.getElementById("modal_container_id_password_response");
const close_edit_password_modal_btn_response = document.getElementById("close_edit_password_modal_btn_response");

open_edit_password_modal_btn_response.addEventListener("click", () => {
    modal_container_id_password_response.classList.add("show");
});

close_edit_password_modal_btn_response.addEventListener("click", () => {
    modal_container_id_password_response.classList.remove("show");
    modal_container_id_password.classList.remove("show");
    document.getElementById("open_edit_username_modal_btn").classList.remove("inactive");
    document.getElementById("open_edit_email_modal_btn").classList.remove("inactive");
    document.getElementById("open_contact_us_modal_btn").classList.remove("inactive");
});

// contact us pop-up
const open_contact_us_modal_btn = document.getElementById("open_contact_us_modal_btn");
const modal_container_id_contact_us = document.getElementById("modal_container_id_contact_us");
const close_contact_us_modal_btn = document.getElementById("close_contact_us_modal_btn");

open_contact_us_modal_btn.addEventListener("click", () => {
    modal_container_id_contact_us.classList.add("show");
    document.getElementById("open_edit_username_modal_btn").classList.add("inactive");
    document.getElementById("open_edit_email_modal_btn").classList.add("inactive");
    document.getElementById("open_edit_password_modal_btn").classList.add("inactive");
});

close_contact_us_modal_btn.addEventListener("click", () => {
    modal_container_id_contact_us.classList.remove("show");
    document.getElementById("open_edit_username_modal_btn").classList.remove("inactive");
    document.getElementById("open_edit_email_modal_btn").classList.remove("inactive");
    document.getElementById("open_edit_password_modal_btn").classList.remove("inactive");
});

// contat us pop-up response
const open_contact_us_modal_btn_response = document.getElementById("OK_contact_us_pop_up");
const modal_container_id_contact_us_response = document.getElementById("modal_container_id_contact_us_response");
const close_contact_us_modal_btn_response = document.getElementById("close_contact_us_modal_btn_response");

open_contact_us_modal_btn_response.addEventListener("click", () => {
    modal_container_id_contact_us_response.classList.add("show");
});

close_contact_us_modal_btn_response.addEventListener("click", () => {
    modal_container_id_contact_us_response.classList.remove("show");
    modal_container_id_contact_us.classList.remove("show");
    document.getElementById("open_edit_username_modal_btn").classList.remove("inactive");
    document.getElementById("open_edit_email_modal_btn").classList.remove("inactive");
    document.getElementById("open_edit_password_modal_btn").classList.remove("inactive");
});
