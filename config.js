// ===== CONFIG API =====
window.API_BASE = "https://smarthome-github-io-7.onrender.com";

// alias cho code cũ
window.API = window.API_BASE;

// helper
window.api = function(path){
  return window.API_BASE + path;
};

console.log("API:", window.API_BASE);