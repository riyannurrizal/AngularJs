import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    loggedIn = false;
    constructor(private router: Router) { }

    login(username: string, password: string) {
        this.loggedIn = (username === 'riyan' && password === '123');
        if (this.loggedIn) {
            alert('Autentifikasi sukses');
            this.router.navigate(['/anggota-add']);
        } else {
            alert('Autentifikasi gagal');
        }
    }

    logout() {
        this.loggedIn = false;
        this.router.navigate(['/home']);
    }
    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 1000);
            }
        );
        return promise;
    }
}