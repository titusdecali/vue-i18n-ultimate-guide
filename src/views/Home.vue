<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <!-- Text example for i18n -->
    <div class="i18nText">
      {{ $t("message") }}
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
</style>
