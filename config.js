// ===== CONFIG API =====
const API_BASE = "https://smarthome-github-io-7.onrender.com";

// tự xử lý URL cho an toàn
function api(path){
  return API_BASE + path;
}

// debug (có thể tắt sau)
console.log("API:", API_BASE);