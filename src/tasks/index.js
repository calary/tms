var taskListComponent = require('./task-list.component');
var editTaskComponent = require('./edit-task.component');
var states = require('./states');

module.exports = {
  components: {
    taskList: taskListComponent,
    editTask: editTaskComponent
  },
  states: [
    states.taskListState,
    states.newTaskState,
    states.editTaskState
  ]
};