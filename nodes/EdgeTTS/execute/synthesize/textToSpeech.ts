import { IExecuteFunctions, IDataObject, NodeOperationError } from 'n8n-workflow';
import { EdgeTTS } from '@andresaya/edge-tts';

export async function textToSpeech(this: IExecuteFunctions, itemIndex: number) {
	const inputText = this.getNodeParameter('inputText', itemIndex) as string;
	const inputType = this.getNodeParameter('inputType', itemIndex, 'auto') as string;
	const voice = this.getNodeParameter('voice', itemIndex, '') as string;
	const additionalOptions = this.getNodeParameter('additionalOptions', itemIndex, {}) as IDataObject;

	// Extraer opciones adicionales
	const pitch = (additionalOptions.pitch as string) || '0Hz';
	const rate = (additionalOptions.rate as string) || '0%';
	const volume = (additionalOptions.volume as string) || '0%';
	const includeAudioInfo = additionalOptions.includeAudioInfo as boolean;
	const includeMetadata = additionalOptions.includeMetadata as boolean;

	if (!inputText) {
		throw new NodeOperationError(this.getNode(), 'Input text is required');
	}

	// Voice is required only for non-SSML input
	if (inputType !== 'ssml' && !voice) {
		throw new NodeOperationError(this.getNode(), 'Voice is required for text input');
	}

	try {
		const startTime = Date.now();
		const tts = new EdgeTTS();

		// Configurar opciones de síntesis
		const synthesizeOptions: any = {
			pitch,
			rate,
			volume,
			inputType,
		};

		// Sintetizar el audio - esto ya procesa todo
		const synthesizeStart = Date.now();
		// For SSML, voice can be empty as it's specified in the SSML itself
		const voiceToUse = voice || 'en-US-AriaNeural';
		await tts.synthesize(inputText, voiceToUse, synthesizeOptions);
		const synthesizeTime = Date.now() - synthesizeStart;

		// Obtener directamente el base64 (ya está procesado)
		const conversionStart = Date.now();
		const audioBase64 = tts.toBase64();
		const conversionTime = Date.now() - conversionStart;

		// Preparar la respuesta base
		const response: IDataObject = {
			success: true,
			voice: voice || 'SSML',
			audio: audioBase64,
			performance: {
				synthesizeMs: synthesizeTime,
				conversionMs: conversionTime,
				totalMs: Date.now() - startTime,
			},
		};

		// Agregar información del audio si se solicita (sin procesamiento adicional)
		if (includeAudioInfo) {
			const audioInfo = tts.getAudioInfo();
			response.audioInfo = {
				size: audioInfo.size,
				duration: audioInfo.estimatedDuration,
				format: audioInfo.format,
			};
		}

		// Agregar metadata si se solicita
		if (includeMetadata) {
			try {
				const metadata = tts.getWordBoundaries();
				response.metadata = metadata;
			} catch (error) {
				// Metadata might not be available in all cases
				response.metadata = null;
			}
		}

		return response;
	} catch (error) {
		throw new NodeOperationError(
			this.getNode(),
			`Failed to synthesize speech: ${error.message}`,
		);
	}
}
