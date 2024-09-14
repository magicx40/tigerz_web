<template>
    <div>123</div>
</template>
<script setup lang='ts'>
import { getUserInfo, login } from '@/api/index';
import { useSetToken } from '@/util/func';
import { onMounted } from 'vue';

const useLogin = async () => {
    const { code, data }: any = await login();
    if (code === 200) {
        useSetToken(data?.access_token);
    }
    console.log(code, data);
}

const useGetUserInfo = async () => {
    const { code, data }: any = await getUserInfo();
    console.log(code, data);
}

onMounted(async () => {
    await useLogin();
    useGetUserInfo();
});
</script>
<style lang='scss' scoped></style>