// page下面的路由，在前端路由的基础上加上后端路由
/*
直接放菜单节点，其他的有区分直接加一个判别符，如果值不符合，中间做转换
*/
export default {
    name: '全国系统',
    children: [
        {
            name: '综合信息',
            href: 'information',
            children: [{
                    name: "学校基础信息",
                    href: "",
                    children: [
                        //部
                        {
                            name: "学校信息",
                            href: "/head/page/information/schoolInfo"
                        },
                        {
                            name: "教师信息",
                            href: "/head/page/information/teacherInfo"
                        },
                        {
                            name: "学生信息",
                            href: "/head/page/information/studentInfo"
                        },

                        //省市

                        //校
                        {
                            name: "校级学校信息",
                            href: "/head/page/information/schoolInfoShool"
                        },
                    ]
                },
                {
                    name: "办学场地",
                    href: "/head/page/information/field"
                }
            ]
        },


        {
            name: '用户',
            href: 'relf',
            children: [
                {
                    name: '个人信息',
                    href: '/head/page/relf/info',
                },
                {
                    name: '修改密码',
                    href: '/head/page/relf/changePwd'
                }
            ]
        },

        {
            name: '单个页面',
            href: '/head/page/dan/dan',
            children: null
        },

    ]
}