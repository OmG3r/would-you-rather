<style>
    .u-view {
        width: 100%;
        height: 100vh;
        display: flex;

        
    }
    form {
        width: 500px;
        background-color: white;
        border-radius: 4px;
        margin: auto;
        padding: 30px;
    }

    input.input {
        margin-bottom: 8px;
    }
    .title.is-4 {
        margin-bottom: 8px;
    }
    .title.is-3 {
        text-align: center
    }

</style>


<script>
    import {user} from '../store'
    import {onDestroy} from 'svelte'
    import { navigate } from "svelte-routing";

    let unsubscribe = user.subscribe((value) => {
        if (value != undefined) {
            if (value != 0) {
                navigate("home", { replace: false });
            }
        }
       
    })

    onDestroy(() => {
        unsubscribe()
    })

    let email = ""
    let password = ""

    let errorMessage = ""
    let doSubmit = () => {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            errorMessage = error.message;

            
            // ...
        });
    }

</script>

<div class="u-view">


    <form on:submit|preventDefault={doSubmit}>
        <h3 class="title is-3">Admin - Would You Rather</h3>
        {#if errorMessage}
            <div class="notification is-danger">
                {errorMessage}
            </div>
        {/if}
        <h4 class="title is-4">Email</h4>
        <input bind:value={email} class="input"  name="email" type="text">
        <h4 class="title is-4">Password</h4>
        <input bind:value={password} class="input"  name="password" type="password">
        <button type="submit" class="button is-primary">Submit</button>
    </form>

</div>

