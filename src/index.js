const fs = require('node:fs');
const PATH_DB = 'db.json';

async function readContacts() {
  const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });

  console.log(data);
}

readContacts();
