import { INodeProperties } from 'n8n-workflow';

export const voiceFields: INodeProperties[] = [
	{
		displayName: 'Language',
		name: 'language',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['voice'],
				operation: ['filterByLanguage'],
			},
		},
		default: 'en-US',
		required: true,
		description: 'Language code to filter voices (e.g., en-US, es-ES, fr-FR)',
		placeholder: 'en-US',
	},
	{
		displayName: 'Gender',
		name: 'gender',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['voice'],
				operation: ['filterByGender'],
			},
		},
		options: [
			{
				name: 'Female',
				value: 'Female',
			},
			{
				name: 'Male',
				value: 'Male',
			},
		],
		default: 'Female',
		required: true,
		description: 'Gender to filter voices',
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['voice'],
			},
		},
		options: [
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 50,
				description: 'Max number of results to return',
				typeOptions: {
					minValue: 1,
				},
			},
		],
	},
];
