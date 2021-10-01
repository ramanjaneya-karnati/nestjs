import { Controller, Get, Put } from "@nestjs/common";

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers(): string {
    return 'All Teachers';
  }

  @Get('/:teacherId')
  getTeacherById() {
    return `Give Teachers Id`;
  }
}
