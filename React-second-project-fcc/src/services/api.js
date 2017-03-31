import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';

export class api {
    static getAllUsers() {
        return Observable.ajax({
            url: "https://fcctop100.herokuapp.com/api/fccusers/top/recent",
            method: 'GET',
            async: true,
            crossDomain: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    }
    //we can add more apis here
}