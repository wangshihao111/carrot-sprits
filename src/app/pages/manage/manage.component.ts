import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ManageService } from 'src/app/services/manage.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.less']
})
export class ManageComponent implements OnInit {
  filterForm = this.fb.group({
    title: ''
  });

  constructor(public manageService: ManageService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.manageService.getSpritList();
  }
  handleChange() {
    console.log('change', this.filterForm.value)
  }
}
