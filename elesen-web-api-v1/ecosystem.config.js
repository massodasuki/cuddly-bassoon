module.exports = {
  apps: [
    {
      name: 'elesen-web-api-v1',
      script: 'dist/main.js',
      instances: 1,
      autorestart: true,

      // Enable watch for changes
      watch: ['dist'],
      ignore_watch: ['node_modules', 'logs'],

      // Optional: slight delay to avoid multiple restarts during git pull
      watch_delay: 1000,

      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
        // Optional: disable watch in production if you prefer manual reload
        WATCH: true,
      },
    },
  ],
};
