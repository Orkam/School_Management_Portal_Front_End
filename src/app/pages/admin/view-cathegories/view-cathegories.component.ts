import { Component, OnInit } from '@angular/core';
import { CathegoryService } from 'src/app/services/cathegory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-cathegories',
  templateUrl: './view-cathegories.component.html',
  styleUrls: ['./view-cathegories.component.css'],
})
export class ViewCathegoriesComponent implements OnInit {
  cathegories: any = [];
  constructor(private cathegoryServices: CathegoryService) {}

  ngOnInit(): void {
    this.cathegoryServices.listarCathegories().subscribe(
      (data: any) => {
        this.cathegories = data;
      },
      (error) => {
        Swal.fire('Error !!', 'Error loading Cathegories', 'error');
      }
    );
  }
}
