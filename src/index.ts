import 'reflect-metadata';
import { AppDataSource } from './data-source';
import app from './app';


AppDataSource.initialize().then(() => {

	const PORT = process.env.PORT;
	app.listen(PORT || 3333, () => {
		console.log('Server is running...');
	});

}).catch((err) => {

	console.log(`Aconteceu um erro: ${err}`);

});