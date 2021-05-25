import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalExtrasComponent } from './modal-extras/modal-extras.component';


@Component({
  selector: 'section-endless-extras',
  templateUrl: './endless-extras.component.html',
  styleUrls: ['./endless-extras.component.scss']
})
export class EndlessExtrasComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModal(modalName: string) {
    console.log(modalName);
    const modalRef = this.modalService.open(ModalExtrasComponent);
    modalRef.componentInstance.modalName = modalName;
  }

}
