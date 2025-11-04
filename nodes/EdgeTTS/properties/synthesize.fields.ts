import { INodeProperties } from 'n8n-workflow';

export const synthesizeFields: INodeProperties[] = [
	{
		displayName: 'Input Text',
		name: 'inputText',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		displayOptions: {
			show: {
				resource: ['synthesize'],
				operation: ['textToSpeech'],
			},
		},
		default: '',
		required: true,
		description: 'The text or SSML to convert to speech',
		placeholder: 'Hello, world!',
	},
	{
		displayName: 'Input Type',
		name: 'inputType',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['synthesize'],
				operation: ['textToSpeech'],
			},
		},
		options: [
			{
				name: 'Auto Detect',
				value: 'auto',
				description: 'Automatically detect if input is SSML or plain text',
			},
			{
				name: 'Plain Text',
				value: 'text',
				description: 'Input is plain text',
			},
			{
				name: 'SSML',
				value: 'ssml',
				description: 'Input is SSML (Speech Synthesis Markup Language)',
			},
		],
		default: 'auto',
		description: 'Type of input text',
	},
	{
		displayName: 'Voice',
		name: 'voice',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['synthesize'],
				operation: ['textToSpeech'],
			},
		},
		default: 'en-US-AriaNeural',
		required: true,
		description: 'Voice to use for synthesis (e.g., en-US-AriaNeural, es-ES-ElviraNeural)',
		placeholder: 'en-US-AriaNeural',
	},
	{
		displayName: 'Additional Options',
		name: 'additionalOptions',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['synthesize'],
				operation: ['textToSpeech'],
			},
		},
		options: [
			{
				displayName: 'Include Audio Info',
				name: 'includeAudioInfo',
				type: 'boolean',
				default: false,
				description: 'Whether to include audio information (size, duration, format) in the output',
			},
			{
				displayName: 'Include Metadata',
				name: 'includeMetadata',
				type: 'boolean',
				default: false,
				description: 'Whether to include word boundaries metadata with timestamps',
			},
			{
				displayName: 'Pitch',
				name: 'pitch',
				type: 'string',
				default: '0Hz',
				description: 'Voice pitch adjustment. Range: -100Hz to +100Hz. Examples: "+10Hz", "-20Hz", "0Hz"',
				placeholder: '+10Hz',
			},
			{
				displayName: 'Rate',
				name: 'rate',
				type: 'string',
				default: '0%',
				description: 'Speech rate adjustment. Range: -100% to +200%. Examples: "+50%", "-10%", "0%"',
				placeholder: '+0%',
			},
			{
				displayName: 'Volume',
				name: 'volume',
				type: 'string',
				default: '0%',
				description: 'Volume adjustment. Range: -100% to +100%. Examples: "+90%", "-10%", "0%"',
				placeholder: '+0%',
			},
		],
	},
];
