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

  </div>
</template>

<style lang="less" scoped>
  .exhibitor{
    padding:16px;
    .swiper{
      width:100%;
      height:144px;
      overflow-x:scroll;
      padding-right:-16px;
      >ul{ 
        display: flex;
        width:calc(300px * 6);
        height:100%; 
        >li{  
          width:310px;
          height:142px;
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
            padding:20px;
          }
        }
      }
    }
  }
</style>