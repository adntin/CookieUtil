var CookieUtil = {

    get: function (name){
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
            
        if (cookieStart > -1){
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1){
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        } 

        return cookieValue;
    },
    
    set: function (name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    
        if (expires instanceof Date) {
            cookieText += "; expires=" + expires.toGMTString();
        }
    
        if (path) {
            cookieText += "; path=" + path;
        }
    
        if (domain) {
            cookieText += "; domain=" + domain;
        }
    
        if (secure) {
            cookieText += "; secure";
        }
    
        document.cookie = cookieText;
    },
    
    unset: function (name, path, domain, secure){
        this.set(name, "", new Date(0), path, domain, secure);
    }

};


// // set cookie
// CookieUtil.set("name", "linbin");
// CookieUtil.set("sex", "20");
// // get cookie
// alert(CookieUtil.get("name")); //linbin
// alert(CookieUtil.get("sex")); //20
// // remove cookie
// CookieUtil.unset("name");
// CookieUtil.unset("book");


// // set cookie, include path, domain, expires
// CookieUtil.set("name", "linbin", "/dist/", "wwww.abc.com", new Date("January 1, 2020"));
// // remove above cookie
// CookieUtil.unset("name", "linbin", "/dist/", "wwww.abc.com");
// // set secure cookie
// CookieUtil.unset("name", "linbin", null, null, null, true);




