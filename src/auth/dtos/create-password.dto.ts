import { IsNotEmpty, IsString } from 'class-validator';
import { UserEntity } from 'src/users/user.entity';

export class CreatePasswordDto {
  @IsNotEmpty()
  @IsString()
  password!: string;

  @IsNotEmpty()
  user!: UserEntity;
}
