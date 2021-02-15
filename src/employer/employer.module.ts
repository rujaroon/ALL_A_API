import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { EmployerController } from './employer.controller';
import { EmployerService } from './employer.service';

@Module({
  imports : [UserModule],
  controllers: [EmployerController],
  providers: [EmployerService]
})
export class EmployerModule {}
