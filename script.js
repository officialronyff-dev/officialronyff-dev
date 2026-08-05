// Three-dot Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
}

// Home Button
function goHome() {
    window.location.href = "index.html";
}

// Generate Link Button (अभी Demo)
function generateLink() {

    const input = document.getElementById("userLink");
    const output = document.getElementById("resultLink");

    if (!input || !output) return;

    if (input.value.trim() === "") {
        alert("Please enter a link.");
        return;
    }

    // अभी Demo Link दिखेगा
    output.innerHTML =
        "https://myunlocksite.com/" +
        Math.random().toString(36).substring(2,8);
}