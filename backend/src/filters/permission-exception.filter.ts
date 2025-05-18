import { LoggerService } from '@modules/logger/logger.service';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  ForbiddenException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ErrorCodeConstant } from '@shared/constants';
import { BaseErrorDto } from '@shared/dtos/base-error.dto';
import { t } from '@shared/utils';
import type { Response } from 'express';

@Catch(ForbiddenException)
export class PermissionExceptionFilter
  implements ExceptionFilter<HttpException>
{
  /**
   * Logger
   * @param loggerService
   */
  constructor(private readonly loggerService: LoggerService) {}
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = HttpStatus.FORBIDDEN;
    const code = ErrorCodeConstant.forbidden;
    const message = t(`error.${code}`);
    const error: BaseErrorDto = {
      code,
      message,
    };

    exception.message = message;
    this.loggerService.logErrorDetail(
      exception,
      ErrorCodeConstant.unauthorized,
    );
    response.status(status).json(error);
  }
}
