// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let err=document.getElementById("error")
console.log(err);

function purchase(){
	console.log("button clicked")
	err.textContent="Something went wrong, please try again"
}
