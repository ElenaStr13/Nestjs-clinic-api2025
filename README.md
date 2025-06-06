# Nestjs-clinic-api2025
Цей проєкт є REST API для клініки, реалізований з використанням **NestJS**, **TypeORM**, **MySQL** та **Docker**.

## 📁 Структура проєкту

- `src/` — основний код NestJS застосунку
- `prisma/` — конфігурація бази даних (schema, seed)
- `postman/` — колекція запитів для Postman (див. нижче)
- `database.zip` — дамп бази даних для локального відновлення
- `.env.example` — приклад налаштувань середовища
##  Швидкий запуск через Docker

### 1. Клонувати репозиторій

```bash
git clone https://github.com/ElenaStr13/Nestjs-clinic-api2025.git
cd Nestjs-clinic-api2025

2. Створити .env файл
Файл .env в корені (або можна скопіювати з example.env):

DB_TYPE=mysql
DB_HOST=db
DB_PORT=3306
DB_USER=user
DB_PASS=user
DB_NAME=my-nestjs-test
JWT_SECRET=your_jwt_secret
PORT=3000

3. Запустити Docker в терміналі:
docker compose up --build

Після старту:
NestJS API доступний на http://localhost:3000
MySQL доступна на localhost:3307

Імпорт Бази Даних
SQL дамп: backend/my_nestjs_test_dump.zip
Треба разпакувати і додати у MySQL дамп перед використанням API:
unzip backend/my_nestjs_test_dump.zip

Імпортувати в Docker-контейнер (приклад):
docker cp my_nestjs_test_dump.sql mysql-db:/tmp/
docker exec -it mysql-db bash
mysql -u user -p my-nestjs-test < /tmp/my_nestjs_test_dump.sql

API Документація
Документація доступна після запуску:
Swagger: http://localhost:3000/api

Postman
Колекції запитів доступні у:
backend/src/postman/
Їх можна імпортувати в Postman для швидкого тестування API.

Автор
Elena Stratelyuk
