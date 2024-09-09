function Download_JSONFile() {
    // 定义要存储到 JSON 文件中的键名数组
    var keyNames = [
        "reflection_nagging",
        "reflection_forced",
        "reflection_obstruction",
        "reflection_sneaking",
        "reflection_interference",
        "actions",
        "stayTimes",
    "essentialinfo",
    "surveycontent",
        "testdp",
        "test_ch",
        "code_dp"
    ];
    // 创建一个对象来存储键值对
    var data = {};
    // 遍历每个键名，将其对应的值存储到对象中
    keyNames.forEach(function(keyName) {
        var value = localStorage.getItem(keyName);
        data[keyName] = value;
    });
    // 将数据转换为 JSON 字符串
    var jsonData = JSON.stringify(data);
    // 获取当前日期和时间
    var currentDate = new Date();
    var dateString = currentDate.toISOString().split('T')[0]; // 日期部分
    var timeString = currentDate.toTimeString().split(' ')[0].replace(/:/g, '-'); // 时间部分
    // 构造文件名为日期加时间的字符串
    var fileName = dateString + '_' + timeString + '.json';
    // 创建一个新的 Blob 对象，用于存储 JSON 数据
    var blob = new Blob([jsonData], { type: "application/json" });

    // 创建一个链接元素
    var a = document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    // 设置链接的下载属性，指定文件名为日期加时间.json
    a.download = fileName;
    // 将链接元素添加到文档中
    document.body.appendChild(a);
    // 模拟点击链接以触发下载
    a.click();
    // 删除链接元素
    document.body.removeChild(a);
}


function generate_JSONBlob() {
// 定义要存储到 JSON 文件中的键名数组
var keyNames = [
    "reflection_nagging",
    "reflection_forced",
    "reflection_obstruction",
    "reflection_sneaking",
    "reflection_interference",
    "actions",
    "stayTimes",
    "essentialinfo",
    "surveycontent",
        "testdp",
        "test_ch",
        "code_dp"
];
// 创建一个对象来存储键值对
var data = {};
// 遍历每个键名，将其对应的值存储到对象中
keyNames.forEach(function(keyName) {
    var value = localStorage.getItem(keyName);
    data[keyName] = value;
});
// 将数据转换为 JSON 字符串
var jsonData = JSON.stringify(data);
// 获取当前日期和时间
var currentDate = new Date();
var dateString = currentDate.toISOString().split('T')[0]; // 日期部分
var timeString = currentDate.toTimeString().split(' ')[0].replace(/:/g, '-'); // 时间部分
// 构造文件名为日期加时间的字符串
var fileName = dateString + '_' + timeString + '.json';
// 创建一个新的 Blob 对象，用于存储 JSON 数据
var blob = new Blob([jsonData], { type: "application/json" });

    return {
        blob: blob,
        fileName: fileName
    };
}


// 生成 JSON 文件并上传到 S3
function uploadJSONToS3() {
    // 调用 generate_JSONBlob() 函数生成 JSON Blob 对象和文件名
    var jsonBlobData = generate_JSONBlob();
    var blob = jsonBlobData.blob;
    var fileName = jsonBlobData.fileName;

    // 配置 AWS SDK
    AWS.config.update({
        region: AWS_S3_REGION,
        accessKeyId: AWS_S3_ACCESS_KEY_ID,
        secretAccessKey: AWS_S3_SECRET_ACCESS_KEY
    });

    // 创建 S3 服务对象
    const s3 = new AWS.S3();

    // 定义上传参数
    const params = {
        Bucket: AWS_S3_BUCKET_NAME,
        Key: fileName,
        Body: blob,
        ContentType: 'application/json'
    };

    // 使用 AWS SDK 将 JSON 文件上传到 S3
    s3.upload(params, function(err, data) {
        if (err) {
            console.error("Error uploading data: ", err);
            alert("Error uploading JSON file to S3! Please resubmit file.");
            Download_JSONFile();
        } else {
            console.log("Upload success: ", data.Location);
            alert("JSON file uploaded successfully to S3!");
        }
    });
}
