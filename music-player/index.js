const musicPlayer = Vue.createApp({})

musicPlayer.component('player',{
    data(){
        return {
            path:'/Users/takahashisusumunari/Movies/02-LOSER.mp3'
        }
    },
    template: `
        <audio controls v-bind:src=path type="audio/mp3">
            <p>お使いの環境では再生できません。</p>
        </audio>
    `
})
const musicInfo = {
    data() {
        return {
            id: Number,
            album: String,
            title: String,
            artist: String,
            track_number: Number,
            genre: String,
            date: String,
            path: String
       }
    }
}
musicPlayer.component('music-list',{
    components: {
        'music-info':musicInfo
    },
    data: {
        musics:[]
    },
    created() {
        
    }
})


musicPlayer.mount('#music-player')