<template>
  <VBadge
    dot
    location="bottom right"
    offset-x="3"
    offset-y="3"
    color="success"
    bordered
  >
    <VAvatar
      class="cursor-pointer"
      color="primary"
      variant="tonal"
    >
      <VImg :src="avatar1" />

      <VMenu
        activator="parent"
        width="230"
        location="bottom end"
        offset="14px"
      >
        <VList>
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VBadge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  color="success"
                >
                  <VAvatar color="primary" variant="tonal">
                    <VImg :src="avatar1" />
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>

            <VListItemTitle class="font-weight-semibold">John Doe</VListItemTitle>
            <VListItemSubtitle>Admin</VListItemSubtitle>
          </VListItem>
          <VDivider class="my-2" />

          <VListItem link>
            <template #prepend>
              <VIcon class="me-2" icon="ri-user-line" size="22" />
            </template>
            <VListItemTitle>Profile</VListItemTitle>
          </VListItem>

          <VListItem link>
            <template #prepend>
              <VIcon class="me-2" icon="ri-settings-4-line" size="22" />
            </template>
            <VListItemTitle>Settings</VListItemTitle>
          </VListItem>

          <VListItem link>
            <template #prepend>
              <VIcon class="me-2" icon="ri-money-dollar-circle-line" size="22" />
            </template>
            <VListItemTitle>Pricing</VListItemTitle>
          </VListItem>

          <VListItem link>
            <template #prepend>
              <VIcon class="me-2" icon="ri-question-line" size="22" />
            </template>
            <VListItemTitle>FAQ</VListItemTitle>
          </VListItem>

          <VDivider class="my-2" />

          <VListItem @click="handleLogout">
            <template #prepend>
              <VIcon class="me-2" icon="ri-logout-box-r-line" size="22" />
            </template>
            <VListItemTitle>Logout</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
    </VAvatar>
  </VBadge>
</template>

<script setup>

import avatar1 from '@images/avatars/avatar-1.png';
import authService  from '~/services/auth';
import { useRouter } from 'vue-router';

const router = useRouter();

const handleLogout = async () => {
  try {
    await authService.logout();
    router.push('/login');
  } catch (error) {
    console.error('Logout failed', error);
  }
};
</script>
