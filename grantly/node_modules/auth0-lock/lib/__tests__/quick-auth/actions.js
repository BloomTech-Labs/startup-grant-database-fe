'use strict';

var _actions = require('../../quick-auth/actions');

jest.mock('../../core/actions', function () {
  return {
    logIn: jest.fn()
  };
});

jest.mock('store/index', function () {
  return {
    read: jest.fn(function () {
      return 'model';
    }),
    getEntity: 'getEntity',
    swap: jest.fn(),
    updateEntity: 'updateEntity'
  };
});

jest.mock('../../core/index', function () {
  return {
    id: function id() {
      return 'id';
    },
    auth: {
      connectionScopes: jest.fn(function () {
        return {
          get: jest.fn()
        };
      }),
      redirect: jest.fn(function () {
        return true;
      })
    },
    setSuppressSubmitOverlay: jest.fn()
  };
});

describe('quick-auth.actions', function () {
  beforeEach(function () {
    jest.clearAllMocks();
  });

  it('calls logIn with the correct parameters', function () {
    var connection = {
      get: jest.fn(function (key) {
        switch (key) {
          case 'name':
            return 'name';
          case 'strategy':
            return 'google';
        }
      })
    };

    (0, _actions.logIn)('id', connection, 'hint', 'prompt');

    var coreActions = require('../../core/actions');

    expect(coreActions.logIn.mock.calls.length).toBe(1);
    expect(coreActions.logIn.mock.calls[0]).toMatchSnapshot();
  });

  it('sets display to "popup" when using facebook and there\'s no redirect', function () {
    var connection = {
      get: jest.fn(function (key) {
        switch (key) {
          case 'name':
            return 'name';
          case 'strategy':
            return 'facebook';
        }
      })
    };

    var core = require('../../core/index');
    core.auth.redirect = jest.fn(function () {
      return false;
    });

    (0, _actions.logIn)('id', connection);

    var coreActions = require('../../core/actions');

    expect(coreActions.logIn.mock.calls.length).toBe(1);
    expect(coreActions.logIn.mock.calls[0]).toMatchSnapshot();
  });

  it('calls setSuppressSubmitOverlay with true when using Apple connection', function () {
    var connection = {
      get: jest.fn(function (key) {
        switch (key) {
          case 'name':
            return 'name';
          case 'strategy':
            return 'apple';
        }
      })
    };

    (0, _actions.logIn)('id', connection);

    var _require = require('store/index'),
        swap = _require.swap;

    var l = require('../../core/index');

    expect(swap.mock.calls.length).toBe(1);
    expect(swap.mock.calls[0][3]).toBe(l.setSupressSubmitOverlay);
    expect(swap.mock.calls[0][4]).toBe(true);
  });

  it('calls setSuppressSubmitOverlay with false when not using Apple connection', function () {
    var connection = {
      get: jest.fn(function (key) {
        switch (key) {
          case 'name':
            return 'name';
          case 'strategy':
            return 'facebook';
        }
      })
    };

    (0, _actions.logIn)('id', connection);

    var _require2 = require('store/index'),
        swap = _require2.swap;

    var l = require('../../core/index');

    expect(swap.mock.calls.length).toBe(1);
    expect(swap.mock.calls[0][3]).toBe(l.setSupressSubmitOverlay);
    expect(swap.mock.calls[0][4]).toBe(false);
  });
});
