// script.js
const path = window.location.pathname;

// Check if the path matches the required pattern
if (path === "/ping/key/ver") {
    // Allow access
    alert("Access granted!");
} else {
    // Redirect or display an error
    alert("Access denied!");
    window.location.href = "/";
}
