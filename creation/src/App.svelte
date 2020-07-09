<style>


</style>


<script>
    import { Router, Link, Route, navigate } from "svelte-routing";

    import Home from "./routes/Home.svelte";
    import Login from './routes/Login.svelte'
    import Second from './routes/Second.svelte'
    import AddQuestions from './routes/AddQuestions.svelte'
    import {user} from './store'
    
    export let url = "";

    firebase.auth().onAuthStateChanged(function(valueUser) {
        
        if (valueUser) {
            $user = valueUser
         
            // ...
        } else {
            // User is signed out.
            // ...
            
            $user = 0
            navigate("/login");
        }
    });
</script>

<Router url="{url}">

   
    <div>
        <Route path="login"><Login /> </Route>
        <Route path="second"><Second /></Route>
        <Route path="home"><Home /></Route>
        <Route path="home/:id" > <AddQuestions  /> </Route>
        <Route path="*">wild</Route>
    </div>
</Router>