import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
})
export class InputSearchComponent implements OnInit {
  @Input() formGroup: FormGroup = new FormGroup({});
  @Input() controlName: string = '';
  @Input() validacaoInput: boolean = false;
  @Input() textLabel?: string;
  @Input() placeholder?: string;

  @Output() emmiterClick = new EventEmitter();

  faSearch = faMagnifyingGlass;

  constructor() {}

  ngOnInit(): void {
  }

  emitterClick() {
    this.emmiterClick.emit();
  }

  get formControl(): AbstractControl {
    return this.formGroup?.controls[this.controlName] ?? new FormControl();
  }
}
