<style>

    .u-identification {
        display: flex;
        flex-direction: column;

        max-width: 700px;
        background-color: white;
        padding: 20px;
        margin: 16px auto 0 auto;
        border-radius: 4px;
    }

    .title.is-5 {
        margin-bottom: 12px;
    }

    .u-row {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
    }
    .u-row:last-child {
        margin-bottom: 0;
    }
    .fifty {
        width: 48%;

    }

    .upload-container {
        width: 80%;
        margin: 0 auto
    }

    .upload-hide {
        width: 100%;
        height: 100%;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: 3;
        cursor: pointer;

    }

    .label-upload {
        margin: auto;

        background-color: #586A7B;
        display:flex;
        flex-direction: column;
        position: relative;
        cursor: pointer;

        width: 150px;
        padding: 0.5em;
        background-color: #6362EC;
        border-radius: 4px;
        color: white;
        text-align: center;
    }

    .button.is-success {
        margin: auto;
    }

</style>


<script>
    import {itemBaseStorageLink, storage, db} from '../store.js'
    import Spinner from './Spinner.svelte'
    export let params = {}


    export let info = {
        label: "",
        title: "",
        backgroundColor: "",
        textColor: ""
    }
    let error = undefined
    let uploadPercentage = 0
    let uploadPackImage = (f) => {
        return new Promise(async (resolve, reject) => {
            let create = storage.ref().child('packages/' + params.id);
            let upping = create.put(f)
            let listen = (snapshot) => {
                uploadPercentage = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            }
            let errfunc = (er) => {
                console.log(er)
                reject(er)
            }
            let successfunc = async () => {
                resolve(await upping.snapshot.ref.getDownloadURL())
            }
            upping.on('state_changed', listen, errfunc, successfunc)
        })
    }

    let handledrop = (event) => {
        packageImage  = event.dataTransfer.files[0]
    }

    let handleInputFile = (event) =>  {
        if (event.target.files.length > 0) {
            packageImage = event.target.files[0]
        } else {
             packageImage =  undefined
        }
    }
    let handlePackageCreation = async () => {
        if (submitting) {
            return
        }
        submitting = true
        error = undefined
        let fields = Object.entries(info).map(([key, item]) => {
            if (key != "img") {
                return item
            }
        }).filter((item) => item != undefined) 

        if (fields.some((item) => [undefined, ""].includes(item))) {
            submitting = false
            error = "Fill out all fields"
            return 
        }


        if (!info.img) {
            if (packageImage == undefined) {
                submitting = false
                error = "Upload an image"
                return
            }
            let downloadurl = await uploadPackImage(packageImage)

            let replacer = itemBaseStorageLink + encodeURIComponent("packages/" + params.id) + "?alt=media&token="

            let token = downloadurl.replace(replacer, "")

            info.img = token
        }
        

        await db.collection("app").doc("packages").update({[String(params.id)]: info})
        submitting = false
        packageImage = undefined;
    
    }
    let submitting = false;
    let packageImage = undefined;

</script>









<form  on:drop|preventDefault={handledrop}
on:dragover|preventDefault|stopPropagation
on:submit|preventDefault={handlePackageCreation}
class="u-identification">
    {#if error}
        <div class="notification is-danger">
            <button on:click={() => {error = undefined}} class="delete"></button>
            {error}
        </div>
    {/if}
    <div class="u-row">
        <div class="fifty">
            <h5 class="title is-5">Label</h5>
            <input bind:value={info.label} class="input" type="text" placeholder="Label">
        </div>

        <div class="fifty">
            <h5 class="title is-5">Title</h5>
            <input bind:value={info.title} class="input" type="text" placeholder="Title">
        </div>
    </div>

    <div class="u-row">
        <div class="fifty">
            <h5 class="title is-5">Background Color</h5>
            <input bind:value={info.backgroundColor} class="input" type="text" placeholder="Hex">
        </div>

        <div class="fifty">
            <h5 class="title is-5">Text Color</h5>
            <input bind:value={info.textColor} class="input" type="text" placeholder="Hex">
        </div>
    </div>

    <div class="u-row">
        <div class="upload-container">
            
            <label class="label-upload" for="logo-upload">
                <span>
                    {#if packageImage}
                        {packageImage.name}
                    {:else if info.img }
                        Image Assigned
                    {:else}
                        Package Image
                    {/if}
                </span>
                <input  on:change={handleInputFile}   type="file"  size="40" class="upload-hide" id="logo-upload" accept=".png,.jpg" aria-invalid="false">
            
            
            </label>
        </div>
    </div>

    <div class="u-row">
        
            <button style="width: 84px;" type="submit" class="button is-success">
                {#if !submitting}
                    Submit
                {:else}
                    <Spinner dimension="25px;" />
                {/if}
            </button>
        
        
            
    
    </div>
</form>