
import { Switch, Route } from "react-router-dom";


import Card from "./Card"
import Ragman from "./Ragman"
import privacy from './Privacy'
import Privacy from "./Privacy";
import Refund from "./Refund";

export default function App() {
    return (
        <>
            {/* <Card/> */}
            <Switch>
                <Route path="/" exact>
                    <Ragman />
                </Route>
                <Route path="/privacy">

                    <Privacy />
                </Route>
                <Route path='/refund'>
                    <Refund />
                </Route>
            </Switch>

        </>
    )
}