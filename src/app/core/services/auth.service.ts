import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CookieService } from '../services/cookie.service';
import { Config, User } from '../models/auth.models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    user: User;

    constructor(private http: HttpClient, private cookieService: CookieService) {
    }

    /**
     * Returns the current user
     */
    public currentUser(): User {
        if (!this.user) {
            this.user = JSON.parse(this.cookieService.getCookie('currentUser'));
        }
        return this.user;
    }

    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
     */
    login(email: string, password: string) {
        return this.http.post<any>(`/api/login`, { email, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    this.user = user;
                    // store user details and jwt in cookie
                    this.cookieService.setCookie('currentUser', JSON.stringify(user), 1);
                }
                return user;
            }));
    }

    /**
     * Logout the user
     */
    logout() {
        // remove user from local storage to log user out
        this.cookieService.deleteCookie('currentUser');
        this.user = null;
    }
    setConfig() {
        this.http.get("assets/config.txt", { responseType: 'text' }).subscribe(data => {
            console.log("config data", data);
            const rs: Config = JSON.parse(data);
            const config = new Config();
            config.ws = rs.ws + "/AIPN.svc/";
            config.aipn = rs.aipn;
            config.cipn = rs.cipn;
            localStorage.setItem("AIPNConfig", JSON.stringify(config));
        });

    }
    get getConfig(): Config {
        return JSON.parse(localStorage.getItem('AIPNConfig'));
    }
}

