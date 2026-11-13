const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'website', 'website');

const faviconTags = `    <!-- Favicon & Search Engine Icons (Google Favicon 48px+ multiple) -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">`;

function fixFavicons(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            fixFavicons(filePath);
        } else if (file.endsWith('.html')) {
            let content = fs.readFileSync(filePath, 'utf8');
            
            // Remove existing icon and manifest tags
            content = content.replace(/[ \t]*<link rel="icon"[^>]*>\r?\n?/g, '');
            content = content.replace(/[ \t]*<link rel="apple-touch-icon"[^>]*>\r?\n?/g, '');
            content = content.replace(/[ \t]*<link rel="shortcut icon"[^>]*>\r?\n?/g, '');
            content = content.replace(/[ \t]*<link rel="manifest"[^>]*>\r?\n?/g, '');
            content = content.replace(/<!-- Favicon[^>]*-->\r?\n?/g, '');
            
            // Insert new tags right before </head>
            if (content.includes('</head>')) {
                content = content.replace('</head>', `${faviconTags}\n</head>`);
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Fixed favicons in ${filePath}`);
            }
        } else if (file === 'generate-services.js') {
            let content = fs.readFileSync(filePath, 'utf8');
            
            content = content.replace(/[ \t]*<link rel="icon"[^>]*>\r?\n?/g, '');
            content = content.replace(/[ \t]*<link rel="apple-touch-icon"[^>]*>\r?\n?/g, '');
            content = content.replace(/[ \t]*<link rel="manifest"[^>]*>\r?\n?/g, '');
            
            if (content.includes('<!-- Open Graph')) {
                content = content.replace('<!-- Open Graph', `${faviconTags}\n    <!-- Open Graph`);
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Fixed favicons in ${filePath}`);
            }
        }
    });
}

fixFavicons(directoryPath);
console.log('Done fixing all favicons with 48x48, 96x96, 192x192, and webmanifest!');
