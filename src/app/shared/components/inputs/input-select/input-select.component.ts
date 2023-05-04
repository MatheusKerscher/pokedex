import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { SelectOption } from 'src/app/shared/models/common/select-option/select-option.model';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
})
export class InputSelectComponent implements OnInit {
  @Input() formGroup: FormGroup = new FormGroup({});
  @Input() controlName: string = '';
  @Input() validacaoInput: boolean = false;
  @Input() list: SelectOption[] = [];
  @Input() textLabel?: any;

  @Output() emmiterClick = new EventEmitter();

  isSelected: boolean = true;

  constructor() {}

  ngOnInit(): void {
    const selectedOption = this.list.find((option) => option.selected);
    this.formGroup.controls[this.controlName].setValue(selectedOption?.value);
  }

  emitterClick() {
    this.emmiterClick.emit();
  }

  get formControl(): AbstractControl {
    return this.formGroup?.controls[this.controlName] ?? new FormControl();
  }
}
