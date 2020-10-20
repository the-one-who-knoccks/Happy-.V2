/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import * as Yup from 'yup';
import User from '../models/User';

export default {
  async create(req: Request, res: Response) {
    const { name, email, password, whatsapp } = req.body;

    const usersRepository = getRepository(User);

    const data = {
      name,
      email,
      password,
      whatsapp,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required().min(6),
      whatsapp: Yup.string().required().max(11),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const user = usersRepository.create(data);

    await usersRepository.save(user);

    return res.json(user);
  },
};
