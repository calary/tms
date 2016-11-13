var taskListComponent = require('./task-list.component');
var editTaskComponent = require('./edit-task.component');
var testComponent = require('./test.component');
var states = require('./states');

module.exports = {
  components: {
    taskList: taskListComponent,
    editTask: editTaskComponent,
    test: testComponent,
  },
  states: [
    states.taskListState,
    states.newTaskState,
    states.editTaskState,
    states.testState,
  ]
};