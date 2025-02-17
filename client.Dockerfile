FROM node:22-alpine
EXPOSE 5173
WORKDIR /usr/code
COPY ["./Client/package.json", "/usr/code"]
RUN npm install