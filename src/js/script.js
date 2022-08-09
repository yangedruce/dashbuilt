const setup = () => {
    return {
        isSidebarOpen: false,
        currentSidebarTab: null,
        isSettingsPanelOpen: false,
        watchScreen() {
            if (window.innerWidth <= 1024) {
                this.isSidebarOpen = false
            }
        },
    }
}