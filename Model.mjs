import fs from 'fs';
import fetch from 'node-fetch';
async function query(filename) {
    const data = fs.readFileSync(filename);
    const response = await fetch(
        "https://api-inference.huggingface.co/models/trpakov/vit-face-expression",
        {
            headers: {
                Authorization: "Bearer ACCESS TOKEN",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: data,
        } 
    );
    const result = await response.json();
    return result;
}
query("Happy.png").then((response) => {
    
    const jsonString = JSON.stringify(response[0], null, 4);
    fs.writeFile("output.json",jsonString, (err) => {
        if (err) throw err;
        console.log(jsonString);
        console.log("Output has been written to output.json");
    });
});
