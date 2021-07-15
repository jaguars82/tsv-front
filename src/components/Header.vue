<template>
  <div>
    <div v-if="loading">
      Идёт загрузка...............
    </div>

    <div v-else id="header_parent" :style="{position: 'relative', minHeight: backgroundMode === '1' ? `${staticHeight}px` : 0}">
      
      <!--Header Background -->
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
      <!-- Header Background End -->

      <!-- Header Avatar -->
      <div id="avatar"
        :style="'position: absolute; z-index: 2; top:' + avatarTop + '%; left:' + avatarLeft + '%;'"
      >
        <div id="avatar_box">

          <img
            v-if="avatarMode === '1'"
            id="hdr_avatar"
            src="https://test.teacher-info.net/grafika/custom_page_elements/header_foto.jpg"
            :style="'height:' + staticAvatarHeight + 'px; margin: 0; padding: 0;'"
          >

          <div
            v-if="avatarMode === '2'"
            id="avatar_box1"
            style="overflow: hidden !important; height: 260px; width: 260px;"
          >
              <div class="headerfoto" u="slides" style="overflow: hidden; left: 0px; top: 0px; width: 260px; height: 260px; box-shadow: 0 0 2px rgba(0,0,0,.5);">

                <div v-for="(avaSlide, index) in avatarSlides" :key="index">

                  <img data-u="image" :src="`https://test.teacher-info.net/grafika/design/header/slider_ava/${avaSlide.filename}`" />

                  <div
                    v-if="avaSlide.main_txt"
                    data-u="caption"
                    data-t="0"
                    class="text-center"
                    style="position: absolute; top: -100px; left: 0; width: 100%; color: rgb(255,255,255); background-color: rgba(0,0,0,.5); font-size: 1em; padding: 2px 0;"
                  >
                    <span style="padding: 0 10px;">{{ avaSlide.main_txt }}</span>
                  </div>
                  
                  <div
                    v-if="avaSlide.additional_txt"
                    data-u="caption"
                    data-t="1"
                    class="text-center"
                    style="position: absolute; bottom: 0; left: 0; width: 100%; height: 50px; opacity: 0; color: rgb(255,255,255); background-color: rgba(0,0,0,.5); font-size: 1em;"
                  >
                    <span style="padding: 0 10px;">{{ avaSlide.additional_txt }}</span>
                  </div>

                </div>

              </div>
          </div>

        </div>
        
      </div>
      <!-- Header Avatar End -->

      <adm-btn :actions="admin.actions"></adm-btn>

    </div>

  </div>
</template>

<script>

/* eslint-disable */

import axios from 'axios'
import adminButton from './admin/adminButton.vue'

