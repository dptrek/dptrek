import fetch from "node-fetch";

export default async function handler(req, res) {
    // ==== CORS 头 ====
    res.setHeader('Access-Control-Allow-Origin', 'https://dptrek.github.io'); // 前端域名
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // 处理 OPTIONS 预检请求
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    try {
        // 解析 JSON body
        const buffers = [];
        for await (const chunk of req) buffers.push(chunk);
        const rawBody = Buffer.concat(buffers).toString();
        const { fileName, content } = JSON.parse(rawBody);

        const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
        if (!GITHUB_TOKEN) throw new Error("GitHub token not configured");

        const OWNER = "dptrek";
        const REPO = "dptrek";
        const BRANCH = "main";
        const FOLDER = "data";

        const path = `${FOLDER}/${fileName}`;
        const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}`;

        // 检查是否存在
        let sha = null;
        const checkRes = await fetch(url, {
            headers: { "Authorization": `token ${GITHUB_TOKEN}` }
        });
        if (checkRes.ok) {
            const json = await checkRes.json();
            sha = json.sha;
        }

        // 上传
        const uploadRes = await fetch(url, {
            method: "PUT",
            headers: {
                "Authorization": `token ${GITHUB_TOKEN}`,
                "Accept": "application/vnd.github.v3+json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: `Upload ${fileName}`,
                content: content,
                branch: BRANCH,
                sha: sha || undefined
            })
        });

        const data = await uploadRes.json();
        res.status(200).json(data);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}
