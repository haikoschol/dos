// SPDX-FileCopyrightText: 2023 HH Partners
//
// SPDX-License-Identifier: MIT

import { makeApi, makeErrors } from '@zodios/core';
import * as schemas from './schemas/api_schemas';

const errors = makeErrors([
	{
		status: 500,
		description: 'Internal server error',
		schema: schemas.ErrorSchema
	},
	{
		status: 400,
		description: 'Bad request',
		schema: schemas.ErrorSchema
	},
	{
		status: 403,
		description: 'Token is invalid',
		schema: schemas.ErrorSchema
	},
	{
		status: 401,
		description: 'No token provided',
		schema: schemas.ErrorSchema
	}
]);

export const dosApi = makeApi([
	{
		method: 'post',
		path: '/scan-results',
		description: 'Get scan results for specified purl',
		parameters: [
			{
				name: 'body',
				type: 'Body',
				schema: schemas.PostScanResultsReq
			}
		],
		response: schemas.PostScanResultsRes,
		errors
	},
	{
		method: 'delete',
		path: '/scan-results',
		description: 'Delete scan results for specified purl',
		parameters: [
			{
				name: 'body',
				type: 'Body',
				schema: schemas.DeleteScanResultsReq
			}
		],
		response: schemas.DeleteScanResultsRes,
		errors
	},
	{
		method: 'post',
		path: '/upload-url',
		description: 'Get presigned upload URL for S3 object storage with specified object key',
		parameters: [
			{
				name: 'body',
				type: 'Body',
				schema: schemas.PostUploadUrlReq
			}
		],
		response: schemas.PostUploadUrlRes,
		errors
	},
	{
		method: 'post',
		path: '/package',
		description: 'Add package for processing, with specified purl and S3 URL',
		parameters: [
			{
				name: 'body',
				type: 'Body',
				schema: schemas.PostPackageReq
			}
		],
		response: schemas.PostPackageRes,
		errors
	},
	{
		method: 'post',
		path: '/job',
		description: 'Add scanner job for package',
		parameters: [
			{
				name: 'body',
				type: 'Body',
				schema: schemas.PostJobReq
			}
		],
		response: schemas.PostJobRes,
		errors
	},
	{
		method: 'get',
		path: '/job-state/:id',
		description: 'Get state for scanner job with given id',
		parameters: [
			{
				name: 'id',
				type: 'Path',
				schema: schemas.GetJobStateReq
			}
		],
		response: schemas.GetJobStateRes,
		errors
	},
	{
		method: 'put',
		path: '/job-state/:id',
		description: 'Edit scanner job state',
		parameters: [
			{
				name: 'id',
				type: 'Path',
				schema: schemas.PutJobStateReqPathParams
			},
			{
				name: 'body',
				type: 'Body',
				schema: schemas.PutJobStateReq
			}
		],
		response: schemas.PutJobStateRes,
		errors
	},
	{
		method: 'post',
		path: '/job-results',
		description: 'Save scanner job results',
		parameters: [
			{
				name: 'body',
				type: 'Body',
				schema: schemas.PostJobResultsReq
			}
		],
		response: schemas.PostJobResultsRes,
		errors
	}
]);