<script setup lang="ts">
const items: Ref = ref<object[]>([
  {
    title: "Help",
    action: () => {},
  },
  {
    title: "Training",
    action: () => {},
  },
  {
    title: "Updates",
    action: () => {},
  },
  {
    title: "Send feedback to Google",
    action: () => {},
  },
]);
</script>
<template>
  <v-app-bar elevation="0" height="70">
    <template #prepend>
      <v-app-bar-nav-icon />
      <NuxtLink to="/" class="ms-1">
        <v-img src="@/assets/logo_gmail_lockup_default_1x_r5.png" width="100" />
      </NuxtLink>
    </template>
    <div style="width: 700px" class="mt-5">
      <v-text-field rounded="pill" variant="outlined">
        <template #prepend-inner>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
            <v-tooltip activator="parent" location="bottom" color="white"
              >Search</v-tooltip
            >
          </v-btn>
        </template>
        <template #append-inner>
          <v-btn icon>
            <v-icon>mdi-filter-variant</v-icon>
            <v-tooltip activator="parent" location="bottom" color="white"
              >Show search options</v-tooltip
            >
          </v-btn>
        </template>
      </v-text-field>
    </div>
    <template #append>
        <v-menu location="bottom">
          <template #activator="{ props }">
            <v-btn icon v-bind="props">
              <v-icon>mdi-help-circle-outline</v-icon>
              <v-tooltip activator="parent" location="bottom"
                >Support</v-tooltip
              >
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              @click="item.action"
            >
              <v-list-item-title class="ml-4">{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
    </template>
  </v-app-bar>
</template>
