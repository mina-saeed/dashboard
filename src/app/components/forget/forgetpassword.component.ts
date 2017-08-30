import { Component } from '@angular/core'
import { users } from '../../shared/users.service'
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router'
import { Md5 } from 'ts-md5/dist/md5';
@Component({

    templateUrl: './forgetpassword.component.html',
    providers: [users, Md5]
})

export class forgetpassword {
    admin: any = []
    constructor(private _md5: Md5, private user: users, private router: Router, private flash: FlashMessagesService) { }
    onForget(userData) {
        var hashingToken = Md5.hashStr(userData.email.toString());
        const body =
            {
                "type": "pharmacy",
                "email": userData.email,
                "token": hashingToken

            }
        this.admin = this.user.forget(body).subscribe(res => {
            if (res == 200) {
                this.flash.show("Please Check your mail", { cssClass: 'alert-success', timeout: 3000 })
            } else {
                this.flash.show('Email does not exist', { cssClass: 'alert-danger', timeout: 3000 });
            }

        });

    }
} 