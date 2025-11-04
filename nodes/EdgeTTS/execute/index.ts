import { textToSpeech } from './synthesize/textToSpeech';
import { listAll, filterByLanguage, filterByGender } from './voice/voiceOperations';

export const operationsFunctions: { [key: string]: { [key: string]: Function } } = {
	synthesize: {
		textToSpeech,
	},
	voice: {
		listAll,
		filterByLanguage,
		filterByGender,
	},
};
