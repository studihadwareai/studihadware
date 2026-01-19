const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.onclick = () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
};

document.querySelectorAll("nav a").forEach(link => {
  link.onclick = () => menu.style.display = "none";
});
