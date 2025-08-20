import { Commands } from "@/lib/commands";
import { getCurrentTab } from "@/lib/tab-utils";

export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });

  browser.commands.onCommand.addListener(async (command) => {
    console.debug('command', command);
    if (command == Commands.COPY) {
      const currentTab = await getCurrentTab()
      console.debug('currentTab', currentTab);
      if (!currentTab) return
      await browser.action.openPopup({ windowId: currentTab.windowId })
    }
  });
});
