function showTab(tabId) {
    // すべてのタブを非表示にする
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => tab.style.display = "none");
    
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.style.display = 'block';
    }
}
// 初期表示（最初のタブを表示する）
showTab('tab1');
