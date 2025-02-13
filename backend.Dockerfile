FROM node:22-alpine
COPY ["./Server/package.json", "/usr/code/"]
EXPOSE 3002
WORKDIR /usr/code
RUN npm install