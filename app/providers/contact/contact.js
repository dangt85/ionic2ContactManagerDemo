import * as force from 'forcejs';

export let findAll = () => {
	var records = force.query(
        `SELECT Id, Name, Title, Phone, MobilePhone, Email
        FROM Contact LIMIT 20`);
	console.log('service records queried:', records);
	return records;
}
	
	