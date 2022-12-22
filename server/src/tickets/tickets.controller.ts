import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/strategy/jwt-auth.guard';
import { TicketsService } from './tickets.service';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/my')
  async getTicketsByProfile(@Req() req) {
    const { userId } = req.user;
    return this.ticketsService.findTicketsByProfile(userId);
  }
}
