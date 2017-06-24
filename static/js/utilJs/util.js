/**
 * Created by csw on 2016/7/23 10:37.
 * Explain:
 */
function transformParams(params) {

    var paramStr = "";
    var keyArr = [];
    for (var k in params) {
        keyArr.push(k);
    }
    keyArr.sort();
    for (var i = 0; i < keyArr.length; i++) {
        var val = "";
        val = params[keyArr[i]];
        paramStr += "" + keyArr[i] + "=" + val + "&";
    }

    return paramStr;
}

function alertTip(alertId) {
    var $alert = $('#' + alertId);
    $alert.css('z-index', '999');
    $alert.show();
    $alert.delay(1000).hide(0);
}

function alertInfoTip(id, title, info) {
    var $alert = $('#' + id);
    $alert.empty();
    $alert.append("<strong><i class='glyphicon glyphicon-ok'></i>" + title + "&nbsp;</strong>&nbsp;" + info);
    $alert.css('z-index', '999');
    $alert.show();
    $alert.delay(1200).hide(0);
}