import { LoggerService } from '@modules/logger/logger.service';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ErrorCodeConstant } from '@shared/constants';
import { BaseErrorDto } from '@shared/dtos/base-error.dto';
import type { Response } from 'express';
import { I18nContext } from 'nestjs-i18n';

@Catch()
export class InternalServerExceptionFilter implements ExceptionFilter {
  /**
   * Logger
   * @param loggerService
   */
  constructor(private readonly loggerService: LoggerService) {}
  /**
   * Implement internal server error
   *
   * @param {HttpException} exception
   * @param {ArgumentsHost} host
   */
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = HttpStatus.INTERNAL_SERVER_ERROR;
    const code = ErrorCodeConstant.internalServerError;
    const error: BaseErrorDto = {
      code,
      message: I18nContext.current().t(`error.${code}`),
    };
    console.log(exception);

    this.loggerService.logErrorDetail(
      exception,
      ErrorCodeConstant.internalServerError,
    );
    response.status(status).json(error);
  }
}
