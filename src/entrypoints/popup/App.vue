<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { Textarea } from '@/components/ui/textarea'
import Button from '@/components/ui/button/Button.vue';
import { CopyCheck } from 'lucide-vue-next';
import { getCurrentTab } from '@/lib/tab-utils';

let data = ref('')
let countdown = ref(3)
let interval: NodeJS.Timeout;

const clearInterval = (interval: NodeJS.Timeout) => {
  window.clearInterval(interval);
};

onMounted(async () => {
  setTimeout(async () => {
    const currentTab = await getCurrentTab()
    console.log(currentTab)
    if (!currentTab) return

    const htmlData = `<a href="${currentTab.url}">${currentTab.title}</a>`;
    const markdownData = `[${currentTab.title}](${currentTab.url})`;
    data.value = markdownData

    navigator.clipboard.write([
      new ClipboardItem({
        "text/html": new Blob([htmlData], { type: "text/html" }),
        "text/plain": new Blob([markdownData], { type: "text/plain" })
      })
    ]);

    interval = setInterval(() => {
      countdown.value--
      if (countdown.value === 0) {
        window.close()
      }
    }, 1000)

  }, 1);
});
</script>

<template>
  <div class="px-5 py-5">
    <div class="text-right ">
      <span class="text-slate-300">{{ countdown }}</span>
    </div>
    <div class="flex items-center justify-center space-x-3 text-green-500">
      <CopyCheck class="size-10" />
      <span class="text-lg">{{ i18n.t('popup_copy_successful') }}</span>
    </div>
    <div class="mt-6 grid w-full gap-2">
      <Textarea class="text-sm" :model-value="data" @focus="clearInterval(interval)" />
      <Button disabled>{{ i18n.t('popup_copied_to_clipboard') }}</Button>
    </div>
  </div>
</template>

<style scoped></style>