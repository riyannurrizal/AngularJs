import { Component, OnInit, Input, OnChanges } from '@angular/core';
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

  constructor(private anggServis: AnggotaService) { }
  @Input() childListen: string;
  anggotaList: AnggotaModel[];

  ngOnInit() {

    this.anggServis.getListAnggota().subscribe(data => {
      console.log();
      this.anggotaList = data;
    });
  }

  ngOnChanges() {
    this.ngOnInit();
  }

}
