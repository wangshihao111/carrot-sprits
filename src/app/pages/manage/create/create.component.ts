import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface FormValue {
  title: string;
  content: string;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class CreateComponent implements OnInit {
  form: FormValue = {title: 'title', content: 'test'}
  isDetail: boolean

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(v => {
      console.log(v.get('type'))
      this.isDetail = v.get('type') === 'detail'
    })
    //TODO: FETCH CONTENT
  }

  handleTitleChange(v) {
    this.form.title = v;
    console.log(v)
  }

  handleRichChange(event) {
    this.form.content = event.html;
  }

  handleSubmit() {
    // TODO: SUBMIT
    console.log(this.form)
  }
}
