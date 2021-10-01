import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";

@Controller('students')
export class StudentController {
  @Get()
  getStudents(): string {
    return 'All Students';
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string) {
    return `Get Student With Id Of:====>${studentId}`;
  }

  @Post()
  createStudent(@Body() body) {
    console.log("body", body)
    return `Creat the student with::${JSON.stringify(body)}`;
  }

  @Put('/:studentId')
  updateStudent(@Param('studentId') studentId: string, @Body() body) {
    return 'Give ID in Put';
  }
}
