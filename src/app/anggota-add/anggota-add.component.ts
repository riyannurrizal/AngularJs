import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AnggotaModel } from '../anggota/anggota.model';

@Component({
  selector: 'app-anggota-add',
  templateUrl: './anggota-add.component.html',
  styleUrls: ['./anggota-add.component.css']
})
export class AnggotaAddComponent implements OnInit {

  constructor() { }
  // @Output() anggotaAdd = new EventEmitter<AnggotaModel>();
  // @Input() anggotaChild: AnggotaModel;
  // @Input() anggotaEditParent: AnggotaModel;

  ngOnInit() {
  }

}
