/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import authConfig from '../config/auth';

import User from '../models/User';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await getRepository(User).find({
    where: {
      email,
    },
  });

  // if (!user) {
  //   return res.status(401).json({ error: 'User not found' });
  // }

  if (user.length === 1) {
    if (await bcrypt.compare(password, user[0].password)) {
      const token = jwt.sign({ id: user[0].id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      });

      const data = {
        id: user[0].id,
        name: user[0].name,
        email: user[0].email,
        token,
      };

      return res.json(data);
    }
    return res.status(404).json({ message: 'Password does not match!' });
  }
  return res.status(404).json({ message: 'User not found!' });
};

export default login;
