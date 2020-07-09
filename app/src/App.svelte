<style>
    .swiper-container {
        width: 100%;
        

        max-width: 600px;
        margin: auto;
    }

</style>


<script>
    import {activePackage, db, analytics} from './store.js'
    import Land from './comps/Land.svelte'
    import Question from './comps/Question.svelte'
    import {onMount} from 'svelte'
    let mySwiper = {}
    onMount(async () => {
        mySwiper = new Swiper('.swiper-container', {
            speed: 400
        });
    })
    
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
    let init = false
    Promise.all([questionsResolution, packagesResolution]).then(() => {
        init = true
        analytics.logEvent('app_initialized')
        setTimeout(() => {
            document.getElementById('u-loader').parentNode.removeChild(document.getElementById('u-loader'))
        },500)
    })

    activePackage.subscribe((value) => {
        console.log(value)
        setTimeout(() => {
            analytics.logEvent('package_started', {id: value})
            mySwiper.update()
            mySwiper.slideNext(500)
        }, 50)
    })
</script>


    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                {#if init }
                    <Land {packages} {questions} />
                {/if}
            </div>
            {#if $activePackage}
                {#each Object.entries(questions[$activePackage]) as [num, data]}
                    <div class="swiper-slide">
                        <Question {mySwiper} option={data} />
                    </div>
                {/each}
            {/if}
        </div>
        
    </div>
