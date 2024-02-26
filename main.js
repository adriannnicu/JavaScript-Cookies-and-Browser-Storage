const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value || ""}${expires}; path=/`;
};

const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let c of ca) {
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
};

document.querySelectorAll('input[name="language"]').forEach(input => {
    input.addEventListener('click', () => {
        setCookie('cookieLanguage', input.value, 30);
    });
});

const setLanguage = getCookie('cookieLanguage');
if (setLanguage) {
    document.querySelector(`input[name="language"][value="${setLanguage}"]`).checked = true;
}


const allCookies = document.cookie;
console.log(allCookies);

/////////

const keys = Object.keys(localStorage);

keys.forEach(key => {
    const value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
});

const setLanguageLocalStorage = (language) => {
    localStorage.setItem('localStorageLanguage', language);
};

const getLanguageLocalStorage = () => {
    return localStorage.getItem('localStorageLanguage');
};

document.querySelectorAll('input[name="language"]').forEach(input => {
    input.addEventListener('click', () => {
        setLanguageLocalStorage(input.value);
    });
});

const preferredLanguage = getLanguageLocalStorage();
if (preferredLanguage) {
    document.querySelector(`input[name="language"][value="${preferredLanguage}"]`).checked = true;
}