export class apiWrapper{
	static getData(connectionString){
	return fetch(connectionString, {method: 'GET'}).then(response => response.json());
	};
}