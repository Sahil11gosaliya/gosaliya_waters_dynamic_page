
/*To toggle the function between profiles */
const buttons = document.querySelectorAll(".selectSection button");
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const active = document.querySelector(".active");
    if (active) active.classList.remove("active");
    button.classList.add("active");
    const content = document.querySelectorAll('.content');
    content.forEach(item => {
      item.style.display = item.getAttribute('data-number') === button.getAttribute('data-number') ? "block" : "none";
    });
  });
});




const items = document.querySelectorAll(".item");

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    this.classList.toggle("open");
  });
}


/*To pop up more content */
function openTeam(evt, teamName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(teamName).style.display = "block";
  evt.currentTarget.className += " active";
}