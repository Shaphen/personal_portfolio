const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// Path to the file to update
const filePath = path.join(__dirname, './metadata.txt');

// Get current date and time
const now = new Date().toISOString();

// Write the current date/time to the file
fs.writeFileSync(filePath, `Last commit: ${now}\n`, 'utf8');

try {
  // Stage the file
  execSync('git add metadata.txt', { stdio: 'inherit' });

  // Commit the change
  execSync(`git commit -m "Metadata update: ${now}"`, { stdio: 'inherit' });

  // Push the commit
  execSync('git push', { stdio: 'inherit' });

  console.log('Metadata update pushed successfully.');
} catch (error) {
  if (error.message.includes('nothing to commit')) {
    console.log('No changes to commit.');
  } else {
    console.error('Error during git operations:', error.message);
    process.exit(1);
  }
}
