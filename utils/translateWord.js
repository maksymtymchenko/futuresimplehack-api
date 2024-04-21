import translate from 'google-translate-api-x';

export async function translateWord(str) {
    try {
        if (!str) throw new Error("Please provide word to translate");

        const { text } = await translate(str, {to: 'uk'});

        return text;
    } catch (e) {
      console.error(e);
    }
}
