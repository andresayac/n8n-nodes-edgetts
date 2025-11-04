import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeApiError,
	NodeOperationError,
} from 'n8n-workflow';
import { edgeTTSNodeProperties } from './properties';
import { operationsFunctions } from './execute';

export class EdgeTts implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Edge TTS',
		name: 'edgeTts',
		icon: 'file:edgetts.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Text-to-Speech using Microsoft Edge capabilities',
		defaults: {
			name: 'Edge TTS',
		},
		// @ts-ignore
		inputs: ['main'],
		// @ts-ignore
		outputs: ['main'],
		properties: edgeTTSNodeProperties,
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		try {
			// Busca la función para el recurso y operación seleccionados
			const fn = operationsFunctions[resource]?.[operation];

			// Si no encontrar la función, retorna un error
			if (!fn) {
				throw new NodeOperationError(
					this.getNode(),
					`The operation "${operation}" is not supported for resource "${resource}"`,
				);
			}

			// Ejecuta la función para cada item
			for (let i = 0; i < items.length; i++) {
				try {
					const responseData = await fn.call(this, i);
					
					if (Array.isArray(responseData)) {
						returnData.push(...responseData);
					} else {
						returnData.push({ json: responseData });
					}
				} catch (error) {
					if (this.continueOnFail()) {
						returnData.push({
							json: {
								error: error.message,
							},
							pairedItem: { item: i },
						});
						continue;
					}
					throw error;
				}
			}

			return [returnData];
		} catch (error) {
			throw new NodeApiError(this.getNode(), error);
		}
	}
}
