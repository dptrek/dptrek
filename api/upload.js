// api/upload.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const { fileName, content } = req.body;

    const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // 在 Vercel 环境变量里配置
    const OWNER = "dptrek";
    const REPO = "dptrek";
    const BRANCH = "main";
    const FOLDER = "data";

    const path = `${FOLDER}/${fileName}`;
    const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}`;

    // 检查文件是否存在
    let sha = null;
    const checkRes = await fetch(url, {
      headers: { "Authorization": `token ${GITHUB_TOKEN}` }
    });
    if (checkRes.ok) {
      const json = await checkRes.json();
      sha = json.sha;
    }

    // 上传文件
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
    res.status(500).json({ error: err.message });
  }
}
