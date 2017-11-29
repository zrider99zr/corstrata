import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import loginPage from './loginPage'
import searchPatient from './searchPatient'
import resetPassword from './resetPassword'
import MNAtest from './MNAtest'
import wagnerScaleTest from './wagnerScaleTest'
import testSelectionPage from './testSelectionPage'
import createAccount from './createAccount'
import nav from './nav'
import createPage from './createPage'
import bates from './bates'
import linegraph from './linegraph'
import createInstitution from './createInstitution'
import createPatient from './createPatient'


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

const main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/loginPage' component={loginPage} />
            <Route path='/searchPatient' component={searchPatient} />
            <Route path='/createPage' component={createPage} />
            <Route path='/resetPassword' component={resetPassword} />
            <Route path='/MNAtest' component={MNAtest} />
            <Route path='/wagnerScaleTest' component={wagnerScaleTest} />
            <Route path='/testSelectionPage' component={testSelectionPage} />
            <Route path='/createAccount' component={createAccount} />
            <Route path='/bates' component={bates} />
            <Route path='/linegraph' component={linegraph}/>
            <Route path='/nav' component={nav} />
            <Route path='/createInstitution' component={createInstitution} />
            <Route path='/createPatient' component={createPatient} />
        </Switch>
    </main>
)

export default main