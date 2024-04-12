import { Component, OnInit } from '@angular/core';
import { student } from '../student';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {
  //aluno (S) = student (S) // curso (S) = course (S)
  students: student[] = [];
  studentFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: StudentService
  ) {
    this.studentFormGroup = formBuilder.group({
      id: [''],
      name: [''],
      curso: ['']
    });
  }
  ngOnInit(): void {
    this.service.getStudents().subscribe({
      next: data => this.students = data
    });
  }

  save() {
    this.service.save(this.studentFormGroup.value).subscribe(
      {
        next: data => this.students.push(data)
      }

    )
  }
}

