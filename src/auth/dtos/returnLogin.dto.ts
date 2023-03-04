/* eslint-disable prettier/prettier */
import { ReturnUSerDto } from 'src/user/dtos/returnUser.dto';

export class ReturnLoginDto {
  user: ReturnUSerDto;
  accessToken: string;
}
