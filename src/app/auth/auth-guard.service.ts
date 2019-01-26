import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
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