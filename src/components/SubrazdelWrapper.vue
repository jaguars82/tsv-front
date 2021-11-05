<template>
  <div>
    <p><span>{{ identificator }}</span> <span>{{ type }}</span> <span>{{ realName }}</span></p>
    <component :id="identificator" :is="currentModule" />
  </div>
</template>

<script>
  export default {
    name: 'SubrazdelWrapper',
    props: ['identificator', 'type', 'realName'],
    components: { 
      Anketa: () => import('../pages/modules/Anketa'),
      Calendar: () => import('../pages/modules/Calendar'),
      Dashboard: () => import('../pages/modules/Dashboard'),
      Fonoteka: () => import('../pages/modules/Fonoteka'),
      Forums: () => import('../pages/modules/Forums'),
      Fotogallery: () => import('../pages/modules/Fotogallery'),
      Gramota: () => import('../pages/modules/Gramota'),
      Greeting: () => import('../pages/modules/Greeting'),
      GuestBook: () => import('../pages/modules/GuestBook'),
      Lenta: () => import('../pages/modules/Lenta'),
      MessageToAdmin: () => import('../pages/modules/MessageToAdmin'),
      News: () => import('../pages/modules/News'),
      Page: () => import('../pages/modules/Page'),
      PicsPresentation: () => import('../pages/modules/PicsPresentation'),
      SiteMap: () => import('../pages/modules/SiteMap'),
      Slider: () => import('../pages/modules/Slider'),
      Spoilers: () => import('../pages/modules/Spoilers'),
      TechCard: () => import('../pages/modules/TechCard'),
      Tests: () => import('../pages/modules/Tests'),
      Timetable: () => import('../pages/modules/Timetable'),
      Contests: () => import('../pages/modules/portfolio/Contests'),
      Education: () => import('../pages/modules/portfolio/Education'),
      Events: () => import('../pages/modules/portfolio/Events'),
      Greetings: () => import('../pages/modules/portfolio/Greetings'),
      Publications: () => import('../pages/modules/portfolio/Publications'),
      Qualification: () => import('../pages/modules/portfolio/Qualification'),
      StudentAchievments: () => import('../pages/modules/portfolio/StudentAchievments'),
      Visitka: () => import('../pages/modules/portfolio/Visitka')
    },
    computed: {
      currentModule () {
        const modulesMap = {
          anketa: 'anketa',
          calendar: 'calendar',
          dashboard: 'dashboard',
          fonoteka: 'fonoteka',
          forums: 'forums',
          fotogallery: 'fotogallery',
          gramota: 'gramota',
          guestbook: 'guest-book',
          greeting: 'greeting',
          lenta: 'lenta',
          messagetoadmin: 'message-to-admin',
          news: 'news',
          common_content: 'page',
          pics_presentation: 'pics-presentation',
          sitemap: 'site-map',
          slider: 'slider',
          spoilers: 'spoilers',
          techcard: 'tech-card',
          tests: 'tests',
          timetable: 'timetable',
          contests: 'contests',
          education: 'education',
          events: 'events',
          greetings: 'greetings',
          publications: 'publications',
          qualification: 'qualification',
          p_achievments: 'student-achievments',
          visitka: 'visitka'
        }
        return modulesMap[this.type]
      }
    }
  }
 
</script>