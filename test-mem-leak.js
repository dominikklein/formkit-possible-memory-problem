function url() {
  return 'http://localhost:5173/';
}

async function action(page) {
  await page.click('[id="about"]');
}

async function back(page) {
  await page.click('[id="home"]');
}

module.exports = { action, back, url };
