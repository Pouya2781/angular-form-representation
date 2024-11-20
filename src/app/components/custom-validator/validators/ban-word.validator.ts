import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[banWord]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: BanWordValidator,
    multi: true
  }]
})
export class BanWordValidator implements Validator {

  @Input({required: true})
  public banWord!: string;

  public validate(control: AbstractControl<string>): ValidationErrors | null {
    if (control.value == null) {
      return null;
    }

    if (control.value.toLowerCase().includes(this.banWord.toLowerCase())) {
      return {banWord: this.banWord.toLowerCase()}
    }

    return null;
  }
}
