/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import * as Yup from 'yup';
import authConfig from '../config/auth';

import PasswordHash from '../config/PasswordHash';

import User from '../models/User';

// eslint-disable-next-line consistent-return
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await getRepository(User).find({
    where: {
      email,
    },
  });

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
    return res.status(404).json({ message: 'User not found!' });
  }
};

export default {
  async create(req: Request, res: Response) {
    const { name, email, password, whatsapp } = req.body;

    const hashedPassword: string = await PasswordHash.hash(password);

    const usersRepository = getRepository(User);

    const data = {
      name,
      email,
      password: hashedPassword,
      whatsapp,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required().min(6),
      whatsapp: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const user = usersRepository.create(data);

    await usersRepository.save(user);

    return res.json(user);
  },
};
