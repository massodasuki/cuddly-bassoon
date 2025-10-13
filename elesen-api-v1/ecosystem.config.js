module.exports = {
  apps: [
    {
      name: 'elesen-api-v1',
      script: 'dist/main.js',

      // 🧠 Performance settings
      instances: 1, // or 'max' if you want cluster mode
      exec_mode: 'fork', // use 'cluster' for multi-core scaling
      autorestart: true,
      max_memory_restart: '500M',

      // 👀 Watch mode for dev only
      watch: process.env.NODE_ENV !== 'production',
      watch_delay: 1000,
      watch_options: {
        usePolling: true, // safer for Docker or network FS
        ignored: ['node_modules', 'logs', '.git', 'ecosystem.config.js'],
      },

      // 📂 Log management
      error_file: './logs/error.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,

      // 🧰 Environment variables
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 8080,
        WATCH: false, // explicitly disable watch in prod
      },

      // 🚀 Graceful reload config
      kill_timeout: 5000,
      restart_delay: 2000,

      // 🔁 Auto-reload after git pull
      post_update: ['npm install', 'npm run build', 'pm2 reload all'],
    },
  ],
};
