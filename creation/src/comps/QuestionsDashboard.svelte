<style>


</style>



<script>
    import {onDestroy} from 'svelte'
    import {db} from '../store.js'
    export let searchvalue = ""
    export let params = {}
    let questions = {}

    let unsubscribe =  db.collection("app").doc("questions").onSnapshot(function(doc) {
        questions = doc.data()
    });

    onDestroy(async () => {
        unsubscribe()
    })


</script>


<table class="table">
    <thead>
        <tr>
            <th>ID</th>
            <th><abbr title="Question 1">Qs 1</abbr></th>
            <th>Clicks</th>
            <th><abbr title="Question 2">Qs 2</abbr></th>
            <th>Clicks</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tfoot>
        <tr>
            <th>ID</th>
            <th><abbr title="Question 1">Qs 1</abbr></th>
            <th>Clicks</th>
            <th><abbr title="Question 2">Qs 2</abbr></th>
            <th>Clicks</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>
    </tfoot>
    <tbody>
        
            {#if questions[params.id]}
                {#each Object.entries(questions[params.id]) as [id, item]}
                    {#if [item.id, item.label, item.title]
                    .some((mypackages) => String(mypackages).includes(searchvalue)) }
                        <tr>
                            <td>{id}</td>
                            <td>
                                <div class="field">
                                    <div class="control">
                                        <textarea row="3" class="textarea is-info" placeholder="Info textarea">{item.one.text}</textarea>
                                    </div>
                                </div>
                            </td>
                            <td>{item.one.click}</td>
                            <td>
                                <div class="field">
                                    <div class="control">
                                        <textarea row="3" class="textarea is-info" placeholder="Info textarea">{item.two.text}</textarea>
                                    </div>
                                </div>
                            
                            </td>
                            <td>{item.two.click}</td>
                            <td>

                                    <button class="button is-info">Update</button>
                            
                            </td>
                            <td><button class="button is-danger">Delete</button></td>
                        </tr>
                    {/if}
                {/each}
            {/if}
       
    </tbody>
</table>