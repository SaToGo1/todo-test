// CONSTANTS with class/Id strings
import {
  confirmationAccept,
  confirmationCancel,
  addProjectButtonClass,
  addProjectIconClass,
  projectDeleteButton
} from '../../views/Layouts/sidebar/sidebar'

import {
  filterByProject,
  filterCompletedTasks,
  filterNotCompletedTasks
} from '../filterTasks/filterTasks'

export default class ControllerProjects {
  constructor ({ view, projectModel, taskModel, setCurrentProject, getCurrentProject, reloadSection }) {
    // CLASSES
    this.view = view
    this.projectModel = projectModel
    this.taskModel = taskModel

    // CALLBAKCS
    this.setCurrentProject = setCurrentProject
    this.getCurrentProject = getCurrentProject
    this.reloadSection = reloadSection

    // DOM
    this.projectsDiv = document.querySelector('.nav__projectsDiv')
    this.mainDiv = document.querySelector('.main')
  }

  initializeControllerProjects = () => {
    this.projectsDiv.addEventListener('click', this._projectDivHandler)

    const projects = this.projectModel.getAllProjects()
    this.view.renderAllProjects({ div: this.projectsDiv, projects })
  }

  _projectDivHandler = (event) => {
    // Add project button
    if (this._clickOnAddProjectButton(event)) return 0
    // confirm project and project name
    else if (this._clickOnConfirmationDiv(event)) return 0
    else if (this._deleteProjectClick(event)) return 0
    // other
    this._clickOnProject(event)
  }

  _clickOnAddProjectButton = (event) => {
    // CLICK on add new Project
    if (event.target.id === addProjectButtonClass ||
    event.target.id === addProjectIconClass) {
      this.view.renderConfirmation({ div: this.projectsDiv })
      return true
    }

    return false
  }

  _clickOnConfirmationDiv = (event) => {
    // Handle click on Accept or Cancel in the confirmation Div
    // that appears after clicking the add new Project button.
    // ACCEPT BUTTON
    if (event.target.id === confirmationAccept) {
      const name = document.querySelector('.navConfirmation__input').value

      const { newProject, isStored } = this.projectModel.createProjects({ name })
      const id = newProject.id

      if (isStored) {
        this.view.renderProject({ div: this.projectsDiv, id, name })
        this.view.renderAddProjectButton({ div: this.projectsDiv })
        return true
      } else {
        console.error('Project Not Stored')
      }
    }

    // CANCEL BUTTON
    if (event.target.id === confirmationCancel) {
      this.view.renderAddProjectButton({ div: this.projectsDiv })
      return true
    }

    return false
  }

  // Checks if we clicked a project
  _clickOnProject = (event) => {
    const projectsArr = this.projectModel.getAllProjects()

    // checks if we clicked in the project div in sidebar or in one of his sons
    // the sons are the name of the project and the icon of the project.
    // clicking on the son should also load the page.
    const clickedId = event.target.dataset.projectId
    const parentClickedId = event.target.parentNode.dataset.projectId

    const isClickedIdInArray = projectsArr.some(project => project.id === clickedId)
    const isParentClickedIdInArray = projectsArr.some(project => project.id === parentClickedId)

    if (isClickedIdInArray || isParentClickedIdInArray) {
      // gets the id whatever it is from parent or actual element clicked
      const id = isClickedIdInArray ? clickedId : parentClickedId

      // find the project that we clicked in the project array
      const project = projectsArr.find(project => project.id === id)
      this._projectLoad({ projectID: id, project })
      this.view.activePageStyle({ div: event.target })
    }
  }

  // Calls the filter functions to get all the tasks from our project
  // and call the render function.
  _projectLoad = ({ projectID, project }) => {
    let tasks = this.taskModel.getAllTasks()
    tasks = filterByProject({ tasks, projectID })
    const completedTasks = filterCompletedTasks({ tasks })
    const notCompletedTasks = filterNotCompletedTasks({ tasks })
    this.view.renderPage({
      div: this.mainDiv,
      completedTasks,
      notCompletedTasks,
      name: project.name
    })

    this.setCurrentProject({ projectId: projectID })
  }

  _deleteProjectClick = (event) => {
    const deleteProjectButton = event.target
    if (deleteProjectButton.classList.contains(projectDeleteButton)) {
      const projectElement = event.target.parentNode
      const projectID = projectElement.dataset.projectId

      // DELETE DATA
      const tasks = this.taskModel.getAllTasks()
      const projectTasks = filterByProject({ tasks, projectID })
      this.taskModel.deleteManyTasks({ tasksArray: projectTasks })
      this.projectModel.deleteProject({ projectID })

      // DELETE VIEW
      projectElement.remove()

      // If we delete the project currently rendered, then load Home page
      const currentProjectID = this.getCurrentProject()
      if (currentProjectID === projectID) {
        this.reloadSection({ loadHome: true })
      }

      // If we are in a section, reload the section.
      if (currentProjectID === null) {
        this.reloadSection({ loadHome: false })
      }

      return true
    }
  }
}
