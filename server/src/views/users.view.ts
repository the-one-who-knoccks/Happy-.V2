/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import User from '../models/User';

export default {
  render(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      whatsapp: user.whatsapp,
    };
  },

  renderMany(users: User[]) {
    return users.map(user => this.render(user));
  },
};
