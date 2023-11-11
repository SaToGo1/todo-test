var Ct=Object.defineProperty;var Pt=(s,t,e)=>t in s?Ct(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var a=(s,t,e)=>(Pt(s,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();function It(){return`
    <header class="header">
      <h1 class="header__h1">To-Do List V2</h1>
    </header>
  `}const $t="/todo-list-version2/assets/plusBlue-74e97109.svg",at="/todo-list-version2/assets/circle-33d9fd73.svg",rt="/todo-list-version2/assets/circle-check-4cd9726b.svg",Z="main";function yt(){return`
    <main class="${Z}" id="${Z}">
      ${ct()}
      <h3>TasksProjects</h3>
      <h3>Completed Tasks</h3>
    </main>
  `}const v="main__addTaskDiv",K="main__addTaskDiv-focus",M="main__addTaskButton",T="main__addTaskInput",L="main__addTaskIcon";function ct(){return`
    <div class=${v} id=${v}>
      <button class=${M} id="${M}">
        <img class="${L}" id="${L}" 
          src="${$t}"
        >
      </button>
      <input class="${T}" id="${T}" 
        type="text"
      >
    </div>
  `}const wt="main__taskPage",tt="main__taskList",lt="main__taskListCompleted",dt="main__taskListNotCompleted";function Mt({div:s,completedTasks:t,notCompletedTasks:e,name:o,colorCompletedTasks:i,colorNotCompletedTasks:n}){const r=`
  <div class=${wt}>
    <h2>${o}</h2>
    ${ct()}
    <h3>Tasks</h3>
    <div class="${tt}" id="${dt}">
      ${e.map((c,h)=>{const p=n[h];return H({task:c,completed:!1,color:p})}).join("")}
    </div>
    <h3>Completed</h3>
    <div class="${tt}" id="${lt}">
      ${t.map((c,h)=>{const p=i[h];return H({task:c,completed:!0,color:p})}).join("")}
    </div>
  </div>`;s.innerHTML=r}const O="main__task",ut="main__taskIcon",Lt="main__taskText",Ot="main__taskText-Completed",U="main__taskDate",ht="main__taskDelete";function H({task:s,completed:t,color:e}){let o,i,n="";if(t?(o=rt,i=Ot):(o=at,i=Lt),e){let r;e==="#ffffff"?r=e:r=e+"33",n=`style="background-color: ${r}"`}return`
  <div class="${O}" id="${s.id}" ${n} data-task-id="${s.id}">
    <img class="${ut}" src="${o}" alt="icon">
    <p class="${i}">${s.title}</p>
    <input type="date" class="${U}" value="${s.date}">
    <button class="${ht}">X</button>
  </div>
  `}function bt({task:s,color:t}){let e,o;s.completed?(e=document.querySelector(`#${lt}`),o=!0):(e=document.querySelector(`#${dt}`),o=!1);const i=H({task:s,completed:o,color:t});e.insertAdjacentHTML("beforeend",i)}function Bt({task:s}){const t=document.querySelector(`[data-task-id="${s.id}"]`),e=t.querySelector("p"),o=t.querySelector("input");e.textContent=s.title,o.value=s.date}const Et="taskDetails__div",Nt="taskDetails__divTitle",pt="taskDetails__icon",mt="taskDetails__title",I="taskDetails__projects",$="taskDetails__date",Ut="taskDetails__divDescription",y="taskDetails__description",B="taskDetails__label";function Ht({task:s,project:t,projectArray:e}){let o;return e.unshift({name:"none",id:null}),s.completed?o=rt:o=at,`
    <div class="${Et}" data-task-id="${s.id}">
      <div class="${Nt}">
        <img class="${pt}" src="${o}" alt="icon">
        <div class="${mt}" contenteditable="true" data-task-id="${s.id}">${s.title}</div>
      </div>
      <hr class="taskDetail__hr">
      <label for="${I}" class="${B}">Select Project:</label>
      <select id="${I}" class="${I}">
        ${e.map(i=>t===void 0&&i.name==="none"?`<option data-project-selection-id="${i.id}" selected>None</option>`:(t==null?void 0:t.name)===i.name?`<option data-project-selection-id=${i.id} selected>${i.name}</option>`:`<option data-project-selection-id=${i.id}>${i.name}</option>`).join("")}
      </select>
      <label for="${$}" class="${B}">Due Date:</label>
      <input id="${$}" type="date" class="${$}" value="${s.date}">

      <label for="${y}" class="${B}">Task Description:</label>
      <div class="${Ut}">
        <div id="${y}" class="${y}" contenteditable="true" data-task-id="${s.id}">${s.description}</div>
      </div>
    </div>

  `}function qt({div:s,task:t,project:e,projectArray:o}){const i=Ht({task:t,project:e,projectArray:o});s.insertAdjacentHTML("beforeend",i)}const et="main__task-active";function xt({div:s}){document.querySelectorAll(`.${O}`).forEach(e=>e.classList.remove(et)),s==null||s.classList.add(et)}const Ft="/todo-list-version2/assets/plus-333b0318.svg",Rt="/todo-list-version2/assets/tag-2f76385c.svg",Wt="/todo-list-version2/assets/home-5de888a8.png",Gt="/todo-list-version2/assets/today-248fbdf1.svg",Qt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAAd0lEQVRIx2NgGEDwH4opUsdEa1eiW+DNwMDwBM1F/wlgZHWPGRgYPPFZ+JgIAwnhR8gGMmIJT2oAuLl0jwOqAxZCXiQRYATxgPkAp4tI9fGA+4DcuKCfD0YtGIEWPIHS5BbVDAyQIh8n8GSgrE54xECgwhkFGAAAcH5FLau0834AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMTItMDZUMTQ6NTY6NTUrMDA6MDBbqY0HAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTEyLTA2VDE0OjU2OjU1KzAwOjAwKvQ1uwAAAABJRU5ErkJggg==",Yt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAAgUlEQVRIx2NgGEDwH4opUsdEa1eiW+DNwMDwBM1F/wlgZHWPGRgYPPFZ+JgIAwnhR8gGMmIJT2oAuLl0jwOqAxZCXiQRYATxgAcRtqSIj0+yBRQDFgLyjCTy6e+D0TgY/HFAdQueQGlyi2oGBkiRjxN4MlBWJzxiYGDwoHWoDDMAAFSjUCXUEaotAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTEyLTA2VDE0OjU3OjQzKzAwOjAwGxHTnQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0xMi0wNlQxNDo1Nzo0MyswMDowMGpMayEAAAAASUVORK5CYII=",u="Home",k="Today",f="Tomorrow",D="Week",A="Month",kt="nav__sectionsDiv",zt="nav__projectsDiv",Jt="nav",Vt="nav__hr",g="nav__container",Xt="nav__icon",b="nav__button";function Zt(){const s=J();return`
    <nav class="${Jt}">
      <div class="${kt}">
        <h2>Sections</h2>
      </div>
      <hr class="${Vt}">
      <div class="${zt}">
        <h2>Projects</h2>
        ${s}
      </div>
    </nav>
  `}function Kt({div:s,sectionNames:t}){let e=`
    <div class="${kt}">
  `;t.forEach(o=>{const i=`navSection__${o}-click`,n=te({name:o});e+=`
    <div class="${g} ${i}">
      <img src="${n}" class="${Xt} ${i}" alt="${o} button">
      <button class="${b} ${i}">${o}</button>
    </div>`}),e+="</div>",s.innerHTML=e}function te({name:s}){return s===k?Gt:s===f?Rt:s===D?Qt:s===A?Yt:Wt}const q="nav__addProjectButton",x="nav__addProjectIcon",J=()=>`
  <button class="${q}" id="${q}">
    <img src="${Ft}" alt="add Project" class="${x}" id="${x}">
  </button>
  `,ft="nav__Confirmation",ee="navConfirmation__input",F="navConfirmation__accept",R="navConfirmation__cancel";function se({div:s}){const t=`
  <div class="${ft}">
    <label>Project Name:</label>
    <input type="text" class="${ee}" maxlength="40" minlength="1">
    <button class="${F} ${b}" id="${F}">Accept</button>
    <button class="${R} ${b}" id="${R}">Cancel</button
  </div>`,e=document.querySelector(".nav__addProjectButton");e?(s.removeChild(e),s.insertAdjacentHTML("beforeend",t)):console.error("Add Project button not found, sidebar.js")}function oe({div:s}){const t=J(),e=document.querySelector(".nav__Confirmation");e?(s.removeChild(e),s.insertAdjacentHTML("beforeend",t)):console.error("Confirmation Div not found, sidebar.js")}const Dt="nav__ProjectDeleteButton",W="nav_projectColor";function At({id:s,name:t,color:e="#000000"}){return`
  <div class="${g}" data-project-id="${s}">
    <input type="color" class="${W}" value="${e}">
    <button class="${b}">${t}</button>
    <button class="${Dt}">X</button>
  </div>`}function ie({div:s,id:t,name:e,color:o="#000000"}){const i=At({id:t,name:e,color:o});s.insertAdjacentHTML("beforeend",i)}function ne({div:s,projects:t}){const e=J();let o=`
    <h2>Projects</h2>
  `;t.forEach(i=>{const n=At({id:i.id,name:i.name,color:i.color});o+=`${n}`}),o+=`
    ${e}
  `,s.innerHTML=o}const st="nav__container-active";function ae({div:s}){document.querySelectorAll(`.${g}`).forEach(o=>o.classList.remove(st));let e=5;for(;!s.classList.contains(g);)if(s=s.parentNode,e--,e===0)return console.error("Infinite bucle on activePageStyle"),0;s.classList.add(st)}class re{constructor(){a(this,"renderApp",()=>{const t=It(),e=Zt(),o=yt(),i=`
    ${t}
    ${e}
    ${o}
    `;this.app.innerHTML=i});a(this,"activePageStyle",({div:t})=>{ae({div:t})});a(this,"renderSections",({div:t,sectionNames:e})=>{Kt({div:t,sectionNames:e})});a(this,"renderConfirmation",({div:t})=>{se({div:t})});a(this,"renderAddProjectButton",({div:t})=>{oe({div:t})});a(this,"renderProject",({div:t,id:e,name:o})=>{ie({div:t,id:e,name:o})});a(this,"renderAllProjects",({div:t,projects:e})=>{ne({div:t,projects:e})});a(this,"renderPage",({div:t,completedTasks:e,notCompletedTasks:o,name:i,colorCompletedTasks:n,colorNotCompletedTasks:r})=>{Mt({div:t,completedTasks:e,notCompletedTasks:o,name:i,colorCompletedTasks:n,colorNotCompletedTasks:r})});a(this,"renderTask",({task:t,color:e})=>{bt({task:t,color:e})});a(this,"updateTask",({task:t})=>{Bt({task:t})});a(this,"renderTaskDetail",({div:t,task:e,project:o,projectArray:i})=>{qt({div:t,task:e,project:o,projectArray:i})});this.app=document.getElementById("app"),this.renderApp(),this.nav=document.querySelector(".nav")}activeTaskStyle({div:t}){xt({div:t})}}function G(){return new Date().toISOString().split("T")[0]}function gt(){const s=new Date;return s.setDate(s.getDate()+1),s.toISOString().split("T")[0]}function V(){const s=new Date;return s.setDate(s.getDate()+(6-s.getDay())+1),s.toISOString().split("T")[0]}function ce(){const s=new Date;return s.setDate(s.getDate()-s.getDay()),s.toISOString().split("T")[0]}function jt(){const s=new Date,t=new Date(s.getFullYear(),s.getMonth()+1,1);return t.setDate(t.getDate()-1),t.setHours(23,59,59,999),t.toISOString().split("T")[0]}function le(){const s=new Date;return s.setDate(1),s.toISOString().split("T")[0]}function _t({tasks:s}){return s.filter(t=>t.completed===!0)}function vt({tasks:s}){return s.filter(t=>t.completed===!1)}function ot({tasks:s,projectID:t}){return s.filter(e=>e.projectID===t)}function de({tasks:s,section:t}){switch(t){case u:return s;case k:return ue({tasks:s});case f:return he({tasks:s});case D:return pe({tasks:s});case A:return me({tasks:s});default:console.error("default case for filter sections, should not get here")}return s}function ue({tasks:s}){const t=G();return s.filter(e=>e.date===t)}function he({tasks:s}){const t=gt();return s.filter(e=>e.date===t)}function pe({tasks:s}){const t=ce(),e=V();return s.filter(o=>o.date>=t&&o.date<=e)}function me({tasks:s}){const t=le(),e=jt();return s.filter(o=>o.date>=t&&o.date<=e)}function it({tasks:s,projects:t}){return s.map(e=>{if(e.projectID===null||e.projectID==="")return null;const o=t.find(i=>i.id===e.projectID);return o!=null&&o.color?o.color:null})}class ke{constructor({view:t,sectionModel:e,taskModel:o,projectModel:i,setCurrentSection:n,getCurrentSection:r}){a(this,"initializeControllerSection",()=>{this._sectionLoad(u),this.setCurrentSection({section:u});const t=this.sectionModel.getSectionNames();this.view.renderSections({div:this.sectionDiv,sectionNames:t}),this.sectionDiv.addEventListener("click",this._SectionDivHandler)});a(this,"_SectionDivHandler",t=>{t.target.classList.contains(`navSection__${u}-click`)?(this._sectionLoad(u),this.view.activePageStyle({div:t.target})):t.target.classList.contains(`navSection__${k}-click`)?(this._sectionLoad(k),this.view.activePageStyle({div:t.target})):t.target.classList.contains(`navSection__${f}-click`)?(this._sectionLoad(f),this.view.activePageStyle({div:t.target})):t.target.classList.contains(`navSection__${D}-click`)?(this._sectionLoad(D),this.view.activePageStyle({div:t.target})):t.target.classList.contains(`navSection__${A}-click`)&&(this._sectionLoad(A),this.view.activePageStyle({div:t.target}))});a(this,"_sectionLoad",t=>{let e=this.taskModel.getAllTasks();e=de({tasks:e,section:t});const o=_t({tasks:e}),i=vt({tasks:e}),n=this.projectModel.getAllProjects(),r=it({tasks:o,projects:n}),c=it({tasks:i,projects:n});this.view.renderPage({div:this.mainDiv,completedTasks:o,notCompletedTasks:i,name:t,colorCompletedTasks:r,colorNotCompletedTasks:c}),this.setCurrentSection({section:t})});a(this,"reloadSection",({loadHome:t=!1})=>{const e=this.getCurrentSection();e!==""&&this._sectionLoad(e),t===!0&&this._sectionLoad(u)});this.view=t,this.sectionModel=e,this.taskModel=o,this.projectModel=i,this.setCurrentSection=n,this.getCurrentSection=r,this.sectionDiv=document.querySelector(".nav__sectionsDiv"),this.mainDiv=document.querySelector(".main")}}function Q(s,t){let e;return function(...o){clearTimeout(e),e=setTimeout(()=>{s(...o)},t)}}class fe{constructor({view:t,projectModel:e,taskModel:o,setCurrentProject:i,getCurrentProject:n,reloadSection:r}){a(this,"initializeControllerProjects",()=>{this.projectsDiv.addEventListener("click",this._projectDivHandler),this.projectsDiv.addEventListener("input",this._colorInput);const t=this.projectModel.getAllProjects();this.view.renderAllProjects({div:this.projectsDiv,projects:t})});a(this,"_projectDivHandler",t=>{if(this._clickOnAddProjectButton(t))return 0;if(this._clickOnConfirmationDiv(t))return 0;if(this._deleteProjectClick(t))return 0;if(this._colorInputClick(t))return 0;this._clickOnProject(t)});a(this,"_clickOnAddProjectButton",t=>t.target.id===q||t.target.id===x?(this.view.renderConfirmation({div:this.projectsDiv}),!0):!1);a(this,"_clickOnConfirmationDiv",t=>{if(t.target.id===F){const e=document.querySelector(".navConfirmation__input").value;if(e==="")return 0;const{newProject:o,isStored:i}=this.projectModel.createProjects({name:e}),n=o.id;if(i)return this.view.renderProject({div:this.projectsDiv,id:n,name:e,color:o.color}),this.view.renderAddProjectButton({div:this.projectsDiv}),!0;console.error("Project Not Stored")}return t.target.id===R?(this.view.renderAddProjectButton({div:this.projectsDiv}),!0):!!t.target.classList.contains(ft)});a(this,"_clickOnProject",t=>{const e=t.target.classList.contains(g)?t.target:t.target.parentNode;if(!e.classList.contains(g))return 0;const o=this.projectModel.getAllProjects(),i=e.dataset.projectId;if(o.some(r=>r.id===i)){const r=o.find(c=>c.id===i);this._projectLoad({projectID:i,project:r}),this.view.activePageStyle({div:t.target})}});a(this,"_projectLoad",({projectID:t,project:e})=>{let o=this.taskModel.getAllTasks();o=ot({tasks:o,projectID:t});const i=_t({tasks:o}),n=vt({tasks:o}),r=i.map(h=>e.color),c=n.map(h=>e.color);this.view.renderPage({div:this.mainDiv,completedTasks:i,notCompletedTasks:n,name:e.name,colorCompletedTasks:r,colorNotCompletedTasks:c}),this.setCurrentProject({projectId:t})});a(this,"_deleteProjectClick",t=>{if(t.target.classList.contains(Dt)){const o=t.target.parentNode,i=o.dataset.projectId,n=this.taskModel.getAllTasks(),r=ot({tasks:n,projectID:i});this.taskModel.deleteManyTasks({tasksArray:r}),this.projectModel.deleteProject({id:i}),o.remove();const c=this.getCurrentProject();return c===i&&this.reloadSection({loadHome:!0}),c===null&&this.reloadSection({loadHome:!1}),!0}});a(this,"_colorInput",Q(t=>{const e=t.target;if(e.classList.contains(W)){const o=e.parentNode.dataset.projectId,i=e.value;this.projectModel.updateProject({id:o,updatedFields:{color:i}});const r=this.projectModel.getAllProjects().find(c=>c.id===o);return this._projectLoad({projectID:o,project:r}),!0}},1e3));a(this,"_colorInputClick",t=>{if(t.target.classList.contains(W))return!0});a(this,"reloadProject",()=>{const t=this.getCurrentProject();if(t!==null){const{project:e}=this.projectModel.getProject({id:t});this._projectLoad({projectID:t,project:e})}});this.view=t,this.projectModel=e,this.taskModel=o,this.setCurrentProject=i,this.getCurrentProject=n,this.reloadSection=r,this.projectsDiv=document.querySelector(".nav__projectsDiv"),this.mainDiv=document.querySelector(".main")}}class De{constructor({view:t,taskModel:e,projectModel:o,getCurrentProject:i,getCurrentSection:n,reloadSection:r,reloadProject:c}){a(this,"initializeControllerMain",()=>{this.mainDiv.addEventListener("focusin",this._addTaskBarFocusOutline),this.mainDiv.addEventListener("focusout",this._addTaskBarFocusOutline),this.mainDiv.addEventListener("change",this._dateInputChange),this.mainDiv.addEventListener("change",this._changeDetailsHandler),this.mainDiv.addEventListener("input",this._inputDetails),this.mainDiv.addEventListener("click",this._handleClick)});a(this,"_addTaskBarFocusOutline",t=>{(t.target.id===v||t.target.id===M||t.target.id===T||t.target.id===L)&&(t.type==="focusin"?(document.querySelector(`#${T}`).focus(),document.querySelector(`#${v}`).classList.add(K)):t.type==="focusout"&&document.querySelector(`#${v}`).classList.remove(K))});a(this,"_dateInputChange",t=>{if(t.target.classList.contains(U)){const e=t.target.value,i=t.target.parentNode.dataset.taskId,{isStored:n}=this.taskModel.getTask({id:i});return n?(this.taskModel.updateTask({id:i,updatedFields:{date:e}}),this._saveDetails(),this.reloadSection({}),this._loadDetails(),!0):(console.error("task not stored on change date"),!0)}return!1});a(this,"_handleClick",t=>{let e=!1;if(e=this._AddTask(t),e||(e=this._completeTaskClick(t),e)||(e=this._deleteTaskClick(t),e)||t.target.classList.contains(U)||(e=this._taskOpenDetailClick(t),e)||(e=this._taskDetailClick(t),e))return 0;this._removeDetails()});a(this,"_AddTask",t=>{if(t.target.id===M||t.target.id===L){const e=document.querySelector(`#${T}`).value;if(e==="")return 0;const o=this.getCurrentProjectID(),i=this._getDateBySection(),{newTask:n,isStored:r}=this.taskModel.createTask({taskTitle:e,projectID:o,date:i}),{project:c}=this.projectModel.getProject({id:o});return r?this.view.renderTask({task:n,color:c==null?void 0:c.color}):console.error("Task Not Stored"),!0}return!1});a(this,"_completeTaskClick",t=>{if(t.target.classList.contains(ut)){const e=t.target.parentNode,o=e.dataset.taskId,{task:i,isStored:n}=this.taskModel.getTask({id:o});if(!n)return console.error("task not stored"),!0;const r=i.completed,{updatedTask:c,isUpdated:h}=this.taskModel.updateTask({id:o,updatedFields:{completed:!r}});if(!h)return console.error("task not updated"),!0;const{project:p}=this.projectModel.getProject({id:i.projectID});e.remove(),this.view.renderTask({task:c,color:p==null?void 0:p.color});const X=document.querySelector(`[data-task-id="${o}"]`);return X.classList.add("activeTask"),setTimeout(()=>{X.classList.remove("activeTask")},2e3),this._reloadDetails(),!0}return!1});a(this,"_deleteTaskClick",t=>{const e=t.target;if(e.classList.contains(ht)){const o=e.parentNode,i=o.dataset.taskId;return this.taskModel.deleteTask({id:i}),o.remove(),this._isDetailsOpenById({id:i})&&this._removeDetails(),!0}return!1});a(this,"_getDateBySection",()=>{switch(this.getCurrentSection()){case u:case k:return G();case f:return gt();case D:return V();case A:return jt();default:return G()}});a(this,"_taskOpenDetailClick",t=>{const e=t.target.classList.contains(O)?t.target:t.target.parentNode;if(!e.classList.contains(O))return!1;const o=e.dataset.taskId;return this._openTaskDetailsWithAnimation({id:o}),this.view.activeTaskStyle({div:e}),!0});a(this,"_taskDetailClick",t=>{const e=t.target.classList;let o=!1;for(let i=0;i<e.length;i++)if(e[i].startsWith("taskDetails")){o=!0;break}return o?(this._clickCompleteDetails(t),!0):!1});a(this,"_clickCompleteDetails",t=>{const e=t.target;if(!e.classList.contains(pt))return;const o=e.parentNode.parentNode.dataset.taskId,{task:i,isStored:n}=this.taskModel.getTask({id:o});if(!n)return console.error("task not stored"),!0;const r=i.completed,{isUpdated:c}=this.taskModel.updateTask({id:o,updatedFields:{completed:!r}});if(!c)return console.error("task not updated"),!0;this._saveDetails(),this.reloadSection({}),this.reloadProject(),this._loadDetails()});a(this,"_changeDetailsHandler",t=>{this._changeDateDetails(t),this._changeProjectDetails(t)});a(this,"_changeDateDetails",t=>{const e=t.target;if(!e.classList.contains($))return!1;const o=e.value,i=e.parentNode.dataset.taskId,{isStored:n}=this.taskModel.getTask({id:i});return n?(this.taskModel.updateTask({id:i,updatedFields:{date:o}}),this._saveDetails(),this.reloadSection({}),this.reloadProject(),this._loadDetails(),!0):(console.error("task not stored on change date"),!0)});a(this,"_changeProjectDetails",t=>{const e=t.target;if(!e.classList.contains(I))return!1;const i=e.options[e.selectedIndex].dataset.projectSelectionId,n=e.parentNode.dataset.taskId,{isStored:r}=this.taskModel.getTask({id:n});if(!r)return console.error("task not stored on change date"),!0;this.taskModel.updateTask({id:n,updatedFields:{projectID:i}}),this._saveDetails(),this.reloadSection({}),this.reloadProject(),this._loadDetails()});a(this,"_inputDetails",t=>{this._changeTitleDetails(t),this._changeDescriptionDetails(t)});a(this,"_changeTitleDetails",Q(t=>{const e=t.target;if(!e.classList.contains(mt))return;const o=e.dataset.taskId,i=e.textContent,{updatedTask:n,isUpdated:r}=this.taskModel.updateTask({id:o,updatedFields:{title:i}});if(!r){console.error("task title not updated");return}this.view.updateTask({task:n})},1e3));a(this,"_changeDescriptionDetails",Q(t=>{const e=t.target;if(!e.classList.contains(y))return!1;const o=e.dataset.taskId,i=e.textContent,{isUpdated:n}=this.taskModel.updateTask({id:o,updatedFields:{description:i}});n||console.error("task description not updated")},1e3));a(this,"_openTaskDetails",({id:t})=>{const{task:e}=this.taskModel.getTask({id:t}),o=this.projectModel.getAllProjects(),{project:i}=this.projectModel.getProject({id:e.projectID}),n=document.querySelector(".taskDetails__div");return n==null||n.remove(),this.view.renderTaskDetail({div:this.mainDiv,task:e,project:i,projectArray:o}),n});a(this,"_openTaskDetailsWithAnimation",({id:t})=>{this._openTaskDetails({id:t})||Ae()});a(this,"_saveDetails",()=>{var e;const t=(e=document.querySelector(".taskDetails__div"))==null?void 0:e.dataset.taskId;t!==void 0&&(this.detailsSaved=t)});a(this,"_loadDetails",()=>{if(this.detailsSaved===void 0)return;const t=document.getElementById(`${this.detailsSaved}`);this.view.activeTaskStyle({div:t}),this._openTaskDetails({id:this.detailsSaved}),this.detailsSaved=void 0});a(this,"_reloadDetails",()=>{this._saveDetails(),this._loadDetails()});a(this,"_removeDetails",()=>{const t=document.querySelector(".taskDetails__div");t==null||t.remove(),this.view.activeTaskStyle({})});a(this,"_isDetailsOpenById",({id:t})=>{const e=document.querySelector(".taskDetails__div"),o=e==null?void 0:e.dataset.taskId;return!(o===void 0||o!==t)});this.view=t,this.taskModel=e,this.projectModel=o,this.getCurrentProjectID=i,this.getCurrentSection=n,this.reloadSection=r,this.reloadProject=c,this.mainDiv=document.querySelector(".main"),this._isDetailOpen=!1}}const Ae=()=>{const s=document.querySelector(".main__taskPage"),t=document.querySelector(".taskDetails__div");s.classList.add("animate-taskPage"),t.classList.add("animate-details"),setTimeout(()=>{s.classList.remove("animate-taskPage"),t.classList.remove("animate-details")},1e3)};class w{constructor({id:t,name:e,color:o="#000000"}){this.id=t,this.name=e,this.color=o}}let S;const ge=new Uint8Array(16);function je(){if(!S&&(S=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!S))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return S(ge)}const l=[];for(let s=0;s<256;++s)l.push((s+256).toString(16).slice(1));function _e(s,t=0){return l[s[t+0]]+l[s[t+1]]+l[s[t+2]]+l[s[t+3]]+"-"+l[s[t+4]]+l[s[t+5]]+"-"+l[s[t+6]]+l[s[t+7]]+"-"+l[s[t+8]]+l[s[t+9]]+"-"+l[s[t+10]]+l[s[t+11]]+l[s[t+12]]+l[s[t+13]]+l[s[t+14]]+l[s[t+15]]}const ve=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),nt={randomUUID:ve};function Tt(s,t,e){if(nt.randomUUID&&!t&&!s)return nt.randomUUID();s=s||{};const o=s.random||(s.rng||je)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){e=e||0;for(let i=0;i<16;++i)t[e+i]=o[i];return t}return _e(o)}class d{constructor({id:t,projectID:e=null,title:o,description:i="",date:n="",completed:r=!1}){this.id=t,this.projectID=e,this.title=o,this.description=i,this.date=n,this.completed=r}}const Te=[new w({id:"1",name:"House",color:"#00ff00"}),new w({id:"2",name:"Exercising",color:"#ff0000"}),new w({id:"3",name:"Work",color:"#00aaff"})],C=new Date().toISOString().split("T")[0],Y=new Date;Y.setDate(Y.getDate()-1);const Se=Y.toISOString().split("T")[0],z=new Date;z.setDate(z.getDate()+1);const Ce=z.toISOString().split("T")[0],Pe=V(),Ie=[new d({id:"1",projectID:"1",title:"Clean the bedroom",description:"",date:C,completed:!1}),new d({id:"2",projectID:"1",title:"Clean the toilet",description:"",date:Ce,completed:!1}),new d({id:"3",projectID:"2",title:"Go for a Walk",description:"",date:C,completed:!1}),new d({id:"4",projectID:"2",title:"HIIT - High Intensity Interval Training",description:"",date:Se,completed:!0}),new d({id:"5",projectID:"3",title:"Start the new Project",description:"",date:C,completed:!1}),new d({id:"6",projectID:"3",title:"Organize the different tasks of the project",description:"",date:Pe,completed:!1}),new d({id:"7",projectID:"",title:"Watch a film",description:"Description 7",date:C,completed:!1})];function m({item:s,array:t}){const e=JSON.stringify(t);localStorage.setItem(s,e)}function St({item:s}){const t=localStorage.getItem(s);return t?{isStoredInLocal:!0,storedData:JSON.parse(t)}:{isStoredInLocal:!1,storedData:null}}const P="projectArray";class $e{constructor(){a(this,"createProjects",({name:t})=>{const e=Tt(),o=new w({id:e,name:t});return this.projects.push(o),m({item:P,array:this.projects}),{newProject:o,isStored:!0}});a(this,"getProject",({id:t})=>{const e=this.projects.find(i=>i.id===t);return{project:e,isStored:e!==void 0}});a(this,"deleteProject",({id:t})=>(console.log(t),this.projects=this.projects.filter(e=>e.id!==t),console.log(this.projects),m({item:P,array:this.projects}),{isDeleted:!0}));a(this,"updateProject",({id:t,updatedFields:e})=>{const o=this.projects.find(i=>i.id===t);return o?(Object.assign(o,e),m({item:P,array:this.projects}),{updatedProject:o,isUpdated:!0}):{updatedProject:null,isUpdated:!1}});const{isStoredInLocal:t,storedData:e}=St({item:P});t?this.projects=e:(this.projects=[],this.projects.push(...Te))}getAllProjects(){return[...this.projects]}}class j{constructor({name:t}){this.name=t}}class ye{constructor(){this.sections=[],this.initialize()}initialize(){const t=new j({name:u}),e=new j({name:k}),o=new j({name:f}),i=new j({name:D}),n=new j({name:A});this.sections=[t,e,o,i,n]}getSectionNames(){return this.sections.map(t=>t.name)}}const _="taskArray";class we{constructor(){a(this,"getAllTasks",()=>this.tasks);a(this,"getTask",({id:t})=>{const e=this.tasks.find(i=>i.id===t);return{task:e,isStored:e!==void 0}});a(this,"createTask",({taskTitle:t,projectID:e=null,description:o="",date:i=""})=>{const n=Tt(),r=new d({id:n,projectID:e,title:t,description:o,date:i,completed:!1});return this.tasks.push(r),m({item:_,array:this.tasks}),{newTask:r,isStored:!0}});a(this,"updateTask",({id:t,updatedFields:e})=>{const o=this.tasks.find(i=>i.id===t);return e.title===""?{updatedTask:o,isUpdated:!1}:o?(Object.assign(o,e),m({item:_,array:this.tasks}),{updatedTask:o,isUpdated:!0}):{updatedTask:null,isUpdated:!1}});a(this,"deleteTask",({id:t})=>(this.tasks=this.tasks.filter(e=>e.id!==t),m({item:_,array:this.tasks}),{isDeleted:!0}));a(this,"deleteManyTasks",({tasksArray:t=[]})=>{if(t.length===0)return this.tasks=[],0;const e=new Set(t.map(o=>o.id));return this.tasks=this.tasks.filter(o=>!e.has(o.id)),m({item:_,array:this.tasks}),{isDeleted:!0}});const{isStoredInLocal:t,storedData:e}=St({item:_});t?this.tasks=e:(this.tasks=[],this.tasks.push(...Ie))}}const Me=new ye,E=new $e,N=new we;class Le{constructor(t){a(this,"initializeController",()=>(this.controllerSections.initializeControllerSection(),this.controllerProjects.initializeControllerProjects(),this.controllerMain.initializeControllerMain(),this.removeTaskDetails(),0));a(this,"setCurrentSection",({section:t})=>{this.currentProject=null,this.currentSection=t});a(this,"getCurrentSection",()=>this.currentSection);a(this,"setCurrentProject",({projectId:t})=>{this.currentSection="",this.currentProject=t});a(this,"getCurrentProject",()=>this.currentProject);a(this,"reloadSection",({loadHome:t=!1})=>{this.controllerSections.reloadSection({loadHome:t})});a(this,"reloadProject",()=>{this.controllerProjects.reloadProject()});a(this,"removeTaskDetails",()=>{const t=document.querySelector("nav"),e=document.querySelector("header");t.addEventListener("click",this.controllerMain._removeDetails),e.addEventListener("click",this.controllerMain._removeDetails)});this.view=t,this.currentSection="home",this.currentProject=null,this.controllerSections=new ke({view:t,sectionModel:Me,taskModel:N,projectModel:E,setCurrentSection:this.setCurrentSection,getCurrentSection:this.getCurrentSection}),this.controllerProjects=new fe({view:t,projectModel:E,taskModel:N,setCurrentProject:this.setCurrentProject,getCurrentProject:this.getCurrentProject,reloadSection:this.reloadSection}),this.controllerMain=new De({view:t,taskModel:N,projectModel:E,getCurrentProject:this.getCurrentProject,getCurrentSection:this.getCurrentSection,reloadSection:this.reloadSection,reloadProject:this.reloadProject})}}const Oe=new re,be=new Le(Oe);be.initializeController();
