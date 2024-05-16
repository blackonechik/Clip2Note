import ora from 'ora';
import { audioConventer } from "./modules/audioConventer";
import { textConventer } from "./modules/textConventer";
import { summaryConventer } from "./modules/summaryConventer";
import { fileConverter } from "./modules/fileConverter";

const videosDir = './src/videos';
const audiosDir = './src/audios';
const resultsDir = './src/result';

async function run() {
  const spinner = ora('Программа запущена')

  try {
    spinner.start('Преобразование видео-файлов в аудио-файлы');
    const audioNames: string[] = await audioConventer(videosDir, audiosDir);
    spinner.succeed('Преобразование видео-файлов в аудио-файлы завершено');

    for (const audioName of audioNames) {
      spinner.start(`Преобразование аудио ${audioName} в текст`);
      const text = await textConventer(audioName);
      spinner.succeed(`Аудио ${audioName} успешно преобразовано в текст`);

      spinner.start('Преобразование текста в конспект');
      const summary = await summaryConventer(text);
      spinner.succeed('Текст преобразован в конспект');

      spinner.start(`Сохранение конспекта в файл ${audioName}`);
      await fileConverter(audioName, summary, resultsDir);
      spinner.succeed(`Конспект сохранён ${audioName}`);
    }

    spinner.succeed('Все процессы завершены');
  } catch (error) {
    if (error instanceof Error) spinner.fail(`Ошибка: ${error.message}`);
  }
}

run();
