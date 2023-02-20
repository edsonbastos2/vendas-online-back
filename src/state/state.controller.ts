import { Controller, Get } from '@nestjs/common';
import { StateService } from './state.service';

@Controller('state')
export class StateController {
  constructor(private stateService: StateService) {}

  @Get()
  async getAllState() {
    return this.stateService.getAllState();
  }
}
