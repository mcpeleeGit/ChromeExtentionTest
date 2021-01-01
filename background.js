var callback = function (details) {

    const client_id = getParameterByName('client_id', details.url);
    const redirect_uri = getParameterByName('redirect_uri', details.url);
    const response_type = getParameterByName('response_type', details.url);
    const state = getParameterByName('state', details.url);

    alert(
        "client_id : " + client_id + "\n\n" + 
        "redirect_uri : " + redirect_uri + "\n\n" + 
        "response_type : " + response_type + "\n\n" + 
        "state : " + state + "\n\n"
    );
};
var filter = { urls: ["https://kauth.kakao.com/oauth/authorize*"] };
var opt_extraInfoSpec = [];

chrome.webRequest.onBeforeRequest.addListener(callback, filter, opt_extraInfoSpec);

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}