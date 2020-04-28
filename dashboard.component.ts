/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { proceduresService } from '../../services/procedures/procedures.service';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
    selector: 'bh-dashboard',
    templateUrl: './dashboard.template.html'
})

export class dashboardComponent implements OnInit {
    displayedColumns: string[] = ['Procedurename', 'Men'];
    dataSource;

    constructor(private service: proceduresService) {

    }

    ngOnInit() {
        console.log(this.service.procedureDetails);
        this.dataSource = new MatTableDataSource(this.service.procedureDetails);
    }






}
