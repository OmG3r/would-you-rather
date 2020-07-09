<style>


</style>


<script>
    import { Router, Link, Route, navigate } from "svelte-routing";

    import Home from "./routes/Home.svelte";
    import Login from './routes/Login.svelte'
    import Second from './routes/Second.svelte'
    import AddQuestions from './routes/AddQuestions.svelte'
    import {user, db} from './store'
    
    export let url = "";

    let data = {
        "1001": {
            label: "love",
            title: "Al 7ob",
        },
        "1002": {
            label: "cars",
            title: "carhaba"
        }
    }
    let packages = {}
    let packagesResolution = new Promise(async (resolve, reject) => {
        db.collection("app").doc("packages").onSnapshot(function(doc) {
            packages = doc.data()
            resolve(true)
        });
    })
    let questions = {}
    let questionsResolution = new Promise (async (resolve, reject) => {
        db.collection("app").doc("questions").onSnapshot(function(doc) {
            questions = doc.data()
            resolve(true)
        });
    })
    
    
    
    
    
    setTimeout(async () => {
        await Promise.all([questionsResolution, packagesResolution])
        document.getElementById('loader').parentNode.removeChild(document.getElementById('loader'))
    },1000)
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
        <Route path="/login"><Login /> </Route>
        <Route path="/second"><Second /></Route>
        <Route path="/home"><Home {questions} {packages} {packagesResolution} /></Route>
        <Route path="/home/:id" let:params >
            <AddQuestions {params}
            {packages} {packagesResolution} {questions}  /> 
        </Route>
        <Route path="*">wild</Route>
    </div>
</Router>