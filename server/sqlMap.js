/* eslint-disable */
// sql语句

var sqlMap = {
    // 用户
    user: {
        login: 'select count(*) result,uid,uname,upwd,ugender from c_user where uname=? and upwd=?',
        add: 'insert into c_user(uname, upwd, ugender) values (?, ?, ?)'
    },
    tuijian: {
        query: 'select * from tuijian'
    }
}
module.exports = sqlMap;