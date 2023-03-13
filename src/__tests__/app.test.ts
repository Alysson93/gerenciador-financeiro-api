import 'reflect-metadata';
import request from 'supertest';
import { AppDataSource } from '../data-source';
import app from '../app';

beforeEach(async () => {
	return await AppDataSource.initialize();
});

afterEach(async () => {
	return await AppDataSource.destroy();
});

it('Deve responder na raiz.', async () => {

	const result = await request(app).get('/');
	expect(result.status).toBe(200);

});