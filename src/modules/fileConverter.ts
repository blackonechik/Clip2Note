/* eslint-disable no-useless-escape */
import path from 'path';
import fs from 'fs';

export async function fileConverter(fileName: string, text: string, resultsDir: string): Promise<void> {
  const mdFileName = `${removeInvalidChars(removePathAndExtension(fileName))}.md`; // Удаляем недопустимые символы из имени файла
  const filePath = "./src/" + path.join("result", mdFileName);

  if (!fs.existsSync(resultsDir)) {
    fs.mkdirSync(resultsDir);
  }

  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, text, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function removePathAndExtension(filePath: string): string {
  const fileName = path.basename(filePath); // Получаем только имя файла из пути
  const nameWithoutExtension = fileName.split('.').slice(0, -1).join('.'); // Удаляем расширение файла
  return nameWithoutExtension;
}

function removeInvalidChars(fileName: string): string {
  return fileName.replace(/[\[\]]/g, ''); // Удаляем недопустимые символы из имени файла
}
