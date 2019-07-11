<template>
    <div class="container">
        <div class="content">
            <div class="item" v-for="(item,index) in dataInfo" :key="index">
                <div >{{item.name}}</div>
                <div >{{item.value}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import {setCookie, getCookie, delCookie} from "../../common/utils/cookie.js";
export default {
    name:'',
    data(){
        return{
            dataInfo:[
                {
                    name:'教学效果好的班级',
                    value:[101,202,303,44],
                },
                {
                    name:'教学效果差的班级',
                    value:[11,22,33],
                },
            ],
            type:'',
        }
    },
    created(){
        this.type = sessionStorage.getItem('inspectType')
        this.initData();
    },
    methods:{
        initData(){
            if(this.type === '1'){
               this.$HTTP.api({
                url: "/api/baseInfo/sysPatrolTeacher/patrolStatic",
                method: "POST",
                params: {
                    patrolDate:getCookie('date'),
                    patrolTime:getCookie('active'),
                    patrolMan:unescape(getCookie('name')),
                    teachBulid:unescape(getCookie('building'))
                },
                successCallback: function(result) {
                if (result.code == "0") {
                    console.log(result.data);
                    let arr = result.data.map(item=>{
                        return{
                            name:`${item.describ}(共${item.num}个)`,
                            value:item.data,
                            num:item.num
                        }
                    })
                    this.dataInfo = arr;
                }
                }.bind(this)
              });
            }else if(this.type === '2'){
                this.$HTTP.api({
                url: "/api/baseInfo/sysPatrolTrainPost/patrolStatic",
                method: "POST",
                params: {
                    patrolDate:getCookie('date'),
                    patrolTime:getCookie('active'),
                    patrolMan:unescape(getCookie('name')),
                    teachBulid:unescape(getCookie('building'))
                },
                successCallback: function(result) {
                if (result.code == "0") {
                    console.log(result.data);
                    let arr = result.data.map(item=>{
                        return{
                            name:`${item.describ}(共${item.num}个)`,
                            value:item.data,
                            num:item.num
                        }
                    })
                    this.dataInfo = arr;
                }
                }.bind(this)
              });
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.content{
    padding-bottom: 0.5rem;
    .item{
        background: #fff;
        padding: 0.1rem 0.4rem;
        margin-bottom: 0.2rem;
        div:first-child{
            font-size: 0.25rem;
            line-height: 0.5rem;
            color: #606266;
        }
        div:last-child{
            font-size: 0.23rem;
            color: #909399;
            line-height: 0.4rem;
            min-height:0.4rem;
        }
    }
}
</style>
