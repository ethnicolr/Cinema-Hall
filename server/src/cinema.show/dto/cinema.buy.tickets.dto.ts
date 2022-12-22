class BuyTicketDto {
  cinemaShowId: number;
  tickets: TicketDto[];
  userId: number;
}

interface TicketDto {
  row: number;
  chair: number;
}

export { BuyTicketDto, TicketDto };
