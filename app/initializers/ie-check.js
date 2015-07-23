export function initialize(registry, application) {
  application.inject('route', 'ieCheck', 'service:ie-check');
  application.inject('router:main', 'ieCheck', 'service:ie-check');
  application.inject('controller', 'ieCheck', 'service:ie-check');
}

export default {
  name: 'ie-check',
  initialize: initialize
};