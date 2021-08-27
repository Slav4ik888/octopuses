import NotAutorized from '../errors/not-authorized.js';

export function mustBeAuthenticated(ctx, next) {

  if (!ctx.user) {
    throw new NotAutorized(`Пользователь не залогинен`);
  }

  return next();
};