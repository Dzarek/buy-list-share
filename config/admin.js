module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '00bf4f61135cbdf68f6223c9ba12fcc0'),
  },
});
