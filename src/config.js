let backendURL = "";

if(process.env.VUE_APP_DEBUGMODE === "1") backendURL = "http://192.168.0.200:5000/"
else backendURL = "https://ollie-website-backend.azurewebsites.net/"

console.log(backendURL)

module.exports = {
    backendURL
}
