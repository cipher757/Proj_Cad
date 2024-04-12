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
  isEditing: boolean = false;

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
    this.loadStudents
  }

  loadStudents(){
    this.service.getStudents().subscribe({
      next: data => this.students = data
    });
  }

  save() {
    if(this.isEditing){
       this.service.update(this.studentFormGroup.value).subscribe({
        next: () => {
        this.loadStudents();
        this.isEditing = false;
        this.studentFormGroup.reset();
        }
       })
    }
    else{

    }
    this.service.save(this.studentFormGroup.value).subscribe(
      {
        next: data => this.students.push(data)
      });
    }
    delete(student: student) {
    this.service.delete(student).subscribe({
      next: () => this.loadStudents()
    });
  }
  update(student: student) {
    this.isEditing = true;
    this.studentFormGroup.setValue(student);
  }
}

