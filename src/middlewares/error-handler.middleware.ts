import {inject, injectable, Next, Provider} from '@loopback/core';
import {
  asMiddleware,
  HttpErrors,
  LogError,
  Middleware,
  Response,
  MiddlewareContext,
  RestBindings,
  RestMiddlewareGroups,
} from '@loopback/rest';

@injectable(
  asMiddleware({
    group: 'validationError',
    upstreamGroups: RestMiddlewareGroups.SEND_RESPONSE,
    downstreamGroups: RestMiddlewareGroups.CORS,
  }),
)
export class ErrorHandlerMiddlewareProvider implements Provider<Middleware> {
  constructor(
    @inject(RestBindings.SequenceActions.LOG_ERROR)
    protected logError: LogError,
  ) {}

  async value() {
    const middleware: Middleware = async (
      ctx: MiddlewareContext,
      next: Next,
    ) => {
      const {request } = ctx;
      try {
        const res = await next();
        
        console.log(
          'Response received for %s %s',
          request.method,
          request.originalUrl,
        );
        return res;
      } catch (err) {
        // Any error handling goes here
        return this.handleError(ctx, err);
      }
    };
    return middleware;
  }

  handleError(context: MiddlewareContext, err: HttpErrors.HttpError): Response {
    this.logError(err, err.statusCode, context.request);
    throw err;
  }
}
