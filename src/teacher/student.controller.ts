import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents(){
    return "Get All Students THat Belong To A Student"
  }

  @Put('/:studentId')
  updateStudentTeacher(){
    return "Update Student Teacher"
  }

}
