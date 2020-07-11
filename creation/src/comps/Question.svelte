<style>


</style>


<script>
    import {db} from '../store'
    import Spinner from './Spinner.svelte'
    export let params = {}
    export let id = undefined
    export let item = {
        one: {
            text: "",
            clicks: 0
        },
        two: {
            text: "",
            clicks: 0
        }
    }
    export let questions = {}
    export let create = false;
    export let enableEditing = false;
    let updating = false
    let deleting = false;
    let creating = false;
    let oneArea;
    let twoArea;
    let updateQuestion = async () => {
        if (updating) {
            return
        }
        
        if (oneArea.value == item.one.text && twoArea.value == item.two.text) {
            return
        }
        updating = true
        let pathOne = params.id + "." + id + ".one.text"
        let pathTwo = params.id + "." + id + ".two.text"
        await db.collection('app').doc('questions').update({
            [pathOne]: oneArea.value,
            [pathTwo]: twoArea.value
        })
        
        updating = false;
    }

    let deleteQuestion = async () => {
        if (deleting) {
            return
        }
        deleting = true
        let path = params.id + "." + id
        await db.collection('app').doc('questions').update({
            [path]: firebase.firestore.FieldValue.delete()
        })
        deleting = false
    }

    let createQuestion = async () => {
        if (creating) {
            return
        }
        if (oneArea.value.length == 0 || twoArea.value.length == 0) {
            return
        }

        creating = true;
        let biggest = 1
        console.log(questions)
        if (questions && Object.keys(questions).length > 0) {
            console.log("inse")
            let allquestions =  Object.keys(questions).map((item) => Number(item))
            allquestions.sort((a, b) => a - b)
            console.log(allquestions)
             biggest = allquestions[allquestions.length - 1] + 1
        }
        console.log(biggest)
        let path = params.id + "." + biggest
        await db.collection('app').doc('questions').update({
            [path]: {
                one: {
                    text: oneArea.value,
                    clicks: 0
                },
                two: {
                    text: twoArea.value,
                    clicks: 0
                }
            }
        })
        creating = false;
        twoArea.value = "";
        oneArea.value = "";

    }
</script>


<tr>
    <td>
        {#if id}
            {id}
        {:else}
            TBD
        {/if}
    </td>
    <td>
        <div class="field">
            <div class="control">
                <textarea disabled={!create && !enableEditing}
                row="3" class="textarea is-info"
                bind:this={oneArea}
                placeholder="Info textarea">{item.one.text}</textarea>
            </div>
        </div>
    </td>
    <td>{item.one.clicks}</td>
    <td>
        <div class="field">
            <div class="control">
                <textarea disabled={!(create== true) && !(enableEditing == true)}
                 bind:this={twoArea}
                row="3" class="textarea is-info"
                placeholder="Info textarea">{item.two.text}</textarea>
            </div>
        </div>
    
    </td>
    <td>{item.two.clicks}</td>
    {#if !create}
        <td>
            <button disabled={!enableEditing} on:click={updateQuestion}
            class="button is-info">
            
            {#if !updating}
                Update
            {:else}
                <Spinner />
            {/if}
            </button>
        </td>
        <td>
            <button disabled={!enableEditing}
            on:click={deleteQuestion}
            class="button is-danger">
                {#if !updating}
                    Delete
                {:else}
                    <Spinner />
                {/if}
            </button>
        </td>
    {:else if create}

        <td>
            <button   on:click={createQuestion}
            class="button is-info">
            
            {#if !creating}
                Create
            {:else}
                <Spinner />
            {/if}
            </button>
        </td>
    {/if}
</tr>
