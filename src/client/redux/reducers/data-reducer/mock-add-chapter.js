export default [
  {
    STATE: {},
    PAYLOAD: {
      currentPageIdx: `3`,
      chapterObj: {
        title: `Краткий обзор`,
        wordsUrl: ``,
        lectures: [{
          url: `https://media.w3.org/2010/05/sintel/trailer_hd.mp4`,
        }],
        chapterUrl: `10/10.md`,
        chapterId: `10`,
        tasksUrl: `10/10-tasks.js`,
        subChapters: [],
      }
    },
    RESULT: {
      chaptersData: [{
        currentPageIdx: `3`,
        chapterObj: {
          title: `Краткий обзор`,
          wordsUrl: ``,
          lectures: [{
            url: `https://media.w3.org/2010/05/sintel/trailer_hd.mp4`,
          }],
          chapterUrl: `10/10.md`,
          chapterId: `10`,
          tasksUrl: `10/10-tasks.js`,
          subChapters: [],
        }
      }],
    }
  },
  {
    STATE: {
      chaptersData: [{
        currentPageIdx: `3`,
        chapterObj: {
          title: `Краткий обзор`,
          wordsUrl: ``,
          lectures: [{
            url: `https://media.w3.org/2010/05/sintel/trailer_hd.mp4`,
          }],
          chapterUrl: `10/10.md`,
          chapterId: `10`,
          tasksUrl: `10/10-tasks.js`,
          subChapters: [],
        },
      }],
    },

    PAYLOAD: {
      currentPageIdx: `4`,
      chapterObj: {
        title: `Сотрудник, ответственный`,
        wordsUrl: ``,
        lectures: [{
          url: `https://media.w3.org/2010/05/sintel/trailer_hd.mp4`,
        }],
        chapterUrl: `10/10.md`,
        chapterId: `10`,
        tasksUrl: `10/10-tasks.js`,
        subChapters: [],
      },
    },
    RESULT: {
      chaptersData: [{
        currentPageIdx: `3`,
        chapterObj: {
          title: `Краткий обзор`,
          wordsUrl: ``,
          lectures: [{
            url: `https://media.w3.org/2010/05/sintel/trailer_hd.mp4`,
          }],
          chapterUrl: `10/10.md`,
          chapterId: `10`,
          tasksUrl: `10/10-tasks.js`,
          subChapters: [],
        },
      }, {
        currentPageIdx: `4`,
        chapterObj: {
          title: `Сотрудник, ответственный`,
          wordsUrl: ``,
          lectures: [{
            url: `https://media.w3.org/2010/05/sintel/trailer_hd.mp4`,
          }],
          chapterUrl: `10/10.md`,
          chapterId: `10`,
          tasksUrl: `10/10-tasks.js`,
          subChapters: [],
        },
      }]
    }
  },
  {
    STATE: {
      chaptersData: [{
        currentPageIdx: `3`,
        chapterObj: {
          title: `Краткий обзор`,
          wordsUrl: ``,
          lectures: [{
            url: `https://media.w3.org/2010/05/sintel/trailer_hd.mp4`,
          }],
          chapterUrl: `10/10.md`,
          chapterId: `10`,
          tasksUrl: `10/10-tasks.js`,
          subChapters: [],
        },
      }],
    },
    PAYLOAD: {
      currentPageIdx: `3`,
      chapterObj: {
        title: `Большой обзор`,
        wordsUrl: ``,
        tasksUrl: `10/10-tasks.js`,
        subChapters: [],
      },
    },
    RESULT: {
      chaptersData: [{
        currentPageIdx: `3`,
        chapterObj: {
          title: `Большой обзор`,
          wordsUrl: ``,
          tasksUrl: `10/10-tasks.js`,
          subChapters: [],
        },
      }]
    }
  }
];
