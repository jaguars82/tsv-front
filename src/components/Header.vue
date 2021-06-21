<template>
  <div>
    <div v-if="loading">
      Идёт загрузка...............
    </div>

    <div v-else id="header_parent" :style="{position: 'relative', minHeight: backgroundMode === '1' ? `${staticHeight}px` : 0}">
      
      <div
        v-if="backgroundMode === '1'"
        id="header_conteiner"
        :style="{ backgroundImage: `url(${staticBackground})`, backgroundPosition: 'center', backgroundSize: 'cover', minHeight: `${staticHeight}px`}"
      ></div>

      <div v-else-if="backgroundMode === '2'"
        id="header_conteiner"
        style="overflow: hidden !important; height: 300px; width: 1200px;"
      >

        <div
          id="hdr_slides"
          data-u="slides"
          class="headerheight"
          style="position: absolute; overflow: hidden !important; left: 0px; top: 0px; height: 300px; width: 1200px;"
        >
        
          <div v-for="(slide, index) in headerSlides" :key="index">
            
            <img data-u="image" :src="`https://test.teacher-info.net/grafika/design/header/slider_bg/${slide.filename}`" />
            
            <div
              v-if="slide.main_txt"
              data-u="caption"
              data-t="0"
              class="text-right"
              style="position: absolute; bottom: 50px; left: -100%; width: 100%; color: rgb(255,255,255); background-color: rgba(0,0,0,.6); font-size: 1.5em; padding: 2px 0;"
            >
              <span style="padding: 0 50px;">{{ slide.main_txt }}</span>
            </div>
            
            <div
              v-if="slide.additional_txt"
              data-u="caption"
              data-t="1"
              class="text-right"
              style="position: absolute; bottom: 0; left: 0; opacity: 0; width: 100%; height: 50px; color: rgb(255,255,255); background-color: rgba(0,0,0,.5); font-size: 1.1em;"
            >
              <span style="padding: 0 50px;">{{ slide.additional_txt }}</span>
            </div>
            
          </div>

        </div>
      
      </div>

    </div>

  </div>
</template>

<script>

/* eslint-disable */

import axios from 'axios'

export default {
  data () {
    return {
      loading: true,
      backgroundMode: '1',
      staticBackground: '',
      staticHeight: 0,
      headerSlides: [],
      headerSDuration: '',
      headerSTransitions: ''
    }
  },
  computed: {
    /*
    staticWidth () {
      return $(window).width() 
    },
    staticHeight () {
      return $(window).width() / 1200 * 300
    }

    
    loading () {
      // return this.$store.getters.initLoading
      const transitions = this.$store.getters.headerSTransitions
      if(transitions) {
        return false
      } else {
        return true
      }
    },
    header () {
      return this.$store.getters.header
    },
    backgroundMode () {
      return this.$store.getters.backgroundMode
    },
    headerSlides () {
      return this.$store.getters.headerSlides
    },
    headerSDuration () {
      return this.$store.getters.headerSDuration
    },
    headerSTransitions () {
      // return this.$store.getters.headerSTransitions
      const transitions = this.$store.getters.headerSTransitions
      if(transitions) {
        return transitions
      } else {
        return 'fuck!'
      }
    }
    */
  },
  watch: {
    loading: function () {
      this.fetchData()
    }
  },
  methods: {
    getData () {
      this.loading = true
      axios.get('http://test.teacher-info.net/vserver/server.php?queryMode=develop&query_name=init')
        .then(response => {
          // console.log(response.data)
          this.backgroundMode = response.data.header_mode
          this.staticBackground = this.$store.getters.repository + 'grafika/design/header/' + response.data.header_image
          this.headerSlides = response.data.head_slides
          this.headerSDuration = response.data.head_slider_params.slide_duration
          this.headerSTransitions = response.data.head_slider_params.transitions.split('-')
          this.loading = false
        })
    },
    fetchData () {

      if (this.backgroundMode === '2') {

        /* converting array of strings to the array of objects */
        let transitions = this.headerSTransitions.map(function(str){
          const obj = {}
          if(str&&typeof str ==='string'){
              const objStr = str.match(/\{(.)+\}/g)
              eval("obj ="+objStr)
          }
          return obj
        })
        let $JssorSlider$ = window.$JssorSlider$
        const _SlideshowTransitions = transitions
        const _CaptionTransitions = [
        // [{b:0,d:600,x:startHeaderWidth}],
          [{b:0,d:600,x:1200}],
          [{b:-1,d:1,o:-1},{b:0,d:600,o:1,e:{o:5}}]
        ]
        const options = { 
          $AutoPlay: true, 
          $DragOrientation: 0, 
          $PauseOnHover: 0,
          // $SlideHeight: headerStartHeight,
          $SlideHeight: 300,
          $AutoPlayInterval: Number(this.headerSDuration),
          $CaptionSliderOptions: {
            $Class: $JssorCaptionSlideo$,
            $Transitions: _CaptionTransitions
          },
          $SlideshowOptions: {
            $Class: $JssorSlideshowRunner$,
            $Transitions: _SlideshowTransitions, // [Required] An array of slideshow transitions to play slideshow 
            $TransitionsOrder: 1
          }
        }

        var jssor_slider1
        setTimeout( function() { jssor_slider1 =  new $JssorSlider$('header_conteiner', options) }, 5)

        //responsive code begin
        function ScaleSlider() {
          const parentWidth = $('#header_conteiner').parent().width()
          if (parentWidth) {
            jssor_slider1.$ScaleWidth(parentWidth)
          } else {
            window.setTimeout(ScaleSlider, 30)
          }
        }
        //Scale slider after document ready
        ScaleSlider()

        //Scale slider while window load/resize/orientationchange.
        $(window).bind("load", ScaleSlider)
        $(window).bind("resize", ScaleSlider)
        $(window).bind("orientationchange", ScaleSlider)
        //responsive code end

      }
      
    },
    changeHeaderHeight () {
      this.staticHeight = $(window).width() / 1200 * 300
    }
  },
  created () {
    window.addEventListener('resize', this.changeHeaderHeight)
    this.changeHeaderHeight()
    this.getData()
  },
  destroyed () {
    window.removeEventListener('resize', this.changeHeaderHeight)
  }
}

</script>