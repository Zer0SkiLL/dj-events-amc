module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '244a4bb7c3e4462d3ff51cf3cf44c9ea'),
  },
});
