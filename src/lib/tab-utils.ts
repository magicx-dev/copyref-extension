export async function getCurrentTab() {
    let queryOptions = { active: true };
    let [tab] = await browser.tabs.query(queryOptions);
    return tab;
}