import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { CreateStudenInput } from './input/create-student-input';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Resolver(of => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(returns => StudentType)
  async student(@Args('id') id: string): Promise<StudentType> {
    return this.studentService.getStudent(id);
  }

  @Query(returns => [StudentType])
  async students(): Promise<Student[]> {
    return this.studentService.getStudents();
  }

  @Mutation(returns => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudenInpit: CreateStudenInput,
  ): Promise<Student> {
    return this.studentService.createStudent(createStudenInpit);
  }
}
