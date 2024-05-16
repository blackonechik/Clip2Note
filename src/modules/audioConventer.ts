import fs from "fs";
import path from "path";
import ffmpeg from "fluent-ffmpeg";

import 'dotenv/config'

ffmpeg.setFfmpegPath(process.env["ffmpegPath"]!);

export async function audioConventer(videosDir: string, audiosDir: string): Promise<string[]> {
    const result: string[] = [];

    if (!fs.existsSync(audiosDir)) {
        fs.mkdirSync(audiosDir);
    }

    const promises = new Promise<string[]>((resolve, reject) => {
        fs.readdir(videosDir, (err, files) => {
            if (err) {
                return reject(`Ошибка чтения директории: ${err}`);
            }

            const filePromises = files.map(file => {
                if (file.endsWith('.mp4') || file.endsWith('.avi') || file.endsWith('.mov')) {
                    const inputPath = path.join(videosDir, file);
                    const outputPath = path.join(audiosDir, `${path.basename(file, path.extname(file))}.mp3`);

                    return new Promise((resolve, reject) => {
                        ffmpeg(inputPath)
                            .outputOptions('-vn', '-ab', '128k', '-ar', '44100')
                            .toFormat('mp3')
                            .save(outputPath)
                            .on('error', (err) => reject(`Error converting file: ${err}`))
                            .on('end', () => {
                                result.push(outputPath);
                                resolve(result);
                            });
                    });
                }
                return Promise.resolve();
            });

            Promise.all(filePromises).then(() => resolve(result));
        });
    });

    const convertedAudios: string[] = await promises;

    if (convertedAudios.length === 0) throw new Error(`В этой директории нет видеофайлов: ${videosDir}`);

    return convertedAudios;
}
