import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { HomeEntity } from '@database/entities/home.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HomeGuard implements CanActivate {
  constructor(
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
    const homeId = request.params.homeId;
    const home = await this.homeRepository.findOneBy({
      id: homeId,
      userId: userId,
    });

    if (!home) {
      return false;
    }
    request.home = home; // Attach the home entity to the request object

    return true; // Allow access if validation passes
  }
}
