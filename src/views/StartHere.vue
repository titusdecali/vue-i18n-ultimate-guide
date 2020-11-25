<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <!-- Text example for i18n -->
    <div class="i18nText">
      <div class="i18nText">
        {{ $t("message") }}
      </div>

      <!-- Text string for you to try. Just type 'vue-translation-manager translate' in your terminal -->
      <div class="mt-5">
        Now, try translating the string below. <br />
        Just type <i>'vue-translation-manager translate'</i> in your terminal
      </div>

      <div class="mt-5 bold">Translate this text</div>
    </div>
    <!-- Custom language switcher -->
    <LanguageSwitcher />
  </div>
</template>

<script>
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";

export default {
  name: "Home",
  components: {
    LanguageSwitcher
  }
};
</script>


<style lang="scss" scoped>
.i18nText {
  font-weight: 500;
  font-size: 20px;
  margin-top: 100px;
}

.mt-5 {
  margin-top: 50px;
}

.bold {
  font-weight: bold;
}
</style>
