import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports : [UserModule],
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentModule {}
