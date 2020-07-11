<style>
    .u-view {
        height: 100vh;
        display: flex;
        flex-direction: column;
        
        

    }
  
    .u-content {
        flex-grow: 1;
        padding: 10px 20px;
    }
    header {
        display: flex;
        align-items: center;
        justify-content: center;
        
        
        position: relative;
        margin-bottom: 8px;
    }
    .u-game-title {
        font-size: 30px;
        font-weight: bold;
    }


    .u-game-title-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    .u-back {
        position: absolute;
        left: 8px;
    }
    

    .u-option-box {
        width: 100%;
        background-color: white;
        border-radius: 18px;
        min-height: calc(100vh - 200px);

        padding: 10px;

        display: flex;
        flex-direction: column;
        align-items: center;

        position: relative;

        margin-bottom: 8px;
    }

    .u-option {
        padding: 0 16px;
        width: 100%;

        border-radius: 6px;

        display: flex;
        flex-grow: 1;

        position: relative;

        font-size: 19px;
        color: white;
        text-align: center;

        cursor: pointer;
    }

    .u-option.u-one, .u-choice.u-one {
        background-color: #FC6491;
    }


    .u-option.u-two, .u-choice.u-two {
        background-color: #3E4EA3;
    }


    .u-choice {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px 0 0 0;
    }
    .u-spacer {
        width: 100%;
        height: 18px;;
    }

    .u-option-text {
        margin: auto;
        font-family: 'Changa', sans-serif;
    }

    .u-ticked {
        position: absolute;
        bottom: 8px;
        right: 8px;
    }
    .absolute-center {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        bottom: -28px;
        z-index: 10;
    }

    .u-or {
        
        box-sizing: content-box;
        background: white;
        color: black;
        

        height: 20px;
        width: 20px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;

        box-shadow: 0 1px 1px rgba(0,0,0,0.25), 
              0 2px 2px rgba(0,0,0,0.20), 
              0 4px 4px rgba(0,0,0,0.15), 
              0 8px 8px rgba(0,0,0,0.10),
              0 16px 16px rgba(0,0,0,0.05);
        
    }

    .u-result {
        height: 40px;

        border: 3px solid white;
        border-radius: 16px;
        width: 80%;
        display: flex;
        overflow: hidden;
    }

    .u-button {
        border: 2px solid white;
        font-weight: bold;
        font-size: 18px;
        border-radius: 12px;
        margin: 0 auto;


        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 8px 2px 8px;

        cursor: pointer;
    }

    
</style>


<script>
    import {activePackage, analytics} from '../store.js'
    export let mySwiper = {}
    export let option = {
        one: {
            text: "Nod5lo na9raw w njibo A",
            clicks: 958
        },
        two: {
            text: "Nel3abo belote",
            clicks: 600
        },
    }
    let selectedOption = "none"

    let doChoose = (choice) => {
        option[choice].clicks += 1
        selectedOption = choice
    }

    let sliderNext = () => {
        if (mySwiper.activeIndex == mySwiper.slides.length - 1) {
            goHome('finished')
            return
        }
        
        mySwiper.slideNext(500)
        console.log(mySwiper.activeIndex)
        console.log(mySwiper.slides.length)
        
    }

    let goHome = (endtype) => {
        mySwiper.slideTo(0, 500)
        document.body.style.overflow = "auto"
        setTimeout(() => {
            if (endtype == "finished") {
                analytics.logEvent('package_finished', {id: $activePackage})
            } else {
                analytics.logEvent('package_terminated', {id: $activePackage})
            }
            mySwiper.update()
            $activePackage = 0
        }, 500)
    }

    let oneCalc = Math.round(((option.one.clicks/(option.one.clicks + option.two.clicks))) * 100)
    let twoCalc = 100 - oneCalc
    if (isNaN(oneCalc)) {
        console.log(oneCalc)
        oneCalc = 100
        twoCalc = 0
    }
</script>

<div class="u-view">
    <div class="u-content">
        <header>
            <img on:click={goHome} class="u-back" src="/imgs/misc/back.png" alt="">
            <div class="u-game-title-container">
                <div class="u-game-title">Would</div>
                <div class="u-game-title">you Rather</div>
            </div>
            
        </header>
        
        <div class="u-option-box">
            <div on:click={() => {doChoose('one')}} class="u-option u-one">
                <div class="u-option-text">
                    {option.one.text}
                </div>
                {#if selectedOption == "one"}
                    <img class="u-ticked" src="/imgs/misc/tick-01.png" alt="ticked">
                {/if}
                {#if selectedOption == "none"}
                    <div class="u-or absolute-center">
                        or
                    </div>
                {:else}
                    <div class="absolute-center u-result">
                        <div class="u-choice u-one"
                        style={"width: "+ oneCalc + "%;" }>
                            {#if oneCalc > 12}
                                {oneCalc} %
                            {/if}
                        </div>

                        <div class="u-choice u-two"
                        style={"width: "+ twoCalc + "%;" }>
                            {#if twoCalc > 12}
                                {twoCalc}
                            {/if}
                            
                        </div>

                    </div>
                {/if}
            </div>
                <div class="u-spacer"></div>
            <div on:click={() => {doChoose('two')}} class="u-option u-two">
                <div class="u-option-text">
                    {option.two.text}
                </div>
                {#if selectedOption == "two"}
                    <img class="u-ticked" src="/imgs/misc/tick-01.png" alt="ticked">
                {/if}
            </div>
            

            
        
        </div>

        {#if selectedOption != "none"}
            <div on:click={sliderNext} class="u-button">
                NEXT
            </div>
        {/if}
    
    </div>

    <footer>

    </footer>

</div>