import { INodeProperties } from 'n8n-workflow';

export const synthesizeOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['synthesize'],
			},
		},
		options: [
			{
				name: 'Text to Speech',
				value: 'textToSpeech',
				description: 'Convert text or SSML to speech audio',
				action: 'Convert text to speech',
			},
		],
		default: 'textToSpeech',
	},
];
