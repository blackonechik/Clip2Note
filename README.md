# Clip2Notes

<img src="https://github.com/blackonechik/Clip2Note/blob/main/preview.gif?raw=true">

<br>

<p align="center">
    <img src="https://img.shields.io/badge/Version-1.0.0-blue" alt="Game Version">
    <img src="https://img.shields.io/badge/License-MIT-success" alt="License">
</p>

## Описание

Clip2Notes - это Node.JS приложение, которое преобразует видеофайлы в текстовые конспекты. Он использует несколько модулей для преобразования видео в аудио, аудио в текст, текст в конспект и, наконец, сохраняет конспект в файл.

## Установка

1. Скопируйте репозиторий:
```
git clone https://github.com/blackonechik/Clip2Note
```
2. Установите зависимости:
```
npm install
```
3. Создайте файл .env в корневом каталоге проекта и настройте его:
```
ffmpegPath="ПУТЬ_ДО_ФАЙЛА_FFMPEG"
ChatGPTAPI="КЛЮЧ_CHATGPT"
AssemblyAIAPI="КЛЮЧ_AssemblyAI"
```
Убедитесь, что путь к ffmpeg и API-ключи ChatGPT и AssemblyAI верны.

## Использование

Запустите приложение с помощью следующей команды:
```
npm start
```
Приложение начнет преобразовывать видеофайлы в указанном каталоге и сохранять конспекты в результаты.

## Модули

### audioConverter

Этот модуль преобразует видеофайлы в аудиофайлы с помощью ffmpeg.

### textConverter

Этот модуль преобразует аудиофайлы в текст с помощью API [AssemblyAI](https://www.assemblyai.com/).

### summaryConverter

Этот модуль преобразует текст в конспект с помощью API [ChatGPT](https://openai.com/chatgpt/).

### fileConverter

Этот модуль сохраняет конспект в файл в формате MarkDown.

### Лицензия
Это программное обеспечение выпускается под лицензией MIT. Смотрите файл LICENSE для получения дополнительной информации.

