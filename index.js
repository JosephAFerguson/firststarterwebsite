function storeInfo(){
	const name = $("#name").val();
    localStorage.setItem("name", name);
    document.cookie = "name=" + name;
}
function signIn(){
	$("#SIGNUP").toggleClass("hide");
}
function showMessage(name){
	var fieldset = document.getElementById("SIGNUP");
	const form = document.getElementById("nameEmail");
	const h1 = document.querySelector("fieldset h1");
	fieldset.removeChild(form);
	fieldset.removeChild(h1);
	var message = document.createElement("p");
	const TYname = name.toUpperCase();
	message.innerText = "THANK YOU FOR SIGNING UP " + TYname + "!!!!";
	fieldset.appendChild(message);
}
function handleSubmit(event){
	storeInfo();
	const TYname = $("#name").val();
	showMessage(TYname);
	event.preventDefault();
}
function createEventListeners(){
	const form = document.getElementsByTagName("form")[0];
	const SUbutton = document.querySelector(".SUbutton");
	$(form).submit(handleSubmit);
	$(SUbutton).click(signIn);
}
function setUpPage(){
    createEventListeners();
}
$(document).ready(setUpPage);