<style>


</style>



<script>
    import Question from './Question.svelte'

    import {onDestroy} from 'svelte'
    import {db} from '../store.js'
    export let searchvalue = ""
    export let params = {}
    export let enableEditing = false;
    export let questions = {}

    

    

   

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
                    {#if [id, item.one.text, item.two.text]
                    .some((str) => String(str).includes(searchvalue)) }
                        <Question {enableEditing} {id} {item} {params} />

                        
                    {/if}
                {/each}
            {/if}
            <Question create={true} {enableEditing} questions={questions[params.id]} {params} />
       
    </tbody>
</table>