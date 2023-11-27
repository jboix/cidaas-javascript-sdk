export class Helper {
  /**
 * create form
 * @param form 
 * @param options 
 * @returns 
 */
  static createForm(url: string, options: any, method: string = 'POST') {
    var form = document.createElement('form');
    form.action = url;
    form.method = method;
    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", options[key]);
        form.appendChild(hiddenField);
      }
    }
    return form;
  }

  /**
  * utility function to create and make post request
  * @param options 
  * @param serviceurl 
  * @param errorResolver 
  * @param access_token??
  * @param headers??
  * @returns 
  */
  static createHttpPromise(options: any, serviceurl: string, errorResolver: boolean, method:string, access_token?: string, headers?: any) {
    return new Promise((resolve, reject) => {
      try {
        var http = new XMLHttpRequest();
        http.onreadystatechange = function () {
          if (http.readyState == 4) {
            if (http.responseText) {
              resolve(JSON.parse(http.responseText));
            } else {
              resolve(errorResolver);
            }
          }
        };
        http.open(method, serviceurl, true);
        http.setRequestHeader("Content-type", "application/json");
        if (headers) {
          for (var key in headers) {
            if (headers.hasOwnProperty(key)) {
              http.setRequestHeader(key, headers[key]);
            }
          }
        }
        if (access_token) {
          http.setRequestHeader("Authorization", `Bearer ${access_token}`);
        }
        let acceptlanguage;
        if (headers?.acceptlanguage) {
          acceptlanguage = headers.acceptlanguage
        } else if (options?.acceptlanguage) {
          acceptlanguage = options.acceptlanguage
        } else {
          acceptlanguage = window?.localeSettings
        }
        if (acceptlanguage) {
          http.setRequestHeader("accept-language", acceptlanguage); 
        }
        if (options) {
          http.send(JSON.stringify(options));
        } else {
          http.send();
        }
      } catch (ex) {
        reject(ex);
      }
    });
  }
}

export class CustomException {
  constructor(public errorMessage: string, public statusCode: number) { }
}
