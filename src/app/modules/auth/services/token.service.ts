import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

   getToken(): string {
      var name = "token" + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
   }

  saveToken(token: string) {
    var d = new Date();
    let minutes = 15;
    d.setTime(d.getTime() + (minutes*60*1000));//set expiration time to be after 15 minutes 
    var expires = "expires="+ d.toUTCString();
    document.cookie = "token" + "=" + token + ";" + expires + ";path=/";
  }

  destroyToken() {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

}
