import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AnggotaModel } from './anggota.model';
import { AnggotaService } from './anggota.service';

@Component({
  selector: 'app-anggota',
  templateUrl: './anggota.component.html',
  styleUrls: ['./anggota.component.css'],
  providers: [AnggotaService]
})
export class AnggotaComponent implements OnInit {

  anggotaForm: FormGroup;
  constructor(private anggotaService: AnggotaService) { }

  ngOnInit() {
    this.anggotaForm = new FormGroup({
      nama: new FormControl(null, [Validators.required, this.cekIsEmpty]),
      nomorKtp: new FormControl(null, [Validators.required, this.cekIsEmpty]),
      alamat: new FormControl(null, [])
    });
  }

  kirim() {
    const anggotaModel = new AnggotaModel();

    anggotaModel.nama = this.anggotaForm.get('nama').value;
    anggotaModel.nomorKtp = this.anggotaForm.get('nomorKtp').value;
    anggotaModel.alamat = this.anggotaForm.get('alamat').value;
    console.log(anggotaModel);

    this.anggotaService.simpanKontak(anggotaModel).subscribe(data => {
      alert(data.nama + 'Berhasil Disimpan, dengan id' + data.id);

    });

  }
  cekIsEmpty(control: FormControl): { [s: string]: boolean } {
    if (control.value && control.value.trim().length === 0) {
      return { 'blank': true };
    }
    return null;
  }


}
