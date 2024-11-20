import { Component } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomInputComponent,
      multi: true,
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor {
  protected value: string = '';

  private _onChange: (value: string) => void = (value: string) => {};
  private _onTouched: () => void = () => {};

  public registerOnChange(fn: (value: string) => void): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  public writeValue(obj: string): void {
    this.value = obj;
  }

  public onValueChange(value: string): void {
    this._onChange(value);
  }

  protected onBlur() {
    this._onTouched();
  }
}
