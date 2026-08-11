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
      body.data.vip_end_time = "2030-11-04 08:55";
      body.data.is_vip = "1";       // 原字段是字符串，保持字符串格式
      body.data.vip_name = "haha";
      body.data.vip_id = 1;
      body.data.is_set_pay_pass = 1;   
    }

    $done({ body: JSON.stringify(body) });
  } catch (e) {
    console.log("JSON解析失败: " + e);
    $done({});
  }
} else {
  $done({});
}
