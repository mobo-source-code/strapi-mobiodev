module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5d1ca70143f8cf3e1bcc184451e16ec6'),
  },
});
