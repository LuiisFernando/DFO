import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { validationMessage } from '../libs/validationMessage';

@Directive({ selector: '[appShowErrors]' })
export class ShowErrosDirective implements OnInit {

    @Input('appShowErrors') control: AbstractControl;

    private containerElem: HTMLElement;
    private alertElem: HTMLDivElement;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {

        this.containerElem = this.control instanceof FormGroup ?
            this.el.nativeElement :
            this.el.nativeElement.parentElement;

        this.alertElem = document.createElement('div');
        this.alertElem.className = 'has-error';

        const showOrHideAlert = (onblur: boolean) => {
            if (this.control.invalid && this.control.errors && (onblur || !this.control.dirty || this.control.touched)) {

                for (const errorKey in this.control.errors) {
                    if (this.control.errors.hasOwnProperty(errorKey)) {

                        const validationFunction = validationMessage[errorKey];

                        this.alertElem.innerText = validationFunction(this.control.errors[errorKey]);
                    }
                }

                this.containerElem.classList.add('has-error');

                if (!this.containerElem.contains(this.alertElem)
                  && this.containerElem.querySelectorAll('.has-error').length === 0) {
                  this.containerElem.appendChild(this.alertElem);
                }

              } else {
                this.containerElem.classList.remove('has-error');

                if (this.containerElem.contains(this.alertElem)) {
                    this.containerElem.removeChild(this.alertElem);
                }
            }
        };

        this.control.statusChanges.subscribe(() => showOrHideAlert(false));
        this.el.nativeElement.addEventListener("blur", () => showOrHideAlert(true));
    }
}
