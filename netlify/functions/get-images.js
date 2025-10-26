import fs from "fs";
import path from "path";
const _path = "public/images/gallery";

function getImagesByFolders(dirPath, baseDir) {
    let folderStructure = {};
    const items = fs.readdirSync(dirPath);

    for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            const folderImages = fs.readdirSync(fullPath)
                .filter(file => /\.(png|jpe?g|gif|webp)$/i.test(file))
                .map(file => {
                    const imagePath = path.join(fullPath, file);
                    const relativePath = path.relative(baseDir, imagePath);
                    const urlPath = relativePath.split(path.sep).join('/');
                    return {
                        original: `/${urlPath}`,
                        thumbnail: `/${urlPath}`,
                        description: path.parse(file).name
                    };
                });

            const folderName = path.basename(fullPath);
            folderStructure[folderName] = folderImages;
        }
    }
    return folderStructure;
}

export async function handler(event, context) {
    try {
        const imagesDir = path.join(process.cwd(), _path);
        const baseDir = path.join(process.cwd(), 'public');

        const images = getImagesByFolders(imagesDir, baseDir);

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(images),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Unable to scan directory" }),
        };
    }
}
