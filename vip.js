/**
 * 修改 www.xuexibiji.online/api/m12357/* 响应体
 * vip_end_time = 2030-11-04 08:55
 * is_vip = 1
 * vip_name = haha
 * vip_id = 10
 */
if ($response.body) {
  try {
    let body = JSON.parse($response.body);

    if (body.data) {
      body.data.vip_end_time = "2027-09-04 08:55";
      body.data.is_vip = "2";       // 原字段是字符串，保持字符串格式
      body.data.vip_name = "夏峥";
      body.data.vip_id = 4359;
    }

    $done({ body: JSON.stringify(body) });
  } catch (e) {
    console.log("JSON解析失败: " + e);
    $done({});
  }
} else {
  $done({});
}
