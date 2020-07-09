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
        flex-direction: column
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

    }
    .u-search {
        width: 100%;
        background-color: white;
        height: 50px;;

        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;
    }

    .u-search input.input {
        max-width: 260px;
        position: absolute;
        margin: 0 auto;
    }

    .u-add-package {
        padding: 4px 8px;
        background-color: #6362EC;
        color: white;
        margin: 0 8px 0 auto;
        border-radius: 4px;
        cursor: pointer;
    }
</style>


<script>
    export let packages = {};
    

    import {user, db} from '../store'
    import {onDestroy} from 'svelte'
    import { navigate, Link, link } from "svelte-routing";

    let unsubscribe = user.subscribe((value) => {
        if (value != undefined) {
            if (value == 0) {
                navigate("login", { replace: false });
            }
        }
       
    })

    onDestroy(() => {
        unsubscribe()
    })


   

    let addPackage = async () => {
        console.log(packages)
        
        let allPacakges =  Object.keys(packages).map((item) => Number(item))
        allPacakges.sort()
        let biggest = allPacakges[allPacakges.length - 1] + 1
        packages[String(biggest)] = {label: "", title: ""}
        db.collection("app").doc("packages").update({[String(biggest)]: {label: "", title: "", img: "", backgroundColor: "", textColor: ""}})
    }

    let deletePackage = (id) => {
        delete packages[id]
        db.collection("app").doc("packages").update({[id]: firebase.firestore.FieldValue.delete()})
         db.collection("app").doc("questions").update({[id]: firebase.firestore.FieldValue.delete()})
        packages = packages
    }

    let searchvalue = "";
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
            <div on:click={addPackage} class="u-add-package">Add Package</div>
        </div>
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
               
                    {#each Object.entries(packages) as [id, item]}
                        {#if [item.id, item.label, item.title]
                        .some((mypackages) => String(mypackages).includes(searchvalue)) }
                            <tr>
                                <td>{id}</td>
                                <td>{item.label}</td>
                                <td>{item.title}</td>
                                <td></td>
                                <td>
                                    <a href={"home/" + id} use:link>
                                        <button class="button is-info">Modify</button>
                                    </a>
                                
                                </td>
                                <td><button on:click={() => {deletePackage(id)}} class="button is-danger">Danger</button></td>
                            </tr>
                        {/if}
                    {/each}
                
            </tbody>
        </table>
    </div>
   

</div>