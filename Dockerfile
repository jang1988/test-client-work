# Используем официальный образ Node.js
FROM node:14

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /usr/src/app

# Копируем файлы package.json и package-lock.json в контейнер
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все остальные файлы из текущей директории в контейнер
COPY . .

# Собираем React приложение
RUN npm run build

# Указываем команду для запуска приложения (в данном случае, это просто статический сервер)
CMD ["npx", "serve", "-s", "build"]

# Опционально, можно также указать порт, который будет использоваться приложением
EXPOSE 80