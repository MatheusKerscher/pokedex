import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Pokemon } from 'src/app/shared/models/pokemon/pokemon.model';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.scss'],
})
export class ModalDetailsComponent implements OnInit {
  @Input() pokemon!: Pokemon;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
