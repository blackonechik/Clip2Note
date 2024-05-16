import { AssemblyAI } from "assemblyai";

const apiKey = process.env["AssemblyAIAPI"]!;

const client = new AssemblyAI({
    apiKey,
});

export async function textConventer(audioUrl: string): Promise<string> {
  const transcript= await client.transcripts.create({
    audio_url: `./${audioUrl}`,
    language_code: 'ru'
  });
  
  return transcript.text as string;
}

