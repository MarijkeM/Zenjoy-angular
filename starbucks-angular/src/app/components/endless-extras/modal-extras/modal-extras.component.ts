import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-extras',
  templateUrl: './modal-extras.component.html',
  styleUrls: ['./modal-extras.component.scss']
})
export class ModalExtrasComponent implements OnInit {
  @Input() name: any;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

}
