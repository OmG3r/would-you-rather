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

</style>


<script>
    import {user} from '../store'
    import {onDestroy} from 'svelte'
    import { navigate, Link, link } from "svelte-routing";

    let unsubscribe = user.subscribe((value) => {
        console.log(value)
        if (value != undefined) {
            if (value == 0) {
                navigate("login", { replace: false });
            }
        }
       
    })

    onDestroy(() => {
        unsubscribe()
    })

    let data = [
        {
            id: 1001,
            label: "love",
            title: "Al 7ob",
        }
    ]

</script>

<div class="u-view">
    <aside class="menu">
        <p class="menu-label">
            Navigation
        </p>
        <ul class="menu-list">
            <li><a href="home"  use:link>Home</a></li>
            <li><a href="second" class="is-active" use:link>Second</a></li>
            <li>Logout</li>
        </ul>
        
    </aside>
    <div class="workspace">
        <div class="u-search">
        
        </div>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Label</th>
                <th>Title</th>
                <th>Number Questions</th>
                <th>Modify</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>ID</th>
                <th>Label</th>
                <th>Title</th>
                <th>Number Questions</th>
                <th>Modify</th>
                <th>Delete</th>
            </tr>
        </tfoot>
        <tbody>
            <tr>
                {#each data as item}
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
                {/each}
            </tr>
        </tbody>
    </table>
    
    </div>

</div>