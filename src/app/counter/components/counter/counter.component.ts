import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `<h1>Counter: {{counter}}</h1>
    <button (click)="incrementa(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="incrementa(-1)">-1</button>`
})

export class CounterComponent {
    constructor() { }
    public counter: number = 10;

    incrementa(value: number): void {
        this.counter += value
    }

    reset() {
        this.counter = 10;
    }
}