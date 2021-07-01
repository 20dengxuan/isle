<template>
  <div class="exhibitor">
    <h3>
       ISLE 2020<br>{{$t('exhibitor.light')}}
    </h3>
    
    <div class="swiper">
      <ul>
        <li>
          <div>{{$t('exhibitor.title1')}}</div>
          <div>{{$t('exhibitor.content1')}}</div>
        </li>
        <li>
          <div>{{$t('exhibitor.title2')}}</div>
          <div>{{$t('exhibitor.content2')}}</div>
        </li>
        <li>
          <div>{{$t('exhibitor.title3')}}</div>
          <div>{{$t('exhibitor.content3')}}</div>
        </li>
        <li>
          <div>{{$t('exhibitor.title4')}}</div>
          <div>{{$t('exhibitor.content4')}}</div>
        </li>
        <li>
          <div>{{$t('exhibitor.title5')}}</div>
          <div>{{$t('exhibitor.content5')}}</div>
        </li>
        <li>
          <div>{{$t('exhibitor.title6')}}</div>
          <div>{{$t('exhibitor.content6')}}</div>
        </li>
      </ul>
    </div>
    
    

    <div class="content">

      <h3>
        ISLE 2022<br>
        {{$t('exhibitor.plan')}}
      </h3>
       <van-img width="326px" height='131px' src="//image-dev.3-e.cn/editor/22737c30a25c467cb9cd20180b94494f.png" />


       <h3>
         ISLE 2022<br>
         {{$t('exhibitor.large')}}
       </h3>

       <p>{{$t('exhibitor.time')}}</p>
       <p>{{$t('exhibitor.address')}}</p>
       <van-image src="//image-dev.3-e.cn/image/f0f1722ee31b4b68937d6f04bde1310b.jpg" />
    </div>  


   
  </div>
</template>

<style lang="less" scoped>
  .exhibitor{
    >h3{padding-left:16px;font-size:18px;}
    .swiper{
      width:100%;
      min-height:164px;
      overflow-x:scroll;
      padding-right:-16px;
      padding-bottom:20px;
      >ul{ 
         display: flex;
         width:calc(300px * 6);
        >li{  
          width:310px;
          margin-right:10px;
          color:white;
          >div:nth-of-type(1){
          font-size:12px;
          background:#9f2278;
          height:32px;
          padding:0 8px;
          line-height:32px;
          }
          >div:nth-of-type(2){
            font-size:12px;
            background:#c3469c;
            height:calc(100% - 32px);
            padding:10px 20px;
          }
        }
        >li:nth-of-type(2){>div:nth-of-type(1){background:#1957c3;}>div:nth-of-type(2){background:#007aff}}
        >li:nth-of-type(3){>div:nth-of-type(1){background:#f0932f;}>div:nth-of-type(2){background:#f3bd3e}}
        >li:nth-of-type(4){>div:nth-of-type(1){background:#9f2278;}>div:nth-of-type(2){background:#c3469c}}
        >li:nth-of-type(5){>div:nth-of-type(1){background:#f0932f;}>div:nth-of-type(2){background:#f3bd3e}}
        >li:nth-of-type(6){>div:nth-of-type(1){background:#1957c3;}>div:nth-of-type(2){background:#007aff}}
      }
    }
    .content{
      padding:0 16px;
      >h3{font-size:18px;}
      >p{
         font-size:12px;
      }
      >.vanimg{
        margin:0 auto;
      }
    }
  }
</style>