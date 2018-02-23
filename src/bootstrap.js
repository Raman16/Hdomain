let axios = require("axios");

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

// Set the CSRF token
let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  axios.defaults.headers.common["X-CSRF-TOKEN"] = token.content;
} else {
  console.error("CSRF token not found");
}

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    console.info("From request interceprior success");
    return response;
  },
  function(error) {
    console.error("From request interceprior error");

    if (!error.response) {
      console.error("Network error. Please check your network connection");
    }

    return Promise.reject(error);
  }
);

window.request = axios;
