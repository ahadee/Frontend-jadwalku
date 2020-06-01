import React from 'react'
import Header from './employee/header/Header'
import Search from './employee/search/Search'
import List from './employee/list/List'

function EmployeeMainPage() {
    return (
        <div>
            <Header />
            <Search />
            <List />
        </div>
    )
}

export default EmployeeMainPage
