import { Component, OnInit } from '@angular/core';
import { student } from '../student';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent implements OnInit{
  //aluno (S) = student (S) // curso (S) = course (S)
  students: student[] = [];
  studentFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: StudentService
    ){
    this.studentFormGroup = formBuilder.group({
      id:[''],
      name:[''],
      curso:['']
    });
  }
  ngOnInit(): void {
    this.service.getStudents().subscribe({
      next: data => this.students = data
    });
  }

  save(){
    this.students.push(this.studentFormGroup.value);
  }
}
