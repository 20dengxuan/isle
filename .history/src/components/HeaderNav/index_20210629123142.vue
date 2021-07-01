<template>
  <div>
    <nav>
      <img src="../../assets/img/logo-zh.svg" alt="" />
      <div>
        <van-config-provider :theme-vars="themeVars">
        <van-popover
          class="popover"
          v-model:show="showPopover"
          :actions="actions"
          @select="onSelect"
          placement="bottom"
        >
          <template #reference>
            <span>{{ lang === "zh" ? "中" : lang }}</span>
          </template>
        </van-popover>
        </van-config-provider>
        <van-icon @click="show = true" size="1.5rem" name="wap-nav" />
      </div>
    </nav>
    <van-popup
      v-model:show="show"
      :style="{ width: '16rem', height: '100%' }"
      position="right"
    >
      <Navbar @c="c"></Navbar>
    </van-popup>
  </div>
</template>

<script>
import { ref, computed, defineComponent,provide } from "vue";
import { useStore } from "vuex";
import Navbar from "../Navbar";

export default defineComponent({
  components: { Navbar },
  setup() {
    const show = ref(false);

    const store = useStore();

    const lang = computed(() => store.state.lang);
    const showPopover = ref(false);
    const c = () => {
      show.value = false;
    };

    const actions = [
      { text: "中" ,name:'zh'},
      { text: "en" ,name:'en'},
    ];
    const onSelect = (action) => {
      console.log(action.name)
      store.commit('SET_LANG', action.name)
    };

    const themeVars = {
         PopoverActionWidth:'140px'
    }
    return {
      show,
      lang,
      actions,
      onSelect,
      c,
      showPopover,
      themeVars
    };
  },
});
</script>

<style lang="less" scoped>
nav {
  height: 3.375rem;
  width: 100%;
  background: url("https://image-dev.3-e.cn/editor/9ae54ca7678b4c75b5ddf663e5fb5257.png?imageView2/0/q/50/format/webp");
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  > img {
    height: 2.75rem;
    width: 14.3125rem;
  }
  > div {
    height: 3.375rem;
    width: 3.6875rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    > span {
      font-size: 0.875rem;
    }
  }
}

</style>
