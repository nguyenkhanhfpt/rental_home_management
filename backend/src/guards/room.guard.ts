import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoomEntity } from '@database/entities/room.entity';
import { HomeEntity } from '@database/entities/home.entity';

@Injectable()
export class RoomGuard implements CanActivate {
  constructor(
    @InjectRepository(RoomEntity)
    private readonly roomRepository: Repository<RoomEntity>,
    @InjectRepository(HomeEntity)
    private readonly homeRepository: Repository<HomeEntity>,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.validateRequest(request);
  }

  /**
   * Validate the request
   * @param request
   */
  async validateRequest(request: any): Promise<boolean> {
    const userId = request.user.id;
    const roomId = request.params.roomId;
    const room = await this.roomRepository.findOneBy({
      id: roomId,
    });

    if (!room) {
      return false;
    }

    const home = await this.homeRepository.findOneBy({
      id: room.homeId,
      userId: userId,
    });

    if (!home) {
      return false;
    }

    request.room = room;
    request.home = home;

    return true;
  }
}
