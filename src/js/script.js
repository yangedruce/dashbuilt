const setup = () => {
    return {
        isSidebarOpen: false,
        currentSidebarTab: null,
        watchScreen() {
            if (window.innerWidth <= 1024) {
                this.isSidebarOpen = false
            }
        },
    }
}