export default {
  components: { adminButton },
  data () {
    return {
      loading: true,
      // backgroundMode: '1',
      // staticBackground: '',
      // headerSlides: [],
      // headerSDuration: '',
      // headerSTransitions: ''
      staticHeight: 0,
      staticAvatarHeight: 0,
      admin: {
        actions: [
          {
            index: 1,
            type: 'delete',
            label: 'Удалить',
            dialog: false
          },
          {
            index: 2,
            type: 'edit',
            label: 'Редактировать',
            dialog: false,
            action: 'headerEdit'
          },
          {
            index: 3,
            type: 'category',
            label: 'Аватар',
            icon: '',
            children: [
              {
                index: 1,
                type: 'edit',
                label: 'Настроить',
                dialog: false,
                action: 'headerAvatarEdit'
              },
              {
                index: 2,
                type: 'delete',
                label: 'Удалить',
                dialog: false
              }
            ]
          },
          {
            index: 4,
            type: 'add',
            label: 'Добавить',
            dialog: false
          },
        ]
      }
    }
  },
  computed: {
    backgroundMode () {
      return this.$store.getters.backgroundMode
    },
    staticBackground () {
      return this.$store.getters.staticBackground
    },
    headerSlides () {
      return this.$store.getters.headerSlides
    },
    headerSDuration () {
      return this.$store.getters.headerSDuration
    },
    headerSTransitions () {
      return this.$store.getters.headerSTransitions
    },
    avatarMode () {
      return this.$store.getters.avatarMode
    },
    avatarHeight () {
      return this.$store.getters.avatarHeight
    },
    avatarLeft () {
      return this.$store.getters.avatarLeft
    },
    avatarTop () {
      return this.$store.getters.avatarTop
    },
    avatarSlides () {
      return this.$store.getters.avatarSlides
    },
    avatarSDuration () {
      return this.$store.getters.avatarSDuration
    },
    avatarSTransitions () {
      return this.$store.getters.avatarSTransitions
    }
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
          this.loading = false

          const headerData = {
            backgroundMode: response.data.header_mode,
            staticBackground: this.$store.getters.repository + 'grafika/design/header/' + response.data.header_image,
            headerSlides: response.data.head_slides,
            headerSDuration: response.data.head_slider_params.slide_duration,
            headerSTransitions: response.data.head_slider_params.transitions,
            avatarMode: response.data.ava_mode,
            avatarHeight: response.data.header_ava_height,
            avatarLeft: response.data.header_ava_left,
            avatarTop: response.data.header_ava_top,
            avatarSlides: response.data.head_ava_slides,
            avatarSDuration: response.data.head_ava_slider_params.slide_duration,
            avatarSTransitions: response.data.head_ava_slider_params.transitions,
          }

          this.$store.dispatch('setHeaderParams', headerData)
          
        })
    },
    fetchData () {

      if (this.backgroundMode === '2' || this.avatarMode === '2') {

        let $JssorSlider$ = window.$JssorSlider$

        /** A function to initialize JSSOR slider instanse */
        function initSlider(sliderContainerID, sliderOptions) {
          return new Promise(function(resolve){
            setTimeout( function() { 
              let slider =  new $JssorSlider$(sliderContainerID, sliderOptions) 
              resolve(slider)
            }, 5)
            
          })
        }

        /** A function to make JSSOR slider responsive */
        function ScaleSlider(sliderInstance, sliderConteinerID, sliderInitialWidth) {

          let sliderIWidth
          if (sliderInstance.data && sliderInstance.data.sliderInitialWidth) {
            sliderIWidth = sliderInstance.data.sliderInitialWidth
          } else if (sliderInitialWidth) {
            sliderIWidth = sliderInitialWidth
          } else {
            sliderInitialWidth = false
          }

          const container = sliderInstance.data ? sliderInstance.data.sliderConteinerID : sliderConteinerID
          const parentWidth = sliderIWidth ? $(window).width() / 1200 * sliderIWidth : $('#' + container).parent().width()
          
          if (parentWidth) {
            if(sliderInstance.data) {
              sliderInstance.data.slider.$ScaleWidth(parentWidth)
            } else {
              sliderInstance.$ScaleWidth(parentWidth)
            }
          } else {
            window.setTimeout(ScaleSlider(sliderInstance, sliderConteinerID, sliderIWidth), 30)
          }
        }

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
          
          const _SlideshowTransitions = transitions
          const _CaptionTransitions = [
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

          //let jssor_slider1
          //setTimeout( function() { jssor_slider1 =  new $JssorSlider$('header_conteiner', options) }, 5)

          // responsive code begin
          initSlider('header_conteiner', options)
          .then((result) => {
            ScaleSlider(result, 'header_conteiner') // scale slider on document load
            $(window).on("resize orientationchange", { slider: result, sliderConteinerID: 'header_conteiner' }, ScaleSlider ) // scale slider on window size change
          })
          // responsive code end
        }

        if (this.avatarMode === '2') {

          /* converting array of strings to the array of objects */
          let transitions = this.avatarSTransitions.map(function(str){
            const obj = {}
            if(str&&typeof str ==='string'){
                const objStr = str.match(/\{(.)+\}/g)
                eval("obj ="+objStr)
            }
            return obj
          })
          
          const _SlideshowTransitions = transitions
          const _CaptionTransitions = [
            [{b:0,d:600,y:100}],
            [{b:-1,d:1,o:-1},{b:0,d:600,o:1,e:{o:5}}]
          ]
          const options_ava = { 
            $AutoPlay: true, 
            $DragOrientation: 0, 
            $PauseOnHover: 0,
            // $SlideHeight: 300,
            $AutoPlayInterval: Number(this.avatarSDuration),
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

          //let jssor_slider2
          //setTimeout( function() { jssor_slider2 = new $JssorSlider$('avatar_box1', options_ava) }, 1)

          initSlider('avatar_box1', options_ava)
          .then((result) => {
            ScaleSlider(result, 'avatar_box1', 260) // scale slider on document load
            $(window).on("resize orientationchange", { slider: result, sliderConteinerID: 'avatar_box1', sliderInitialWidth: 260 }, ScaleSlider ) // scale slider on window size change
          })
          
          /*
          //responsive code begin
          function ScaleAvaSlider() {
            let avaWidth = $(window).width() / 1200 * 260
            if (avaWidth) {
              jssor_slider2.$ScaleWidth(avaWidth)
            } else {
              window.setTimeout(ScaleAvaSlider, 30)
            }
            //console.log(jssor_slider2)
          }
          //Scale slider after document ready
          ScaleAvaSlider()

          //Scale slider while window load/resize/orientationchange.
          $(window).bind("load", ScaleAvaSlider)
          $(window).bind("resize", ScaleAvaSlider)
          $(window).bind("orientationchange", ScaleAvaSlider)
          //responsive code end
          */
        }
      }
    },
    changeHeaderHeight () {
      const scaleRatio = $(window).width() / 1200
      this.staticHeight = scaleRatio * 300
      this.staticAvatarHeight = scaleRatio * 260
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