<template>
    <div ref="root" class="footer">
        <div>
            <p>联系我们</p>
            <div>
               <van-img height="8.25rem" width='8.25rem' src="//image-dev.3-e.cn/image/d28188bfb3b448ee8ed440369373c676.jpg" />
               <van-img height="8.25rem" width='8.25rem' src="//image-dev.3-e.cn/image/771cda4204794fb488cdf297385ccc47.jpg" />
            </div>
            <div>
                <p>参展请垂询：020-89268256</p>
                <p>观展请垂询：020-89268218</p>
                <p>邮箱：isle-guest@cantonfairad.com</p>
                <p>展会地址：广东省深圳市宝安区福海街道展城路1号</p>
            </div>
        </div>

        <div>
            Copyright © 2021 广州交易会广告有限公司<br>
            粤ICP备05085246号 | 隐私政策 | 服务政策
        </div>
       
        
    </div>
</template>

<script>
import VanImg from '../VanImg'
export default {
    components:{VanImg},
}
</script>

<style lang="less" scoped>
    .footer{
        text-align: center;
        background:#022e5e;
        color:white;
        >div:nth-of-type(1){
          >p{
              height:3rem;
              padding:1rem;
              font-size:1.0625rem;
              margin:0;
          }
          >div:nth-of-type(1){
              display: flex;
              justify-content:center;
              :only-child{
                  padding:0.625rem;
              }
          }
          >div:nth-of-type(2){
              >p{
                  margin:0 0 0.625rem 0;
                  font-size:0.875rem;
              }
          }
        }
        >div:nth-of-type(2){
            padding:1rem;
            height:4rem;
            font-size:0.75rem;
            border-top:0.0625rem solid rgba(235, 233, 233,.2);
        }
    }
</style>