import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";

@Directive({
  selector: '[usernameExists]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: UsernameExistsValidator,
    multi: true
  }]
})
export class UsernameExistsValidator implements AsyncValidator {

  private readonly _usernames: string[] = [
    'pouya',
    'behnam',
    'mahdi',
    'atid',
  ]

  public validate(control: AbstractControl<string>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise<ValidationErrors | null>((resolve) => {
      setTimeout(() => {
        const exists = this._usernames.map(username => username.toLowerCase()).includes(control.value.toLowerCase());
        resolve(exists ? {usernameExists: control.value.toLowerCase()} : null)
      }, 500)
    });
  }
}
