import { Logger } from '@nestjs/common';
import { Logger as TypeOrmLogger, QueryRunner } from 'typeorm';
import { LoggerOptions as TypeOrmLoggerOptions } from 'typeorm/logger/LoggerOptions';

export class TypeOrmLoggerContainer implements TypeOrmLogger {
  constructor(
    private readonly _logger: Logger,
    private readonly _options: TypeOrmLoggerOptions,
  ) {}

  static ForConnection(connectionName: string, options: TypeOrmLoggerOptions) {
    const logger = new Logger();
    logger.log(`TypeORM[${connectionName}]`, 'TypeOrm');

    return new TypeOrmLoggerContainer(logger, options);
  }

  /**
   * Logs query and parameters used in it.
   */
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner) {
    if (
      this._options === 'all' ||
      this._options === true ||
      (this._options instanceof Array && this._options.indexOf('query') !== -1)
    ) {
      const sql =
        query +
        (parameters && parameters.length
          ? ' -- PARAMETERS: ' + this.stringifyParams(parameters)
          : '');

      this._logger.log('query' + ': ' + sql.replaceAll('\"', '`'), 'QUERY');
    }
  }

  /**
   * Logs query that is failed.
   */
  logQueryError(error: string, query: string, parameters?: any[]) {
    if (
      this._options === 'all' ||
      this._options === true ||
      (this._options instanceof Array && this._options.indexOf('error') !== -1)
    ) {
      const sql =
        query +
        (parameters && parameters.length
          ? ' -- PARAMETERS: ' + this.stringifyParams(parameters)
          : '');
      this._logger.error(
        'query failed: ' + sql.replaceAll('\"', '`'),
        'QUERY ERROR',
      );
      this._logger.error('error:', error);
    }
  }

  /**
   * Logs query that is slow.
   */
  logQuerySlow(time: number, query: string, parameters?: any[]) {
    const sql =
      query +
      (parameters && parameters.length
        ? ' -- PARAMETERS: ' + this.stringifyParams(parameters)
        : '');
    this._logger.warn(
      'query is slow: ' + sql.replaceAll('\"', '`'),
      'QUERY SLOW',
    );
    this._logger.warn('execution time: ' + time);
  }

  /**
   * Logs events from the schema build process.
   */
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  logSchemaBuild(message: string, queryRunner?: QueryRunner) {
    if (
      this._options === 'all' ||
      (this._options instanceof Array && this._options.indexOf('schema') !== -1)
    ) {
      this._logger.log(message, 'SCHEMA BUILD');
    }
  }

  /**
   * Logs events from the migrations run process.
   */
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  logMigration(message: string, queryRunner?: QueryRunner) {
    this._logger.log(message, 'MIGRATION');
  }

  /**
   * Perform logging using given logger, or by default to the this._logger.
   * Log has its own level and message.
   */
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  log(level: 'log' | 'info' | 'warn', message: any, queryRunner?: QueryRunner) {
    switch (level) {
      case 'log':
        if (
          this._options === 'all' ||
          (this._options instanceof Array &&
            this._options.indexOf('log') !== -1)
        )
          this._logger.log(message);
        break;
      case 'info':
        if (
          this._options === 'all' ||
          (this._options instanceof Array &&
            this._options.indexOf('info') !== -1)
        )
          this._logger.debug(message);
        break;
      case 'warn':
        if (
          this._options === 'all' ||
          (this._options instanceof Array &&
            this._options.indexOf('warn') !== -1)
        )
          this._logger.warn(message);
        break;
    }
  }

  protected stringifyParams(parameters: any[]) {
    try {
      return JSON.stringify(parameters);
    } catch {
      return parameters;
    }
  }
}
