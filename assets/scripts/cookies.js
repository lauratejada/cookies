/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Introduction to third-party APIs
  Andre Specht

  Functions to set, get and delete cookies

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    SameSite: 'Lax',
    ...options
  };

  const keys = Object.keys(options);
  const values = Object.values(options);

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let i = 0; i < keys.length; i++) {
    updatedCookie += `; ${keys[i]}=${values[i]}`;
  }

  document.cookie = updatedCookie;
}

/*
  ?:  -> Non-capturing group (the regex inside the parenthesis must be matched
         but does not create the capturing group)
  ^|; -> Not the following
*/

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));

  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
  setCookie(name, '', {'max-age': -1});
}

// document.cookie = `name=${encodeURIComponent('Andre Specht')}; path=/; max-age=15; SameSite=Lax`;
// document.cookie = `city=${encodeURIComponent('Winnipeg')}; path=/; max-age=15; SameSite=Lax`;

const date = new Date();
date.setSeconds(date.getSeconds() + 15);

//setCookie('name', 'Andre Specht', {'max-age': 10});
//setCookie('city', 'New York', {'expires': date});

//console.log(getCookie('name'));
//console.log(getCookie('city'));
//console.log(getCookie('email'));

// deleteCookie('name');
export { getCookie, setCookie, deleteCookie, date };