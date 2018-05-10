# Первые шаги по освоению html
## Инструкция по запуску проекта
## Не советую его вообще запускать...
1. Скачиваем Vagrant и Virtualbox
1. Клонируем репозиторий в удобную папку с помощью команды:

        git clone git@github.com:Avsanka/better-than-best-repository.git
1. Переходим в папку 'cd better-than-best-repository'
1. Запускаем виртуальную машину
1. Заходим в командную строку проекта по SSH протоколу  
## Инструкция по базовой работе с git
1. 'git add' - добавляет файл в индекс
1. 'git commit' - делает коммит файлов в индексе
1. 'git push' - залить изменения
1. 'git pull' - принять изменения с удалённого репозитория
##Работа с html
###Подключение скриптов и стилей
 *Скрипты можно создать тегом `<script>`
 
         <script type="text/javascript">
        var j = 10;
        console.log(j);
        </script>
    <script src="index.js" type="text/javascript"></script>
   
 *Стили создаются с помощью тега `<style>`:
   
           <style>
           body{
               background-color: coral;
           }
       </style>
 ### Подключение файлов 
 *Чтобы подключить файл со скриптом необходимо прописать тег `<script>` с атрибутом `src`
   
           <script src="index.js" type="text/javascript"></script>
         
 *Для подключения файла со стилями прописываем тег `<link>` с атрибутом `rel="stylesheet"`           