module.exports = {
    apps: [
        {
            name: 'gopro-api-micrositio',
            script: 'RUTAPRIVADA/gopro/api/src/index.js',
            instances: 1,
            exec_mode: 'cluster',
            watch: true,
            env: {
                NODE_ENV: 'production',
                PORT: PUERTOPRIVADO,
                SERVICIO_MAILER_URL: "RUTAPRIVADA",
                GOPRO_EMAIL: "ramiro_salerno@solutionbox.com.ar"
            }
        },
        {
            name: 'gopro.landing',
            cwd: 'RUTAPRIVADA/gopro/landing/App',
            script: 'RUTAPRIVADA/gopro/landing/App/node_modules/next/dist/bin/next',
            args: 'start',
            instances: 1,
            autorestart: true,
            watch: false,
            exec_mode: 'cluster',
            env: {
              NODE_ENV: 'production',
            },
          },
    ]
}