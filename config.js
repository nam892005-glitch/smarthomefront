// ===== CONFIG API =====
const API_BASE = "https://smarthome-github-io-7.onrender.com";

// alias cho code cũ
const API = API_BASE;

// helper
function api(path){
  return API_BASE + path;
}

console.log("API:", API_BASE);