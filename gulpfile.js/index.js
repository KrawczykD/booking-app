/* eslint-disable @typescript-eslint/no-var-requires */
let boprTasks = require('./tasks/bopr');
let uploadTask = require('./tasks/cloudinary/upload');
let viewVersionTask = require('./tasks/cloudinary/view');
let deleteTask = require('./tasks/cloudinary/delete');
let versionUpdateTask = require('./tasks/versionUpdate');

exports.boprRelease = boprTasks.bopr;
exports.upload = uploadTask.upload;
exports.versionUpdate = versionUpdateTask.versionUpdate;
exports.getLatestVersion = viewVersionTask.getfiles;
exports.deleteVersion = deleteTask.delete;
