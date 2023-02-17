<template>
    <n-form
        ref="formRef"
        :label-width="80"
        :model="formValue"
        :rules="rules"
        label-placement="top"
        size="medium"
    >
        <n-form-item label="username" path="user.name">
            <n-input
                v-model:value="formValue.user.name"
                placeholder="输入姓名"
            />
        </n-form-item>
        <n-form-item label="password" path="user.password">
            <n-input
                v-model:value="formValue.user.password"
                placeholder="输入密码"
            />
        </n-form-item>
        <n-form-item>
            <n-button attr-type="button" @click="handleValidateClick">
                验证
            </n-button>
        </n-form-item>
    </n-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Login } from '../api/user';
import {
    FormInst,
    useMessage,
    NInput,
    NForm,
    NFormItem,
    NButton,
} from 'naive-ui';

const message = useMessage();

const formRef = ref<FormInst | null>(null);
let formValue = ref({
    user: {
        name: '',
        password: '',
    },
});
let rules = {
    user: {
        name: {
            required: true,
            message: '请输入账号',
            trigger: 'blur',
        },
        password: {
            required: true,
            message: '请输入密码',
            trigger: ['input'],
        },
    },
};
function handleValidateClick(e: MouseEvent) {
    e.preventDefault();
    formRef.value?.validate(async (errors) => {
        if (!errors) {
            console.log('发起请求', formValue.value.user.name);
            const res = await Login(
                formValue.value.user.name,
                formValue.value.user.password,
            );
            console.log('发起请求', res);
        } else {
            console.log(errors);
        }
    });
}
</script>
