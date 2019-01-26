import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AnggotaModel } from './anggota.model';
import { AnggotaService } from './anggota.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-anggota',
  templateUrl: './anggota.component.html',
  styleUrls: ['./anggota.component.css'],
  providers: [AnggotaService]
})
export class AnggotaComponent implements OnInit {
  // //event emitter
  // anggotaList: AnggotaModel[] = [];
  // anggotaEdit: AnggotaModel = new AnggotaModel[];
  // onAnggotaAdd(anggotaInfo: AnggotaModel) {
  //   this.anggotaList.push(anggotaInfo);
  // }

  // onAnggotaEdit(anggotaInfo: AnggotaModel){
  //   this.anggotaEdit = anggotaInfo;
  //   console.log(this.anggotaEdit);
  // }



  private idx: string;
  private sub: Subscription;

  parentTalk: string;
  anggotaForm: FormGroup;
  constructor(private anggotaService: AnggotaService, private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.idx = params['id'];

    });
    this.anggotaForm = new FormGroup({
      nama: new FormControl(null, [Validators.required, this.cekIsEmpty]),
      nomorKtp: new FormControl(null, [Validators.required]),
      alamat: new FormControl(null, [])
    });
  }



  ngOnInit() {
    if (this.idx) {
      this.anggotaService.getAnggota(this.idx).subscribe(data => {
        this.anggotaForm = new FormGroup({
          nomorKtp: new FormControl(data.nomorKtp, [Validators.required]),
          alamat: new FormControl(data.alamat, []),
          nama: new FormControl(data.nama, [Validators.required])
        });
      });
    }
  }

  onAnggotaEdit(ide: string) {
    this.idx = ide;
    this.ngOnInit();
  }

  kirim() {
    const anggotaModel = new AnggotaModel();

    anggotaModel.nama = this.anggotaForm.get('nama').value;
    anggotaModel.nomorKtp = this.anggotaForm.get('nomorKtp').value;
    anggotaModel.alamat = this.anggotaForm.get('alamat').value;
    console.log(anggotaModel);

    this.anggotaService.simpanKontak(anggotaModel).subscribe(data => {
      alert(data.nama + 'Berhasil Disimpan, dengan id' + data.id);
      this.parentTalk = data.id;
    });
  }



  cekIsEmpty(control: FormControl): { [s: string]: boolean } {
    if (control.value && control.value.trim().length === 0) {
      return { 'blank': true };
    }
    return null;
  }


}
