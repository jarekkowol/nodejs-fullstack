import {Component, OnInit} from '@angular/core';
import {Job} from './models/job';
import {JobService} from './services/job.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    title = 'frontend';
    jobs: Job[] = [];

    constructor(private jobService: JobService) {

    }

    ngOnInit() {
        this.getJobs();
    }

    getJobs(): void {
        this.jobService.getJobs()
            .subscribe(result => {
                this.jobs = result;
                console.log('jobs ' + JSON.stringify(result));
            });
    }
}
