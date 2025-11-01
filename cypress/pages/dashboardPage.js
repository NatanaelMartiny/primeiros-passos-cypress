class DashboardPage {

    selectorsList() {
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid",
            
            
        }

        return selectors
    }


    //criar função para checar se está na dashboradPage
    checkDashboardPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }
}

export default DashboardPage