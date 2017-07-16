import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {
  constructor() { }
validaePassword(password){
    const re = /^(?![0-9]{6})[0-9a-zA-Z]{6}$/;
    return re.test(password);
  }

}