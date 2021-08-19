import { UserStatusType } from '../../../../types/types-require.js';

export const mockInitialState = {
  loading: false,
  chapters: [], 
  chaptersData: [],
  tasks: [],

  activeCommentsContainer: ``,
  unreadedComments: [],
  comments: [],  

  checkedStatus: localStorage.getItem(`OsnovaStatus`) || UserStatusType.NEW,

  adminTaskOnCheck: [],
  adminTasks: [], // Загруженные задания для Супервайзера курса
  adminUsers: [], 
  adminCompanies: [], 
  adminCompaniesProfiles: [],
  adminUsersProfiles: [],

  sertificate: {},

};

export const mockChapters = [
  {
    title: `Краткий обзор`,
    wordsUrl: ``,
    lectures: [{
      url: `https://media.w3.org/2010/05/sintel/trailer_hd.mp4`,
    }],
    chapterUrl: `10/10.md`,
    chapterId: `10`,
    tasksUrl: `10/10-tasks.js`,
    subChapters: [],
  }, {
    title: `Сотрудник, ответственный за введение в должность`,
    wordsUrl: `20/20-words.md`,
    lectures: [],
    chapterUrl: `20/20.md`,
    chapterId: `20`,
    tasksUrl: `20/20-tasks.js`,
    subChapters: [],
  }
];