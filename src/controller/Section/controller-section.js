import {
  HOME_SECTION,
  TODAY_SECTION,
  TOMORROW_SECTION,
  WEEK_SECTION,
  MONTH_SECTION
} from '../../constants/section-constants.js'

import {
  filterCompletedTasks,
  filterNotCompletedTasks,
  filterBySection
} from '../filterTasks/filterTasks.js'

export default class ControllerSection {
  constructor ({ view, sectionModel, taskModel, setCurrentSection }) {
    // CLASSES
    this.view = view
    this.sectionModel = sectionModel
    this.taskModel = taskModel

    // CALLBAKCS
    this.setCurrentSection = setCurrentSection

    // DOM
    this.sectionDiv = document.querySelector('.nav__sectionsDiv')
    this.mainDiv = document.querySelector('.main')
  }

  initializeControllerSection = () => {
    // Home by default
    this._sectionLoad(HOME_SECTION)
    this.setCurrentSection(HOME_SECTION)

    const sectionNames = this.sectionModel.getSectionNames()
    this.view.renderSections({ div: this.sectionDiv, sectionNames })

    // eventclick
    this.sectionDiv.addEventListener('click', this._SectionDivHandler)
  }

  // _SectionDivHandler = (event) => {
  //   switch (event.target.id) {
  //     case `navSection__${HOME_SECTION}-click`:
  //       this._sectionLoad(HOME_SECTION)
  //       this.setCurrentSection(HOME_SECTION)
  //       this.view.activePageStyle({ div: event.target })
  //       break

  //     case `navSection__${TODAY_SECTION}`:
  //       this._sectionLoad(TODAY_SECTION)
  //       this.setCurrentSection(TODAY_SECTION)
  //       break

  //     case `navSection__${TOMORROW_SECTION}`:
  //       this._sectionLoad(TOMORROW_SECTION)
  //       this.setCurrentSection(TOMORROW_SECTION)
  //       break

  //     case `navSection__${WEEK_SECTION}`:
  //       this._sectionLoad(WEEK_SECTION)
  //       this.setCurrentSection(WEEK_SECTION)
  //       break

  //     case `navSection__${MONTH_SECTION}`:
  //       this._sectionLoad(MONTH_SECTION)
  //       this.setCurrentSection(MONTH_SECTION)
  //       break

  //     default:
  //       break
  //   }
  // }

  _SectionDivHandler = (event) => {
    // HOME
    if (event.target.classList.contains(`navSection__${HOME_SECTION}-click`)) {
      this._sectionLoad(HOME_SECTION)
      this.setCurrentSection(HOME_SECTION)
      this.view.activePageStyle({ div: event.target })

    // TODAY
    } else if (event.target.classList.contains(`navSection__${TODAY_SECTION}-click`)) {
      this._sectionLoad(TODAY_SECTION)
      this.setCurrentSection(TODAY_SECTION)

    // TOMORROW
    } else if (event.target.classList.contains(`navSection__${TOMORROW_SECTION}-click`)) {
      this._sectionLoad(TOMORROW_SECTION)
      this.setCurrentSection(TOMORROW_SECTION)

    // WEEK
    } else if (event.target.classList.contains(`navSection__${WEEK_SECTION}-click`)) {
      this._sectionLoad(WEEK_SECTION)
      this.setCurrentSection(WEEK_SECTION)

    // MONTH
    } else if (event.target.classList.contains(`navSection__${MONTH_SECTION}-click`)) {
      this._sectionLoad(MONTH_SECTION)
      this.setCurrentSection(MONTH_SECTION)
    }
  }

  _sectionLoad = (section) => {
    let tasks = this.taskModel.getAllTasks()
    tasks = filterBySection({ tasks, section })
    const completedTasks = filterCompletedTasks({ tasks })
    const notCompletedTasks = filterNotCompletedTasks({ tasks })
    this.view.renderPage({
      div: this.mainDiv,
      completedTasks,
      notCompletedTasks,
      name: section
    })
  }
}
