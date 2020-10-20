/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import * as Yup from 'yup';
import PasswordHash from '../config/PasswordHash';

import User from '../models/User';

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
