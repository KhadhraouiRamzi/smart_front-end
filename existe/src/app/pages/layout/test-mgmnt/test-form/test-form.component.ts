import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {
  radioGroupValue = 'This is value 2';
  form: FormGroup;
  form2: FormGroup;

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      role: []
    });

    this.form2 = this.fb.group({
      role: []
    });
  }

  handleClick(myRadio) {
    if(myRadio.value== "true")
    {
    (document.getElementById("ddlProject")as any).disabled   = false;
    }
    else
    {
    (document.getElementById("ddlProject") as any).disabled  = true;
    }
  }

  updateCheckBox(opts) {
    var chks = document.getElementsByName("offer");

    if (opts.value == "Del") {
        for (var i = 0; i <= chks.length - 1; i++) {
            (chks[i] as any).disabled  = false;
            document.getElementById("div").innerHTML = 'Checkboxes enabled';
        }
    }
    else {
        for (var i = 0; i <= chks.length - 1; i++) {
            (chks[i] as any).disabled  = true;
            (chks[i] as any).disabled  = false;
            document.getElementById("div").innerHTML = 'Checkboxes disabled and unchecked';
        }
    }
}

}
