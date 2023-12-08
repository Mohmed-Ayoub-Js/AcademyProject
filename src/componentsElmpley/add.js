// في pages/index.js
import fs from 'fs-extra';
import path from 'path';

async function addData(newData) {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  data.push(newData);

  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}
