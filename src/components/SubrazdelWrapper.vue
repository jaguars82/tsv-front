<template>
  <div>
    <p><span>{{ identificator }}</span> <span>{{ type }}</span> <span>{{ realName }}</span></p>

    <anketa :id="identificator" v-if="type === 'anketa'"></anketa>
    <calendar :id="identificator" v-if="type === 'calendar'"></calendar>
    <dashboard :id="identificator" v-if="type === 'dashboard'"></dashboard>
    <fonoteka :id="identificator" v-if="type === 'fonoteka'"></fonoteka>
    <forums :id="identificator" v-if="type === 'forums'"></forums>
    <fotogallery :id="identificator" v-if="type === 'fotogallery'"></fotogallery>
    <gramota :id="identificator" v-if="type === 'gramota'"></gramota>
    <guest-book :id="identificator" v-if="type === 'guestbook'"></guest-book>
    <greeting :id="identificator" v-if="type === 'greeting'"></greeting>
    <lenta :id="identificator" v-if="type === 'lenta'"></lenta>
    <message-to-admin :id="identificator" v-if="type === 'messagetoadmin'"></message-to-admin>
    <news :id="identificator" v-if="type === 'news'"></news>
    <page :id="identificator" v-if="type === 'common_content'"></page>
    <pics-presentation :id="identificator" v-if="type === 'pics_presentation'"></pics-presentation>
    <site-map :id="identificator" v-if="type === 'sitemap'"></site-map>
    <slider :id="identificator" v-if="type === 'slider'"></slider>
    <spoilers :id="identificator" v-if="type === 'spoilers'"></spoilers>
    <tech-card :id="identificator" v-if="type === 'techcard'"></tech-card>
    <tests :id="identificator" v-if="type === 'tests'"></tests>
    <timetable :id="identificator" v-if="type === 'timetable'"></timetable>
    <contests :id="identificator" v-if="type === 'contests'"></contests>
    <education :id="identificator" v-if="type === 'education'"></education>
    <events :id="identificator" v-if="type === 'events'"></events>
    <greetings :id="identificator" v-if="type === 'greetings'"></greetings>
    <publications :id="identificator" v-if="type === 'publications'"></publications>
    <qualification :id="identificator" v-if="type === 'qualification'"></qualification>
    <student-achievments :id="identificator" v-if="type === 'p_achievments'"></student-achievments>
    <visitka :id="identificator" v-if="type === 'visitka'"></visitka>

  </div>
</template>

<script>
  /* Common Modules */
  import Anketa from '../pages/modules/Anketa'
  import Calendar from '../pages/modules/Calendar'
  import Dashboard from '../pages/modules/Dashboard'
  import Fonoteka from '../pages/modules/Fonoteka'
  import Forums from '../pages/modules/Forums'
  import Fotogallery from '../pages/modules/Fotogallery'
  import Gramota from '../pages/modules/Gramota'
  import GuestBook from '../pages/modules/GuestBook'
  import Greeting from '../pages/modules/Greeting'
  import Lenta from '../pages/modules/Lenta'
  import MessageToAdmin from '../pages/modules/MessageToAdmin'
  import News from '../pages/modules/News'
  import Page from '../pages/modules/Page'
  import PicsPresentation from '../pages/modules/PicsPresentation'
  import SiteMap from '../pages/modules/SiteMap'
  import Slider from '../pages/modules/Slider'
  import Spoilers from '../pages/modules/Spoilers'
  import TechCard from '../pages/modules/TechCard'
  import Tests from '../pages/modules/Tests'
  import Timetable from '../pages/modules/Timetable'
  /* Portfolio Modules */
  import Contests from '../pages/modules/portfolio/Contests'
  import Education from '../pages/modules/portfolio/Education'
  import Events from '../pages/modules/portfolio/Events'
  import Greetings from '../pages/modules/portfolio/Greetings'
  import Publications from '../pages/modules/portfolio/Publications'
  import Qualification from '../pages/modules/portfolio/Qualification'
  import StudentAchievments from '../pages/modules/portfolio/StudentAchievments'
  import Visitka from '../pages/modules/portfolio/Visitka'

  export default {
    props: ['identificator', 'type', 'realName'],
    components: { 
      Anketa,
      Calendar,
      Dashboard,
      Fonoteka,
      Forums,
      Fotogallery,
      Gramota,
      Greeting,
      GuestBook,
      Lenta,
      MessageToAdmin,
      News,
      Page,
      PicsPresentation,
      SiteMap,
      Slider,
      Spoilers,
      TechCard,
      Tests,
      Timetable,
      Contests,
      Education,
      Events,
      Greetings,
      Publications,
      Qualification,
      StudentAchievments,
      Visitka
    }
  }
 
</script>