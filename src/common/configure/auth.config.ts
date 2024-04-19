export const authConfig = () => ({
  secret: process.env.JWT_SECRET || 'dddd',
  signOptions: {
    expiresIn: '1d',
  },
});
