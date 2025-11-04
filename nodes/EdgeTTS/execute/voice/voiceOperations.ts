import { IExecuteFunctions, IDataObject, NodeOperationError } from 'n8n-workflow';
import { EdgeTTS } from '@andresaya/edge-tts';

export async function listAll(this: IExecuteFunctions, itemIndex: number) {
	const options = this.getNodeParameter('options', itemIndex, {}) as IDataObject;
	const limit = options.limit as number;

	try {
		const tts = new EdgeTTS();
		let voices = await tts.getVoices();

		// Aplicar límite si se especifica
		if (limit && limit > 0) {
			voices = voices.slice(0, limit);
		}

		return voices.map((voice: any) => ({
			json: voice,
		}));
	} catch (error) {
		throw new NodeOperationError(
			this.getNode(),
			`Failed to get voices: ${error.message}`,
		);
	}
}

export async function filterByLanguage(this: IExecuteFunctions, itemIndex: number) {
	const language = this.getNodeParameter('language', itemIndex) as string;
	const options = this.getNodeParameter('options', itemIndex, {}) as IDataObject;
	const limit = options.limit as number;

	if (!language) {
		throw new NodeOperationError(this.getNode(), 'Language is required');
	}

	try {
		const tts = new EdgeTTS();
		let voices = await tts.getVoicesByLanguage(language);

		// Aplicar límite si se especifica
		if (limit && limit > 0) {
			voices = voices.slice(0, limit);
		}

		return voices.map((voice: any) => ({
			json: voice,
		}));
	} catch (error) {
		throw new NodeOperationError(
			this.getNode(),
			`Failed to get voices for language "${language}": ${error.message}`,
		);
	}
}

export async function filterByGender(this: IExecuteFunctions, itemIndex: number) {
	const gender = this.getNodeParameter('gender', itemIndex) as 'Female' | 'Male';
	const options = this.getNodeParameter('options', itemIndex, {}) as IDataObject;
	const limit = options.limit as number;

	if (!gender) {
		throw new NodeOperationError(this.getNode(), 'Gender is required');
	}

	try {
		const tts = new EdgeTTS();
		let voices = await tts.getVoicesByGender(gender);

		// Aplicar límite si se especifica
		if (limit && limit > 0) {
			voices = voices.slice(0, limit);
		}

		return voices.map((voice: any) => ({
			json: voice,
		}));
	} catch (error) {
		throw new NodeOperationError(
			this.getNode(),
			`Failed to get voices for gender "${gender}": ${error.message}`,
		);
	}
}
