import { INodeProperties } from 'n8n-workflow';

export const voiceOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['voice'],
			},
		},
		options: [
			{
				name: 'List All',
				value: 'listAll',
				description: 'Get all available voices',
				action: 'List all voices',
			},
			{
				name: 'Filter by Language',
				value: 'filterByLanguage',
				description: 'Get voices for a specific language',
				action: 'Filter voices by language',
			},
			{
				name: 'Filter by Gender',
				value: 'filterByGender',
				description: 'Get voices by gender',
				action: 'Filter voices by gender',
			},
		],
		default: 'listAll',
	},
];
