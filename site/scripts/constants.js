const path = require('path');

const SRC_DIR = path.join(__dirname, '../../src/components');
const SITE_MOBILE_SHARED_FILE = path.join(__dirname, '../configs/site-mobile-shared.js')
const DOCS_DIR = path.join(__dirname, '../../docs')


const SITE_DESKTOP_SHARED_FILE = path.join(__dirname, '../configs/site-desktop-shared.js')

module.exports = {
  SRC_DIR,
  DOCS_DIR,
  SITE_MOBILE_SHARED_FILE,
  SITE_DESKTOP_SHARED_FILE
}
