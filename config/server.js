module.exports = ({ env }) => ({
  // host: env('HOST', '0.0.0.0'),
  host: env('HOST', '194.163.164.186'),
  port: env.int('PORT', 1338),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'efad33b3693b7780daa7e6d3a9cc5d97'),
    },
  },
});
