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
    .swiper{
      width:100%;
      height:164px;
      >ul{ 
        display: flex;
        width:calc(3px * 6);
        height:100%; 
        overflow: scroll;
        >li{  
          width:310px;
          height:164px;
          border:1px solid red;
        }
      }
    }
  }
</style>