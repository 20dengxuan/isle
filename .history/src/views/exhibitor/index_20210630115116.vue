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
       <van-img width="20.375rem" height='8.1875rem' src="//image-dev.3-e.cn/editor/22737c30a25c467cb9cd20180b94494f.png" />


       <h3>
         ISLE 2022<br>
         {{$t('exhibitor.large')}}
       </h3>

       <p>{{$t('exhibitor.time')}}</p>
       <p>{{$t('exhibitor.address')}}</p>
       <van-image height="15.625rem" width="11.25rem" src="//image-dev.3-e.cn/image/f0f1722ee31b4b68937d6f04bde1310b.jpg" />

       
    </div>  


   
  </div>
</template>

<style lang="less" scoped>
  .exhibitor{
    >h3{padding-left:1rem;font-size:1.125rem;}
    .swiper{
      width:100%;
      min-height:10.25rem;
      overflow-x:scroll;
      padding-right:-1rem;
      padding-bottom:1.25rem;
      >ul{ 
         display: flex;
         width:calc(18.75rem * 6);
        >li{  
          width:19.375rem;
          margin-right:0.625rem;
          color:white;
          >div:nth-of-type(1){
          font-size:0.75rem;
          background:#9f2278;
          height:2rem;
          padding:0 0.5rem;
          line-height:2rem;
          }
          >div:nth-of-type(2){
            font-size:0.75rem;
            background:#c3469c;
            height:calc(100% - 2rem);
            padding:0.625rem 1.25rem;
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
      padding:0 1rem;
      display:flex;
      flex-wrap: wrap;
      justify-content: center;
      >h3{font-size:1.125rem;width:100%}
      >p{
         font-size:0.75rem;
         width:100%;
      }
      >.vanimg{
        margin:0 auto;
      }
    }
  }
</style>