import { Component } from '@angular/core';
import { student } from '../student';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent {
  //aluno (S) = student (S) // curso (S) = course (S)
  students: student[] = [];
  studentFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.studentFormGroup = formBuilder.group({
      id:[''],
      name:[''],
      curso:['']
    });
  }

  save(){
    this.students.push(this.studentFormGroup.value);
  }
}
