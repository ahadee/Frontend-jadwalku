import React from 'react'
import Header from './employee/header/Header'
// import Search from './employee/search/Search'
import Card from './employee/list/Card'
// import ListTodo from './employee/list/ListTodo'
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
