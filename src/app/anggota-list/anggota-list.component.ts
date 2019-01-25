import { Component, OnInit } from '@angular/core';
import { AnggotaService } from '../anggota/anggota.service';
import { AnggotaModel } from '../anggota/anggota.model';

@Component({
  selector: 'app-anggota-list',
  templateUrl: './anggota-list.component.html',
  styleUrls: ['./anggota-list.component.css'],
  providers: [AnggotaService]
})
export class AnggotaListComponent implements OnInit {

  constructor(private anggServis: AnggotaService) { }
  anggotaList: AnggotaModel[];

  ngOnInit() {

    this.anggServis.getListAnggota().subscribe(data => {
      console.log();
      this.anggotaList = data;
    });
  }

}
