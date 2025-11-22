const express = require("express");
const fs = require("fs");
const path = require("path");
const stripe = new Stripe("sk_test_yourSecretKey");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const IMAGES_DIR = path.join(__dirname, "public/images/gallery");
const BASE_DIR = path.join(__dirname, "public");

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

app.get("/api/images", (req, res) => {
    try {
        const imagesByFolder = getImagesByFolders(IMAGES_DIR, BASE_DIR);
        res.json(imagesByFolder);
    } catch (err) {
        return res.status(500).json({ error: "Unable to scan directory" });
    }
});

app.use("/images", express.static(IMAGES_DIR));


app.post("/create-payment-intent", async (req, res) => {
    try {
        const { amount } = req.body;
        
        if (!amount || isNaN(amount) || amount <= 0) {
            return res.status(400).json({ error: "Invalid amount" });
        }

        const amountInCents = Math.round(amount * 100);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amountInCents,
            currency: "usd",
        });
        
        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});