// ===== CONFIG API =====
// đổi sang URL backend thực sự trên Render
const API_BASE = "https://smarthome-github-io-7.onrender.com";
const API = API_BASE;

// helper cũ
function api(path){
  return API_BASE + path;
}

console.log("API:", API_BASE);
