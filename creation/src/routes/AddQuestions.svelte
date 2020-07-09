<style>
    .u-view {
        min-height: 100vh;
        display: flex;
    }

    aside {
        width: 300px;
        background-color: white;
        padding: 15px;
        cursor: pointer;

        display: flex;
        flex-direction: column;
        border-right: 1px solid #DBDBDB;
    }

    ul.menu-list {
        display: flex;
        flex-direction: column;

        flex-grow: 1;
    }

    ul.menu-list li:last-child {
        margin-top: auto;
    }

    table {
        margin: auto;
    }

    td, th {
        text-align: center !important;
        vertical-align: middle;
    }

    .workspace {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        min-height: 100vh;
        height: 100vh;
        overflow-y: scroll;

    }
    .u-search {
        width: 100%;
        background-color: white;
        min-height: 50px;;

        display: flex;
        justify-content: center;
        align-items: center;
        position: sticky;
        top: 0;
        z-index: 30;

        

    }

    
    .u-search input.input {
        max-width: 260px;
         position: absolute;
        margin: 0 auto;
    }

    .u-button {
        margin: 0 8px 0 auto;
        padding: 0.5em 1em;
        border: 1px solid #6362EC;
        color: #6362EC;
        cursor: pointer;
        border-radius: 4px;

    }

    .u-button.active {
        color: white;
        background-color: #6362EC;
    }


    
</style>

<script>
    import { navigate, Link, link } from "svelte-routing";
    import ModifyPackage from '../comps/ModifyPackage.svelte'
    import QuestionsDashboard from '../comps/QuestionsDashboard.svelte'
    
    export let params = {}
    export let packages = {};
    import {onMount} from 'svelte'
    export let packagesResolution = {}
    export let questions = {}
    
    let enableEditing = false
    onMount(async () => {

        packagesResolution.then(() => {
            if (!Object.keys(packages).includes(params.id)) {
                navigate('/home')
            }
        })
        
    })

    
    console.log(params)
    let searchvalue = ""

    
</script>



    <div class="u-view">
        <aside class="menu">
            <p class="menu-label">
                Navigation
            </p>
            <ul class="menu-list">
                <li><a href="/home" class="is-active" use:link>Home</a></li>
                <li><a href="/second" use:link>Second</a></li>
                <li>Logout</li>
            </ul>
            
        </aside>
        <div class="workspace">
            <div class="u-search">

                <input placeholder="keyword" bind:value={searchvalue} class="input" type="text">
                <div on:click={() =>enableEditing = !enableEditing}
                class:active={enableEditing}
                class="u-button">Edit</div>
                
            </div>

            <ModifyPackage {params} info={packages[params.id]} />
            <QuestionsDashboard {questions} {enableEditing} {searchvalue} {params} />
            <!--
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Label</th>
                        <th>Title</th>
                        <th><abbr title="Number of Questions">Nbr Qs</abbr></th>
                        <th>Modify</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>ID</th>
                        <th>Label</th>
                        <th>Title</th>
                        <th><abbr title="Number of Questions">Nbr Qs</abbr></th>
                        <th>Modify</th>
                        <th>Delete</th>
                    </tr>
                </tfoot>
                <tbody>
                    <tr>
                        {#each packages as item}
                            {#if [item.id, item.label, item.title]
                            .some((mypackages) => String(mypackages).includes(searchvalue)) }
                                <td>{item.id}</td>
                                <td>{item.label}</td>
                                <td>{item.title}</td>
                                <td></td>
                                <td>
                                    <a href={"home/" + item.id} use:link>
                                        <button class="button is-info">Modify</button>
                                    </a>
                                
                                </td>
                                <td><button class="button is-danger">Danger</button></td>
                            {/if}
                        {/each}
                    </tr>
                </tbody>
            </table>

            -->
        </div>
    

    </div>
