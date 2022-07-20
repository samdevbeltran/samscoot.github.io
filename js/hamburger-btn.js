function toggle_open(){
    document.querySelector(".toggle-nav").classList.toggle("open");
}
btn = document.getElementById("hamburgerBtn")
btn.onclick = toggle_open