<template>

  <div
    data-u="slides"
    :style="templateOptions.containerStyle"
  >
  
    <div v-for="(slide, index) in slides" :key="index">
      
      <img data-u="image" :src="`${templateOptions.slideImgDirectory}${slide.filename}`" />
      
      <div
        v-if="slide.main_txt"
        data-u="caption"
        data-t="0"
        :class="templateOptions.text1.class"
        :style="templateOptions.text1.style"
      >
        <span :style="templateOptions.text1.spanStyle">{{ slide.main_txt }}</span>
      </div>
      
      <div
        v-if="slide.additional_txt"
        data-u="caption"
        data-t="1"
        :class="templateOptions.text2.class"
        :style="templateOptions.text2.style"
      >
        <span :style="templateOptions.text2.spanStyle">{{ slide.additional_txt }}</span>
      </div>
      
    </div>

  </div>

</template>

<script>

/* eslint-disable */

export default {
  props: ['templateOptions', 'slides', 'sliderOptions'],
  created () {

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

    initSlider(this.templateOptions.parentTegID, this.headerSliderOptions)
    .then((result) => {
      ScaleSlider(result, this.templateOptions.parentTegID) // scale slider on document load
      $(window).on("resize orientationchange", { slider: result, sliderConteinerID: this.templateOptions.parentTegID }, ScaleSlider ) // scale slider on window size change
    })
    
  }
}
</script>