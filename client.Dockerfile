FROM node:22-alpine
COPY ["./Client/package.json", "/usr/code"]
EXPOSE 3001
WORKDIR /usr/code
RUN npm install