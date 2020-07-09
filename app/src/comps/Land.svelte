<style>
    .u-view {
        height: 100vh;
        display: flex;
        flex-direction: column;
        
        

    }
    .r {
        background: #6190E8;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #A7BFE8, #6190E8);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #A7BFE8, #6190E8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    header {
        display: flex;
        align-items: center;
        flex-direction: column;

        margin-bottom: 16px
    }
    .u-game-title {
        font-size: 36px;
        font-weight: bold;
    }

    .u-page-title {
        font-size: 22px;
        font-weight: bold;
    }

    header h2 {
        margin-bottom: 8px;
    }
    

    .u-content {
        flex-grow: 1;
        padding: 20px;
    }




    .u-categories {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .u-categorey {
        min-height: 100px;
        padding: 8px;
        width: 100%;
        margin-bottom: 16px;

        display: flex;
        align-items: center;

        border: 8px solid white;
        border-radius: 24px;

        cursor: pointer;
    }
    .u-cat-image-container {
        width: 110px;
        display: flex;

        margin-right: 16px;

    }
    .u-cat-image {
        display: block;
        max-height: 90px;
        margin: auto;
    }
    .u-cat-text {
        
    }

    .u-cat-title {
        font-size: 27px;
        font-weight: bold;
    }
</style>



<script>
    import {activePackage, questions} from '../store.js'

    let categories = [
        {
            id: '1001',
            title: 'Love',
            subtitle: 'Package',
            img: 'heart-01.png',
            backgroundColor: '#F94865',
            textColor: '#100406',
            numberQuestions: '30',
        },
        {
            id: '1002',
            title: 'Food',
            subtitle: 'Package',
            img: 'food-01.png',
            backgroundColor: '#F9CF29',
            textColor: '#191918',
            numberQuestions: '30',
        },
        {
            id: '1003',
            title: 'Tech Lovers',
            subtitle: 'Package',
            img: 'phone-01.png',
            backgroundColor: '#152033',
            textColor: '#E6E6E6',
            numberQuestions: '30',
        }
    ]


    let setActivePackage = (num) => {
        $activePackage = num
    }
</script>

<div class="u-view">
    <div class="u-content">
        <header>
            <div class="u-game-title">Would you Rather</div>
            <div class="u-page-title">Questions</div>
        </header>
        <div class="u-categories">
            {#each categories as category}
                <div on:click={() => {setActivePackage(category.id)}} class="u-categorey"
                style={"background-color: " + category.backgroundColor + ";"}>
                    <div class="u-cat-image-container">
                        <img class="u-cat-image" src={"/imgs/" + category.img} alt={category.img}>
                    </div>
                    
                    <div class="u-cat-text" style={"color: " + category.textColor + ";"}>
                        <div class="u-cat-title">
                            {category.title}
                        </div>
                        <div class="u-cat-subtitle">
                            {category.subtitle}
                        </div>
                        <div class="u-cat-questions">
                            {Object.keys(questions[category.id]).length} Questions
                        </div>
                    </div>

                </div>
            {/each}
        </div>
    
    </div>

</div>
