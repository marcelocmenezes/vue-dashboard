<template>
  <v-navigation-drawer
  fixed
  clipped
  app
  v-model="drawer"
  >
    <!-- HeaderSideBar -->
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <!-- WrapSideBar -->
    <v-list dense>
      <v-divider />
      <v-list-tile v-for="item in items" :key="item.title" @click="">
      <v-list-tile-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ item.text }}</v-list-tile-title>
      </v-list-tile-content>
      </v-list-tile>

    </v-list>
  </v-navigation-drawer>

</template>

<script>
import links from './sidebar'
export default {
  data: () => { itens: links }
}
</script>
