module.exports = {
  apps: [
    {
      name: 'elesen-api-v1',
      script: 'dist/main.js',
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
//pm2 start ecosystem.config.js --env production
