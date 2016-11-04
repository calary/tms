exports.taskListState = {
  parent: 'app',
  name: 'tasksList',
  url: '/task',
  title: '任务列表',
  component: 'taskList'
};
exports.newTaskState = {
  parent: 'app',
  name: 'newTask',
  url: '/task/new',
  title: '新建任务列表',
  component: 'editTask'
};
exports.editTaskState = {
  parent: 'app',
  name: 'editTask',
  url: '/task/:taskId/edit',
  title: '编辑任务列表',
  component: 'editTask'
};
