/** If I click on a nav element, toggle classlist */

function toggleClassName() {
    const selected = document.activeElement.id;
    const element = document.getElementById(selected);
    document.getElementById("test").innerHTML = element;
    element.classList.toggle('active');
}