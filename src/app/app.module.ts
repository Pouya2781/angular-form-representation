import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { UpdateStrategyComponent } from './components/update-strategy/update-strategy.component';
import { FormControlStatusVisualizerComponent } from './components/form-control-status-visualizer/form-control-status-visualizer.component';
import { CustomValidatorComponent } from './components/custom-validator/custom-validator.component';
import { BanWordValidator } from './components/custom-validator/validators/ban-word.validator';
import { UsernameExistsValidator } from './components/custom-validator/validators/username-exists.validator';
import { FormStructureComponent } from './components/form-structure/form-structure.component';
import { ErrorHandlingComponent } from './components/error-handling/error-handling.component';
import { ScatteredFormComponent } from './components/scattered-form/scattered-form.component';
import { PasswordContainerComponent } from './components/scattered-form/components/password-container/password-container.component';
import { AgeContainerComponent } from './components/scattered-form/components/age-container/age-container.component';
import { FormBaseComponent } from './components/form-base/form-base.component';
import { CustomInputComponent } from './components/form-base/components/custom-input/custom-input.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateStrategyComponent,
    FormControlStatusVisualizerComponent,
    CustomValidatorComponent,
    BanWordValidator,
    UsernameExistsValidator,
    FormStructureComponent,
    ErrorHandlingComponent,
    ScatteredFormComponent,
    PasswordContainerComponent,
    AgeContainerComponent,
    FormBaseComponent,
    CustomInputComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
