import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'


import { Navbar } from '../components/ui/Navbar'
import { DcScreen } from '../components/dc/DcScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'

export const DashboradRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/heroe/:heroeID" component={HeroScreen}/>
                    <Route exact path="/dc" component={DcScreen}/>

                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}