import React from 'react'
import Header from './manager/header/Header'
// import Search from './employee/search/Search'
import Card from './manager/list/Card'
function EmployeeMainPage() {
    return (
        <div>
            <Header />
            {/* <ListTodo />
            <Search /> */}
            <Card />
        </div>
    )
}

export default EmployeeMainPage
