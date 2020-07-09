<style>
    .swiper-container {
        width: 100%;
        height: 100vh;

        max-width: 600px;
        margin: auto;
    }

</style>


<script>
    import {activePackage, questions} from './store.js'
    import Land from './comps/Land.svelte'
    import Question from './comps/Question.svelte'
    import {onMount} from 'svelte'
    let mySwiper = {}
    onMount(async () => {
        mySwiper = new Swiper('.swiper-container', {
            speed: 400
        });
    })
    console.log( questions)
    activePackage.subscribe((value) => {
        console.log(value)
        setTimeout(() => {
            mySwiper.update()
            mySwiper.slideNext(500)
        }, 50)
    })
</script>


<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <Land />
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