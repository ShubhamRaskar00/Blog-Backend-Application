const config = {
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiration: "10h",
  mongoUri: process.env.MONGODB_URI,
  nodeEnv: process.env.NODE_ENV,
  email: process.env.EMAIL,
  smptService: process.env.SMPT_SERVICE,
  smptHost: process.env.SMPT_HOST,
  smptPort: process.env.SMPT_PORT,
  smptPassword: process.env.SMPT_PASSWORD,
  smptMail: process.env.SMPT_MAIL,
  smptSecure: process.env.SMTP_SECURE
};

module.exports = config