import { translate } from '@vitalets/google-translate-api';
// import { HttpProxyAgent } from 'http-proxy-agent';

export async function translateWord(str) {
    try {
        // const agent = new HttpProxyAgent('http://159.148.146.65');

        // const { text } = await translate(str, { to: 'uk', fetchOptions: { agent } });
        const { text } = await translate(str, { to: 'uk' });

        return text;
    } catch (e) {
      console.error(e);
    }
}
