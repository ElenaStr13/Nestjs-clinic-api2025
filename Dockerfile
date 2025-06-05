FROM node:20-alpine

RUN mkdir /app
WORKDIR /app

# Копіюємо весь код проєкту
COPY backend/package.json ./

# Встановлюємо залежності
RUN npm install

COPY backend .

# Запускаємо додаток
CMD ["npm", "run", "start:dev"]
