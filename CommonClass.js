
function requestMethod(par1, par2, par3, callback) {

    var xhr = new XMLHttpRequest();//第一步：创建请求对旬xhr-->
    xhr.open(par1, 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/' + par2)//第二步：建立与服务端的连接（get/post）
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")//设置头信息，让数据以表单的形式传递给服务器-->
    xhr.send(par3)//第三步：发送异步请求-->

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {//readyState== 4代表ajax数据请求完成；status ==200 ==200代表数据成功返回-->
            var res = JSON.parse(xhr.responseText);//responseText中包含了服务端返回的数据-->
            var str = res.data;
            callback(str);
        }
    }
}