import bcrypt from 'bcrypt';

export default class PasswordHash {
  public static hash = (password: string): Promise<string> => {
    return bcrypt.hash(password, 10);
  };
}
