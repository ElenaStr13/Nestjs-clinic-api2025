const fs = require('fs');
const archiver = require('archiver');

function zipFile(sourceFile, outPath) {
  const archive = archiver('zip', { zlib: { level: 9 }});
  const stream = fs.createWriteStream(outPath);

  return new Promise((resolve, reject) => {
    archive
      .file(sourceFile, { name: sourceFile.split('/').pop() })
      .on('error', err => reject(err))
      .pipe(stream);

    stream.on('close', () => resolve());
    archive.finalize();
  });
}

(async () => {
  try {
    await zipFile('my_nestjs_test_dump.sql', 'backend/my_nestjs_test_dump.zip');
    console.log('Zip archive created successfully');
  } catch (err) {
    console.error('Error while creating zip:', err);
  }
})();
