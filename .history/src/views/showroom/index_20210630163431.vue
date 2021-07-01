<template>
  <div class="showroom">
    <header>
      <Seach />
      <div style="height: 20px"></div>
      <Swiper />
    </header>

    <div class="category">
        <div @click="toExhibits(id)" v-for="(c,index) in state.category" :key="index">
          <div><van-img :src="img[index]?.img" /></div>
          <p>{{store.state.lang === 'zh'?c.zh:c.en}}</p>
        </div>
    </div>
    

    <div class="img">
      <van-img height="7.0625rem" width='100%' src="//image-dev.3-e.cn/editor/ba4edb5174914018a2ce0be2695fd352.png"/>
    </div>

    <div class="area">
        <top-title>
          线上展厅
        </top-title>
        <div v-for="(a,index) in state.area.data" :key="index" class="lists">
          <div class="top" v-if="index<4">
            <p><span>
              <img src="data:image/png;base64,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" alt=""> 
               {{a.hall_name}}</span><span @click="changearea(index,a.id)" ><van-icon size="0.75rem" name="replay" /> 换一批</span></p>
            <p>{{a.region_name}}</p>
          </div>
          <div class="bottom" v-if="index<4" >
               <div @click="toDetail(l.id)" v-for="(l,index) in a.list?.items" :key='index' class="list">
                  <van-img width="10.025rem" height="8.25rem" :src="'//image-dev.3-e.cn/'+l.image_default" />
                  <p>{{l.name}}</p>
                  <p>{{l.title}}</p>
               </div>
          </div>
        </div>
    </div>


    

  </div>
</template>

<script>
import Seach from './components/seach.vue'
import Swiper from './components/swiper.vue'
import { $apiCache } from '../../assets/script/api-cache'
import {onMounted,watch,reactive,ref} from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
export default {
  components: { Seach, Swiper },
  setup() {
    const store = useStore()
    const router = useRouter()
    const state = reactive({
       category:[],
       area:{
         data:[],
         page:1,
         page_size:8,
         list:[]
       }
    })

    const img = ref([
       {
         img:'https://m.isle.org.cn/img/online_showroom/bigshow@2x.png'
       },
       {
         img:'https://m.isle.org.cn/img/online_showroom/bigshow@2x.png'
       },
       {
         img:'https://m.isle.org.cn/img/online_showroom/bigshow@2x.png'
       },
       {
         img:'https://m.isle.org.cn/img/online_showroom/bigshow@2x.png'
       },
       {
         img:'https://m.isle.org.cn/img/online_showroom/bigshow@2x.png'
       },
       {
         img:'https://m.isle.org.cn/img/online_showroom/bigshow@2x.png'
       },
       {
         img:'https://m.isle.org.cn/img/online_showroom/bigshow@2x.png'
       },
       {
         img:'https://m.isle.org.cn/img/online_showroom/bigshow@2x.png'
       },
       {
         img:'https://m.isle.org.cn/img/online_showroom/bigshow@2x.png'
       },
       {
         img:'https://m.isle.org.cn/img/online_showroom/bigshow@2x.png'
       },{
         img:'https://m.isle.org.cn/img/online_showroom/bigshow@2x.png'
       },
       {
         img:'https://m.isle.org.cn/img/online_showroom/bigshow@2x.png'
       },
       
    ])

    watch(()=>store.state.lang,(newVal)=>{
      getExhibitsCategory(newVal)
      getExhibitArea(newVal)
    })

     //分类
    const getExhibitsCategory = (lang) => {
      $apiCache({ key: 'getExhibitsCategory',type:2 }, { lang:lang }).then((res) => {
        // console.log(res);
        state.category = res.data
      });
    };

    //展区
    const getExhibitArea = (lang) =>{
      $apiCache({key:'getExhibitArea',type:2},{lang:lang}).then(res=>{
        state.area.data = res.data
        // 展品

       state.area.dada = state.area.data.map(item=>{
        item.page = 1
        $apiCache({key:'getExhibitFlow',type:2},{lang:lang,page:item.page,page_size:8,area_id:item.id}).then(res=>{

           item.list = res.data
         })
        })
        console.log(state.area.data)

      })
    }

    const changearea = (index,id) =>{
      console.log(index,id)
      state.area.data[index].page =  state.area.data[index].page + 1
      console.log(state.area.data[index].page)
      $apiCache({key:'getExhibitFlow',type:2},{lang:store.state.lang,page:state.area.data[index].page,page_size:8,area_id:id}).then(res=>{
           state.area.data[index].list = res.data
       })
    }


    const toDetail = (id) =>{
      console.log(id)
      router.push({name:'detail',query:{
        id
      }})
    }

    onMounted(()=>{
      getExhibitsCategory(store.state.lang)
      getExhibitArea(store.state.lang)
    })


   const toExhibits = (id)=>{
     router.push({name:'exhibitor',query:{id}})
   }

    return {
       store,
       state,
       img,
       changearea,
       toDetail,
       toExhibits
    }
  },
};
</script>

<style lang="less" scoped>
.showroom {
  header {
    height: 13.5rem;
    width: 100%;
    background: url("//image-dev.3-e.cn/editor/36d55482057b4de4939c28b6f26e0b3a.png");
    background-size: 100% 85%;
    background-repeat: no-repeat;
    padding: 1rem;
  }
  .category{
    width:100%;
    padding:1rem ;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    >div{
      width:3.425rem;
      >div{
        width:2.5rem;
        height:2.5rem;
        border-radius:50%;
        margin:0 auto;
        text-align: center;
        line-height:2.5em;
      }
      >p{
        padding:0.3125rem 0;
        font-size:0.75rem;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  .img{
    padding:1rem;
  }
  .area{
    width:100%;
    padding:1rem;
    .lists{
      width:100%;
    
      .top{
        color:white;
         height:5.625rem;
         background-color:rgb(255, 153, 0);
         border-radius:0.25rem;
         >p:nth-of-type(1){
           display: flex;
           justify-content: space-between;
           padding:0.625rem;      
           >span:nth-of-type(1){
             border-bottom:0.0625rem solid white;
             padding-bottom:0.3125rem;
             display: flex;
             align-items: center;
             font-size:0.875rem;
             img{
               width:2.125rem;
               height:1.6875rem;
             }
           }
           >span:nth-of-type(2){
             font-size:0.75rem;
           }
         }
         >p:nth-of-type(2){
           padding:0.625rem;
           font-size:1.125rem;
           overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
         }

      }
      .bottom{
         display:flex;
         justify-content: space-between;
         flex-wrap: wrap;
         .list{
           display: flex;
           justify-content: center;
           flex-wrap: wrap;
           border-radius: 0.3125rem;
          //  height:13.625rem;
           width:10.5875rem;
           border:0.0625rem solid #dedede;
           margin:0.3125rem 0;
           padding:0.25rem;
         
           >p:nth-of-type(1){
               text-align:left;
             font-size:0.60rem;
             color:#969696;
             width:100%;
           }
           >p:nth-of-type(2){
             font-size:0.8125rem;
              text-align:left;
              width:100%;
           }
         }
      }
      &:nth-of-type(3){
        .top{
          background:rgb(57, 158, 255);
        }
      }
       &:nth-of-type(4){
        .top{
          background:rgb(89, 199, 157);
        }
      }
      &:nth-of-type(5){
        .top{
          background:rgb(57, 158, 255);
        }
      }
       
    }
   
  }
}
</style>
