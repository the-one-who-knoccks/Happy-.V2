/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import authConfig from '../config/auth';

// eslint-disable-next-line consistent-return
export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token is missing' });
  }

  const [, token] = authHeader.split(' ');

  try {
    await jwt.verify(token, authConfig.secret);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
