import { INodeProperties } from 'n8n-workflow';
import { voiceOperations } from './voice.operations';
import { voiceFields } from './voice.fields';
import { synthesizeOperations } from './synthesize.operations';
import { synthesizeFields } from './synthesize.fields';

export const edgeTTSNodeProperties: INodeProperties[] = [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'Synthesize',
				value: 'synthesize',
				description: 'Convert text to speech',
			},
			{
				name: 'Voice',
				value: 'voice',
				description: 'Manage and explore available voices',
			},
		],
		default: 'synthesize',
	},

	// Synthesize Operations & Fields
	...synthesizeOperations,
	...synthesizeFields,

	// Voice Operations & Fields
	...voiceOperations,
	...voiceFields,
];
