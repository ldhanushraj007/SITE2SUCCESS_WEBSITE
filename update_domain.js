const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'website', 'website');
const sitemapPath = path.join(directoryPath, 'sitemap.xml');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    if (content.includes('site2success.online')) {
        content = content.replace(/site2success\.online/g, 'site2success.in');
        changed = true;
    }
    if (content.includes('http://site2success.in')) {
        content = content.replace(/http:\/\/site2success\.in/g, 'https://site2success.in');
        changed = true;
    }
    if (content.includes('http://www.site2success.in')) {
        content = content.replace(/http:\/\/www\.site2success\.in/g, 'https://site2success.in');
        changed = true;
    }
    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated domain in ${filePath}`);
    }
}

function updateDomain(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            updateDomain(filePath);
        } else if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.xml') || file.endsWith('.json') || file.endsWith('.txt')) {
            replaceInFile(filePath);
        }
    });
}

// Update sitemap.xml explicitly if it's there
if (fs.existsSync(sitemapPath)) {
    replaceInFile(sitemapPath);
}

// Update everything else
updateDomain(directoryPath);

console.log('Done replacing domain with site2success.in!');
