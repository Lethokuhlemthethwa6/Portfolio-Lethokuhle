function showTab(tabId) {
  // Hide all tabs
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.style.display = "none";
  });

  // Hide home page
  document.getElementById("home").style.display = "none";

  // Show selected tab
  const selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.style.display = "block";
  }
}

// Show home first
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("home").style.display = "block";
});
