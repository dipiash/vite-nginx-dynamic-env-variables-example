# Vite, Nginx and environment variables for a static website at runtime

1. Create `.env` file
   ```sh
   cp .env.example .env
   ```
2. Install node_modules
   ```sh
   npm i
   ```
3. Build the Docker image
   ```sh
   docker build -t vite-nginx-dynamic-env-variables-example .
   ```
4. Run the image with environment variable `VITE_VERSION=FROM_NGINX`
   ```sh
   docker run -p 81:80 -e VITE_VERSION=FROM_NGINX vite-nginx-dynamic-env-variables-example
   ```
5. Open http://127.0.0.1:81 and see the result