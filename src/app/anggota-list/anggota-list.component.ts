import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { AnggotaService } from '../anggota/anggota.service';
import { AnggotaModel } from '../anggota/anggota.model';

@Component({
  selector: 'app-anggota-list',
  templateUrl: './anggota-list.component.html',
  styleUrls: ['./anggota-list.component.css'],
  providers: [AnggotaService]
})
export class AnggotaListComponent implements OnInit, OnChanges {
  //OnChanges akan bereaksi kepada @Input
  @Output() dariChildKeParent = new EventEmitter<string>();
  constructor(private anggServis: AnggotaService) { }



  @Input() childListen: string;
  anggotaList: AnggotaModel[];

  ngOnInit() {

    this.anggServis.getListAnggota().subscribe(data => {
      this.anggotaList = data;
    });
  }

  kirimIdx(id: string) {
    this.dariChildKeParent.emit(id);
  }

  ngOnChanges() {
    this.ngOnInit();
  }

}
