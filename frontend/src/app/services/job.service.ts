import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Job} from '../models/job';

@Injectable({
    providedIn: 'root'
})
export class JobService {

    constructor(protected http: HttpClient) {
    }

    getJobs(): Observable<Job[]> {
        return this.http.get<Job[]>('http://localhost:3000/job');
    }
}
