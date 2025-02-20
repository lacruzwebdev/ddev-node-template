module.exports = {
  apps: [
    {
      name: "front",
      cwd: "/var/www/html/front",
      script:
        "npm run dev || (rm -rf node_modules && npm install && npm run dev)",
    },
  ],
};
