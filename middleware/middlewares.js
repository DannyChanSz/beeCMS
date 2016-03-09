var _ = require("underscore");


module.exports = {

    /**
     * [输入检查]
     * @param  {[type]}   req    [description]
     * @param  {[type]}   res    [description]
     * @param  {Function} done   [description]
     * @param  {[type]}   params [
     * [{name:'number',type:'NUMBER'},{name:'number',type:'REQUIRED'}]
     * ]   
     * type:NUMBER/EMAIL/INT/REQUIRED
     * @return {[type]}          [错误信息[{name:'number',err:'001'},{name:'number',err:'001'}];]
     * 错误信息表：001 必填  002不是整数 003不是整数
     */
    inputCheck: function(req, res, done, params) {

        var err = []; //[{name:'number',err:'001'},{name:'number',err:'001'}];

        _.each(params, function(element, index, list) {
            //传入参数表分解成：name:属性名,op:检查方式（REQUIRED/TYPE），type:类型（EMAIL/TEL等）
            var name = element.name;
            var op = element.op;
            var type = element.type;
            //被检查的URL属性
            var toCheck = req.params[element.name];

            typeSwitch(toCheck, name, type, err);

        });

        if (err.length > 0) {
            res.json(err);
            res.end();
        } else {
            done();
        }
    }

}

//类型检查
var typeSwitch = function(data, name, type, err) {


    if (type != "REQUIRED") {
        //字段不存在不参与验证
        if (_.isUndefined(data)) {
            return;
        }

        switch (type) {
            case 'NUMBER':
                var pattern = /^(-?\d+)(\.\d+)?$/; //匹配数字
                if (!pattern.test(data)) {
                    errBuilder(name, '002', err);
                }
                break;
            case 'INT':
                var pattern = /^\d+$/; //匹配非负整数
                if (!pattern.test(data)) {
                    errBuilder(name, '003', err);
                }
                break;
            case 'EMAIL':
                var pattern = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
                if (!pattern.test(data)) {
                    errBuilder(name, '004', err);
                }
                break;
            case 'TEL':
                var pattern = /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/;
                if (!pattern.test(data)) {
                    errBuilder(name, '005', err);
                }
                break;
            case 'CN': //匹配汉字
                var pattern = /^[\u4e00-\u9fa5],{0,}$/;
                if (!pattern.test(data)) {
                    errBuilder(name, '006', err);
                }
                break;
            case 'EN': //匹配大小写英文
                var pattern = /^[A-Za-z]+$/;
                if (!pattern.test(data)) {
                    errBuilder(name, '007', err);
                }
                break;
        };
    } else {
        //必填检测
        if (_.isUndefined(data) || data == '') {
            errBuilder(name, '001', err);
        }
    }

};

//错误代码生成
var errBuilder = function(name, msg, err) {
    var _err = {};
    _err.name = name;
    _err.err = msg;
    err.push(_err);
}
