<script setup lang="ts">
import {computed} from "vue";
import type MenuItem from "@/components/models/MenuItem";
import {useUserDataStore} from "@/stores/userDataStore";
import {getHighestRole} from "@/components/models/Role";


const userDataStore = useUserDataStore();

const menuItemsRight = computed<MenuItem[]>(() => {
  const items: MenuItem[] = [];

  if (userDataStore.hasUser && getHighestRole(userDataStore.user.roles) == 3) {
    //adminpanel
    items.push({
      label: "Admin",
      to: {
        name: "admin"
      }
    });
  }

  if (userDataStore.hasUser && getHighestRole(userDataStore.user.roles) == 2) {
    items.push({
      label: "Manage",
      to: {
        name: "manage"
      }
    });
  }


  if (userDataStore.hasUser) {
    items.push({
      label: userDataStore.user.username,
      to: {
        name: "account"
      }
    })
  }
  if (!userDataStore.hasUser) {
    items.push({
      label: "Login",
      to: {
        name: "login"
      }
    })
  }
  if (userDataStore.hasUser) {
    items.push({
      label: "Logout",
      to: {
        name: "logout"
      }
    })
  }

  return items;
})
</script>

<template>
  <nav>
    <div class="nav-wrapper">
      <div class="nav-left">
        <RouterLink to="/" class="logo-wrapper">
          <a class="logo"/>
        </RouterLink>
        <RouterLink to="/">Cars</RouterLink>
      </div>
      <div class="nav-right">
        <RouterLink
            v-for="item in menuItemsRight"
            :to="item.to"
            :key="item.label">
          {{ item.label }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;

  height: var(--navbar-height);
  width: 100vw;
}

.nav-wrapper {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  background-color: red;
}

.logo {
  content: url(@/assets/icons/CarGateway-logos.jpeg);
  height: 100%;
}

.nav-left {
  display: flex;
  justify-content: flex-start;
}

.nav-right {
  display: flex;
  justify-content: flex-end;
}

.nav-wrapper > * > * {
  padding: 0.5rem 1rem;
  height: var(--navbar-height);
  display: flex;
  align-items: center;
}
</style>