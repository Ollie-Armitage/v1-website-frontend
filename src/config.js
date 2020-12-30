let backendURL = "";

if(process.env.VUE_APP_DEBUGMODE === "1") backendURL = "http://localhost:5000/"
else backendURL = "https://ollie-website-backend.azurewebsites.net/"

module.exports = {
    backendURL
}
