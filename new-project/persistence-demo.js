import { readFile, writeFile } from 'node:fs/promises';

const filePath = './demo-data.json';

const exampleData = [
  { id: 101, name: 'Alpha', active: true },
  { id: 102, name: 'Beta', active: false },
];

// Save data to file
async function saveData(data) {
  await writeFile(filePath, JSON.stringify(data, null, 2));
  console.log('Data saved to', filePath);
}

// Load data from file
async function loadData() {
  try {
    const content = await readFile(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('No data file found. Returning empty list.');
      return [];
    } else {
      throw err;
    }
  }
}

async function runDemo() {
  console.log('\nLoading existing data...');
  const oldData = await loadData();
  console.log('Existing data:', oldData);

  console.log('\nSaving new data...');
  await saveData(exampleData);

  console.log('\nReloading to confirm...');
  const newData = await loadData();
  console.log('Reloaded data:', newData);
}

runDemo();
