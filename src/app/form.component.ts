import { Component } from '@angular/core';

@Component({
    selector: 'form',
    template: `
        <h1>
            {{ name }}
        </h1>
    `,
    styles: [`
        h1 {
            color: black;
        }
    `]
})

export class FormComponent {
    name = "nick";
}