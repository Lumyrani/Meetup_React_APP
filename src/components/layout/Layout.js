import React from 'react'
import { MainNavigation } from './MainNavigation'
import './Layout.css'


export const Layout = (props) => {
    return (
        <div>
            <MainNavigation/>
            <main className="main">
                {props.children}
            </main>
            
        </div>
    )
}
