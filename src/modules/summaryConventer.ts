import { ChatGPTAPI } from 'chatgpt'
import 'dotenv/config'

const apiKey = process.env["ChatGPTAPI"]!;

export async function summaryConventer(text: string): Promise<string> {
    const api = new ChatGPTAPI({
        apiKey,
        completionParams: {
            model: 'gpt-3.5-turbo-0125',
            temperature: 0.5,
            top_p: 0.8
        }
    })

    const res = await api.sendMessage('Ты должен очень подробно преобразовывать текст из лекции, дополнять его по необходимости примерами кода и предоставлять результат в формате MarkDown. Не забывай оставлять термины и объяснения к ним. В конце ты должен приложить ссылки на статью или на несколько статей на тему, которая обсуждалась в этой лекции. Итогововый текст должен быть на русском языке. Текст: ' + text)
    return res.text
}