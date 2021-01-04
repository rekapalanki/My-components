function year() {
    const date = new Date();
    document.getElementById('footerDate').innerText = date.getFullYear();
}