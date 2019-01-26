import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnggotaModel } from './anggota.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class AnggotaService {
  constructor(private http: HttpClient) { }

  getListAnggota(): Observable<AnggotaModel[]> {
    return this.http.get<AnggotaModel[]>(environment.basePath + '/api/anggota/list');
  }

  simpanKontak(kontak: AnggotaModel): Observable<AnggotaModel> {
    return this.http.post<AnggotaModel>(environment.basePath + '/api/anggota/save', kontak);
  }

  getAnggota(id: string): Observable<AnggotaModel> {
    return this.http.get<AnggotaModel>(environment.basePath + '/api.anggota/' + id);
  }
}