//! Steps:

//! Grab all of the red divs
const leftDivs = document.querySelectorAll(".leftDiv"); //class is . 
//! Add a click event listener to them
leftDivs.forEach((div) => { //for each div in array
    div.addEventListener("click", removeBox);
})

//! Figure out which red div was clicked
function removeBox(e) {//e is click event, event that happens
   const clickedDiv = e.target; //gets element from event and stores in a variable

   //! Find a way to correspond the red div to the matching orange div
   const id = "r" + clickedDiv.innerText; //if we click div 5, this variable would be r5
   const rightDiv = document.getElementById(id); //gets the right div from the id

    //! See if the orange div is there or not
    if(rightDiv.style.display === "none") {
        //! if it's not, change it to display: block;
        rightDiv.style.display = "block";     
    } else {
        //! If it is, change it to display: none;
        rightDiv.style.display = "none";
    }
} 





