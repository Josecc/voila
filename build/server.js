require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  var _this2 = this;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  __webpack_require__(89);
  
  var _path = __webpack_require__(21);
  
  var _path2 = _interopRequireDefault(_path);
  
  var _express = __webpack_require__(5);
  
  var _express2 = _interopRequireDefault(_express);
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDomServer = __webpack_require__(114);
  
  var _reactDomServer2 = _interopRequireDefault(_reactDomServer);
  
  var _routes = __webpack_require__(61);
  
  var _routes2 = _interopRequireDefault(_routes);
  
  var _componentsHtml = __webpack_require__(45);
  
  var _componentsHtml2 = _interopRequireDefault(_componentsHtml);
  
  var _mongoose = __webpack_require__(9);
  
  var _mongoose2 = _interopRequireDefault(_mongoose);
  
  var _passport = __webpack_require__(4);
  
  var _passport2 = _interopRequireDefault(_passport);
  
  var _cookieParser = __webpack_require__(93);
  
  var _cookieParser2 = _interopRequireDefault(_cookieParser);
  
  var _methodOverride = __webpack_require__(111);
  
  var _methodOverride2 = _interopRequireDefault(_methodOverride);
  
  var _bodyParser = __webpack_require__(90);
  
  var _bodyParser2 = _interopRequireDefault(_bodyParser);
  
  var server = global.server = (0, _express2['default'])();
  _mongoose2['default'].connect('mongodb://localhost/shoes');
  
  server.set('port', process.env.PORT || 5000);
  server.use(_express2['default']['static'](_path2['default'].join(__dirname, 'public')));
  
  server.use(_bodyParser2['default'].urlencoded({ extended: false }));
  server.use(_bodyParser2['default'].json());
  server.use((0, _methodOverride2['default'])());
  server.use((0, _cookieParser2['default'])());
  server.use(_passport2['default'].initialize());
  
  //
  // Register API middleware
  // -----------------------------------------------------------------------------
  server.use('/api/content', __webpack_require__(26));
  server.use('/api/wishlist', __webpack_require__(29));
  server.use('/api/users', __webpack_require__(27));
  server.use('/auth', __webpack_require__(34));
  server.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('<b>Invalid token</b>! Please log in again. ');
    }
  });
  
  //
  // Register server-side rendering middleware
  // -----------------------------------------------------------------------------
  server.get('*', function callee$0$0(req, res, next) {
    return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
      var _this = this;
  
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.prev = 0;
          context$1$0.next = 3;
          return regeneratorRuntime.awrap((function callee$1$0() {
            var statusCode, data, css, context, html;
            return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
              while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                  statusCode = 200;
                  data = { title: '', description: '', css: '', body: '' };
                  css = [];
                  context = {
                    onInsertCss: function onInsertCss(value) {
                      return css.push(value);
                    },
                    onSetTitle: function onSetTitle(value) {
                      return data.title = value;
                    },
                    onSetMeta: function onSetMeta(key, value) {
                      return data[key] = value;
                    },
                    onPageNotFound: function onPageNotFound() {
                      return statusCode = 404;
                    }
                  };
                  context$2$0.next = 6;
                  return regeneratorRuntime.awrap(_routes2['default'].dispatch({ path: req.path, context: context }, function (state, component) {
                    data.body = _reactDomServer2['default'].renderToString(component);
                    data.css = css.join('');
                  }));
  
                case 6:
                  html = _reactDomServer2['default'].renderToStaticMarkup(_react2['default'].createElement(_componentsHtml2['default'], data));
  
                  res.status(statusCode).send('<!doctype html>\n' + html);
  
                case 8:
                case 'end':
                  return context$2$0.stop();
              }
            }, null, _this);
          })());
  
        case 3:
          context$1$0.next = 8;
          break;
  
        case 5:
          context$1$0.prev = 5;
          context$1$0.t0 = context$1$0['catch'](0);
  
          next(context$1$0.t0);
  
        case 8:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this2, [[0, 5]]);
  });
  
  //
  // Launch the server
  // -----------------------------------------------------------------------------
  
  server.listen(server.get('port'), function () {
    /* eslint-disable no-console */
    console.log('The server is running at http://localhost:' + server.get('port'));
    if (process.send) {
      process.send('online');
    }
  });

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  // eslint-disable-line no-unused-vars
  
  var _fbjsLibInvariant = __webpack_require__(100);
  
  var _fbjsLibInvariant2 = _interopRequireDefault(_fbjsLibInvariant);
  
  var _fbjsLibExecutionEnvironment = __webpack_require__(8);
  
  var count = 0;
  
  function withStyles(styles) {
    return function (ComposedComponent) {
      return (function (_Component) {
        _inherits(WithStyles, _Component);
  
        _createClass(WithStyles, null, [{
          key: 'contextTypes',
          value: {
            onInsertCss: _react.PropTypes.func
          },
          enumerable: true
        }]);
  
        function WithStyles() {
          _classCallCheck(this, WithStyles);
  
          _get(Object.getPrototypeOf(WithStyles.prototype), 'constructor', this).call(this);
          this.refCount = 0;
          ComposedComponent.prototype.renderCss = (function render(css) {
            var style = undefined;
            if (_fbjsLibExecutionEnvironment.canUseDOM) {
              style = this.styleId && document.getElementById(this.styleId);
              if (style) {
                if ('textContent' in style) {
                  style.textContent = css;
                } else {
                  style.styleSheet.cssText = css;
                }
              } else {
                this.styleId = 'dynamic-css-' + count++;
                style = document.createElement('style');
                style.setAttribute('id', this.styleId);
                style.setAttribute('type', 'text/css');
  
                if ('textContent' in style) {
                  style.textContent = css;
                } else {
                  style.styleSheet.cssText = css;
                }
  
                document.getElementsByTagName('head')[0].appendChild(style);
                this.refCount++;
              }
            } else {
              this.context.onInsertCss(css);
            }
          }).bind(this);
        }
  
        _createClass(WithStyles, [{
          key: 'componentWillMount',
          value: function componentWillMount() {
            if (_fbjsLibExecutionEnvironment.canUseDOM) {
              (0, _fbjsLibInvariant2['default'])(styles.use, 'The style-loader must be configured with reference-counted API.');
              styles.use();
            } else {
              this.context.onInsertCss(styles.toString());
            }
          }
        }, {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            styles.unuse();
            if (this.styleId) {
              this.refCount--;
              if (this.refCount < 1) {
                var style = document.getElementById(this.styleId);
                if (style) {
                  style.parentNode.removeChild(style);
                }
              }
            }
          }
        }, {
          key: 'render',
          value: function render() {
            return _react2['default'].createElement(ComposedComponent, this.props);
          }
        }]);
  
        return WithStyles;
      })(_react.Component);
    };
  }
  
  exports['default'] = withStyles;
  module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];
  
  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};
  
  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("passport");

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _this = this;
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _coreLocation = __webpack_require__(18);
  
  var _coreLocation2 = _interopRequireDefault(_coreLocation);
  
  function isLeftClickEvent(event) {
    return event.button === 0;
  }
  
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  
  var Link = (function (_Component) {
    _inherits(Link, _Component);
  
    function Link() {
      _classCallCheck(this, Link);
  
      _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var query = _props.query;
  
        var props = _objectWithoutProperties(_props, ['to', 'query']);
  
        return _react2['default'].createElement('a', _extends({ href: _coreLocation2['default'].createHref(to, query), onClick: Link.handleClick.bind(this) }, props));
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult = undefined;
  
        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }
  
        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }
  
        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }
  
        event.preventDefault();
  
        if (allowTransition) {
          var link = event.currentTarget;
          _coreLocation2['default'].pushState(_this.props && _this.props.state || null, _this.props && _this.props.to || link.pathname + link.search);
        }
      },
      enumerable: true
    }]);
  
    return Link;
  })(_react.Component);
  
  exports['default'] = Link;
  module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  /*! Author: Jose Canahui | MIT License | https://www.jose-canahui.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  // eslint-disable-line no-unused-vars
  
  var _storesLoginStore = __webpack_require__(14);
  
  var _storesLoginStore2 = _interopRequireDefault(_storesLoginStore);
  
  function withAuthentication(ComposedComponent) {
    return (function (_Component) {
      _inherits(WithAuthentication, _Component);
  
      _createClass(WithAuthentication, null, [{
        key: 'willTransitionTo',
        value: function willTransitionTo(transition) {
          if (!_storesLoginStore2['default'].isLoggedIn()) {
            transition.redirect('/login', {}, { 'nextPath': transition.path });
          }
        }
      }]);
  
      function WithAuthentication() {
        _classCallCheck(this, WithAuthentication);
  
        _get(Object.getPrototypeOf(WithAuthentication.prototype), 'constructor', this).call(this);
        this.state = this._getLoginState();
      }
  
      _createClass(WithAuthentication, [{
        key: '_getLoginState',
        value: function _getLoginState() {
          return {
            userLoggedIn: _storesLoginStore2['default'].isLoggedIn(),
            user: _storesLoginStore2['default'].name,
            email: _storesLoginStore2['default'].email,
            id: _storesLoginStore2['default'].id,
            role: _storesLoginStore2['default'].role,
            jwt: _storesLoginStore2['default'].jwt
          };
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.changeListener = this._onChange.bind(this);
          _storesLoginStore2['default'].addChangeListener(this.changeListener);
        }
      }, {
        key: '_onChange',
        value: function _onChange() {
          this.setState(this._getLoginState());
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          _storesLoginStore2['default'].removeChangeListener(this.changeListener);
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2['default'].createElement(ComposedComponent, _extends({}, this.props, { jwt: this.state.jwt, userLoggedIn: this.state.userLoggedIn, userName: this.state.user, userEmail: this.state.email, userId: this.state.id, userRole: this.state.role }));
        }
      }]);
  
      return WithAuthentication;
    })(_react.Component);
  }
  
  exports['default'] = withAuthentication;
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 9 */
/***/ function(module, exports) {

  module.exports = require("mongoose");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _coreDispatcherJs = __webpack_require__(17);
  
  var _coreDispatcherJs2 = _interopRequireDefault(_coreDispatcherJs);
  
  var _coreLocation = __webpack_require__(18);
  
  var _coreLocation2 = _interopRequireDefault(_coreLocation);
  
  var _reqwest = __webpack_require__(22);
  
  var _reqwest2 = _interopRequireDefault(_reqwest);
  
  var _storesLoginStoreJs = __webpack_require__(14);
  
  var _storesLoginStoreJs2 = _interopRequireDefault(_storesLoginStoreJs);
  
  exports['default'] = {
    loginUser: function loginUser(jwt) {
      var savedJwt = localStorage.getItem('jwt');
  
      _coreDispatcherJs2['default'].dispatch({
        actionType: 'LOGIN_USER',
        jwt: jwt
      });
  
      if (savedJwt !== jwt) {
        _coreLocation2['default'].pushState({}, '/');
        localStorage.setItem('jwt', jwt);
      }
    },
    getUserInfo: function getUserInfo(jwt) {
      (0, _reqwest2['default'])({
        url: '/api/users/me/',
        method: 'GET',
        crossOrigin: true,
        headers: {
          'Authorization': 'Bearer ' + _storesLoginStoreJs2['default'].jwt
        }
      }).then(function (res) {
        _coreDispatcherJs2['default'].dispatch({
          actionType: 'USER_INFO_RECEIVED',
          name: res.name,
          email: res.email,
          role: res.role,
          id: res._id
        });
      });
    },
    logoutUser: function logoutUser() {
      localStorage.removeItem('jwt');
      _coreDispatcherJs2['default'].dispatch({
        actionType: 'LOGOUT_USER'
      });
      _coreLocation2['default'].pushState({}, '/');
    }
  };
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var mongoose = __webpack_require__(9);
  var Schema = mongoose.Schema;
  var crypto = __webpack_require__(95);
  var authTypes = ['github', 'twitter', 'facebook', 'google'];
  
  var UserSchema = new Schema({
    name: String,
    email: { type: String, lowercase: true },
    role: {
      type: String,
      'default': 'user'
    },
    hashedPassword: String,
    provider: String,
    salt: String,
    facebook: {},
    github: {}
  });
  
  /**
   * Virtuals
   */
  UserSchema.virtual('password').set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashedPassword = this.encryptPassword(password);
  }).get(function () {
    return this._password;
  });
  
  // Public profile information
  UserSchema.virtual('profile').get(function () {
    return {
      'name': this.name,
      'role': this.role
    };
  });
  
  // Non-sensitive info we'll be putting in the token
  UserSchema.virtual('token').get(function () {
    return {
      '_id': this._id,
      'role': this.role
    };
  });
  
  /**
   * Validations
   */
  
  // Validate empty name
  UserSchema.path('name').validate(function (name) {
    if (authTypes.indexOf(this.provider) !== -1) return true;
    return name.length;
  }, 'Name cannot be blank');
  
  // Validate empty email
  UserSchema.path('email').validate(function (email) {
    if (authTypes.indexOf(this.provider) !== -1) return true;
    return email.length;
  }, 'Email cannot be blank');
  
  // Validate empty password
  UserSchema.path('hashedPassword').validate(function (hashedPassword) {
    if (authTypes.indexOf(this.provider) !== -1) return true;
    return hashedPassword.length;
  }, 'Password cannot be blank');
  
  // Validate email is not taken
  UserSchema.path('email').validate(function (value, respond) {
    var self = this;
    this.constructor.findOne({ email: value }, function (err, user) {
      if (err) throw err;
      if (user) {
        if (self.id === user.id) return respond(true);
        return respond(false);
      }
      respond(true);
    });
  }, 'The specified email address is already in use.');
  
  var validatePresenceOf = function validatePresenceOf(value) {
    return value && value.length;
  };
  
  /**
   * Pre-save hook
   */
  UserSchema.pre('save', function (next) {
    if (!this.isNew) return next();
  
    if (!validatePresenceOf(this.hashedPassword) && authTypes.indexOf(this.provider) === -1) next(new Error('Invalid password'));else next();
  });
  
  /**
   * Methods
   */
  UserSchema.methods = {
    /**
     * Authenticate - check if the passwords are the same
     *
     * @param {String} plainText
     * @return {Boolean}
     * @api public
     */
    authenticate: function authenticate(plainText) {
      return this.encryptPassword(plainText) === this.hashedPassword;
    },
  
    /**
     * Make salt
     *
     * @return {String}
     * @api public
     */
    makeSalt: function makeSalt() {
      return crypto.randomBytes(16).toString('base64');
    },
  
    /**
     * Encrypt password
     *
     * @param {String} password
     * @return {String}
     * @api public
     */
    encryptPassword: function encryptPassword(password) {
      if (!password || !this.salt) return '';
      var salt = new Buffer(this.salt, 'base64');
      return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
    }
  };
  
  module.exports = mongoose.model('User', UserSchema);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var mongoose = __webpack_require__(9);
  var passport = __webpack_require__(4);
  var jwt = __webpack_require__(20);
  var expressJwt = __webpack_require__(98);
  var compose = __webpack_require__(92);
  var User = __webpack_require__(11);
  var validateJwt = expressJwt({ secret: 'GetmeAllTHEshoesVoilahaha' });
  var roles = ['guest', 'user', 'admin'];
  
  /**
   * Attaches the user object to the request if authenticated
   * Otherwise returns 403
   */
  function isAuthenticated() {
    return compose()
    // Validate jwt
    .use(function (req, res, next) {
      // allow access_token to be passed through query parameter as well
      if (req.query && req.query.hasOwnProperty('access_token')) {
        req.headers.authorization = 'Bearer ' + req.query.access_token;
      } else if (!(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer')) {
        return res.sendStatus(401);
      }
      validateJwt(req, res, next);
    })
    // Attach user to request
    .use(function (req, res, next) {
      User.findById(req.user._id, function (err, user) {
        if (err) return next(err);
        if (!user) return res.sendStatus(401);
  
        req.user = user;
        next();
      });
    });
  }
  
  /**
   * Checks if the user role meets the minimum requirements of the route
   */
  function hasRole(roleRequired) {
    if (!roleRequired) throw new Error('Required role needs to be set');
  
    return compose().use(isAuthenticated()).use(function meetsRequirements(req, res, next) {
      if (roles.indexOf(req.user.role) >= roles.indexOf(roleRequired)) {
        next();
      } else {
        res.sendStatus(403);
      }
    });
  }
  
  /**
   * Returns a jwt token signed by the app secret
   */
  function signToken(id) {
    return jwt.sign({ _id: id }, 'GetmeAllTHEshoesVoilahaha', { expiresIn: 60 * 60 * 5 });
  }
  
  /**
   * Set token cookie directly for oAuth strategies
   */
  function setTokenCookie(req, res) {
    if (!req.user) return res.status(404).json({ message: 'Something went wrong, please try again.' });
    var token = signToken(req.user._id, req.user.role);
    res.cookie('token', JSON.stringify(token));
    res.redirect('/');
  }
  
  exports.isAuthenticated = isAuthenticated;
  exports.hasRole = hasRole;
  exports.signToken = signToken;
  exports.setTokenCookie = setTokenCookie;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _TutorialCss = __webpack_require__(84);
  
  var _TutorialCss2 = _interopRequireDefault(_TutorialCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var Tutorial = (function (_Component) {
  	_inherits(Tutorial, _Component);
  
  	function Tutorial(props) {
  		_classCallCheck(this, _Tutorial);
  
  		_get(Object.getPrototypeOf(_Tutorial.prototype), 'constructor', this).call(this, props);
  	}
  
  	_createClass(Tutorial, [{
  		key: 'render',
  		value: function render() {
  			if (this.props.uploadTutorial) {
  				return _react2['default'].createElement(
  					'div',
  					{ className: 'Tutorial' },
  					_react2['default'].createElement('iframe', { width: '100%', height: '400px', className: 'edgeFrame', src: '/edge/crop/Crop.html' })
  				);
  			}
  			return _react2['default'].createElement(
  				'div',
  				{ className: 'Tutorial' },
  				_react2['default'].createElement('iframe', { width: '100%', height: '400px', className: 'edgeFrame', src: '/edge/crop/Crop.html' })
  			);
  		}
  	}]);
  
  	var _Tutorial = Tutorial;
  	Tutorial = (0, _decoratorsWithStyles2['default'])(_TutorialCss2['default'])(Tutorial) || Tutorial;
  	return Tutorial;
  })(_react.Component);
  
  exports['default'] = Tutorial;
  module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _BaseStore2 = __webpack_require__(62);
  
  var _BaseStore3 = _interopRequireDefault(_BaseStore2);
  
  var _jwtDecode = __webpack_require__(109);
  
  var _jwtDecode2 = _interopRequireDefault(_jwtDecode);
  
  var _actionsLoginActions = __webpack_require__(10);
  
  var _actionsLoginActions2 = _interopRequireDefault(_actionsLoginActions);
  
  var LoginStore = (function (_BaseStore) {
    _inherits(LoginStore, _BaseStore);
  
    function LoginStore() {
      var _this = this;
  
      _classCallCheck(this, LoginStore);
  
      _get(Object.getPrototypeOf(LoginStore.prototype), 'constructor', this).call(this);
      this.subscribe(function () {
        return _this._registerToActions.bind(_this);
      });
      this._jwt = null;
      this._userName = null;
      this._userEmail = null;
      this._userRole = null;
      this._userId = null;
    }
  
    _createClass(LoginStore, [{
      key: '_registerToActions',
      value: function _registerToActions(action) {
        switch (action.actionType) {
          case 'LOGIN_USER':
            this._jwt = action.jwt;
            _actionsLoginActions2['default'].getUserInfo(this._jwt);
            this.emitChange();
            break;
          case 'LOGOUT_USER':
            this._jwt = null;
            this.emitChange();
            break;
          case 'USER_INFO_RECEIVED':
            this._userName = action.name;
            this._userEmail = action.email;
            this._userRole = action.role;
            this._userId = action.id;
            this.emitChange();
            break;
          default:
            break;
        };
      }
    }, {
      key: 'isLoggedIn',
      value: function isLoggedIn() {
        return !!this._jwt;
      }
    }, {
      key: 'jwt',
      get: function get() {
        return this._jwt;
      }
    }, {
      key: 'name',
      get: function get() {
        return this._userName;
      }
    }, {
      key: 'email',
      get: function get() {
        return this._userEmail;
      }
    }, {
      key: 'role',
      get: function get() {
        return this._userRole;
      }
    }, {
      key: 'id',
      get: function get() {
        return this._userId;
      }
    }]);
  
    return LoginStore;
  })(_BaseStore3['default']);
  
  exports['default'] = new LoginStore();
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _SearchBoxCss = __webpack_require__(82);
  
  var _SearchBoxCss2 = _interopRequireDefault(_SearchBoxCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _reactDropzone = __webpack_require__(115);
  
  var _reactDropzone2 = _interopRequireDefault(_reactDropzone);
  
  var _SearchResults = __webpack_require__(16);
  
  var _SearchResults2 = _interopRequireDefault(_SearchResults);
  
  var _CropControls = __webpack_require__(40);
  
  var _CropControls2 = _interopRequireDefault(_CropControls);
  
  var SearchBox = (function (_Component) {
    _inherits(SearchBox, _Component);
  
    function SearchBox() {
      _classCallCheck(this, _SearchBox);
  
      _get(Object.getPrototypeOf(_SearchBox.prototype), 'constructor', this).call(this);
      this.handleFileChange = this.handleFileChange.bind(this);
      this.cropped = this.cropped.bind(this);
      this.rotate = this.rotate.bind(this);
      this.dataURLtoBlob = this.dataURLtoBlob.bind(this);
      this.uploadOnTouch = this.uploadOnTouch.bind(this);
      this.state = {
        uploadedImage: ""
      };
      this.imageStyle = {
        maxWidth: '80px'
      };
    }
  
    _createClass(SearchBox, [{
      key: 'handleFileChange',
      value: function handleFileChange(dataURI) {
        this.setState({
          uploadedImage: dataURI[0].preview
        });
        this.props.setCropped(); //it just says cropping is ready so tutorial for cropping appears
      }
    }, {
      key: 'dataURLtoBlob',
      value: function dataURLtoBlob(dataurl) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
      }
    }, {
      key: 'uploadOnTouch',
      value: function uploadOnTouch() {
        this.refs.dropzone.open();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        var image = document.querySelector('.SearchBox > img');
        global.cropper = new Cropper(image, {
          checkImageOrigin: false,
          toggleDragModeOnDblclick: false,
          dragMode: 'move',
          ViewMode: 1,
          crop: function crop(data) {
            // console.log(data.x);
            // console.log(data.y);
            // console.log(data.width);
            // console.log(data.height);
            // console.log(data.rotate);
            // console.log(data.scaleX);
            // console.log(data.scaleY);
          }
        });
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        global.Cropper = __webpack_require__(94);
      }
    }, {
      key: 'cropped',
      value: function cropped() {
        var _this = this;
  
        new Promise(function (resolve, reject) {
          _this.props.setImageBlob(_this.dataURLtoBlob(cropper.getCroppedCanvas().toDataURL('image/jpeg')));
          resolve("image blob updated.");
        }).then(function () {
          return _this.props.fetchProducts();
        });
      }
    }, {
      key: 'rotate',
      value: function rotate() {
        cropper.rotate(90);
      }
    }, {
      key: 'rotateRightIncrement',
      value: function rotateRightIncrement() {
        cropper.rotate(4);
      }
    }, {
      key: 'rotateLeftIncrement',
      value: function rotateLeftIncrement() {
        cropper.rotate(-4);
      }
    }, {
      key: 'render',
      value: function render() {
        if (this.state.uploadedImage == "") {
          return _react2['default'].createElement(
            'div',
            { className: 'SearchBox', onTouchStart: this.uploadOnTouch, onClick: this.uploadOnTouch },
            _react2['default'].createElement(
              _reactDropzone2['default'],
              { ref: 'dropzone', onDrop: this.handleFileChange, className: 'drop-zone', disableClick: true },
              _react2['default'].createElement(
                'div',
                null,
                'Touch or drag and drop to upload image. The best view is the side view.'
              )
            )
          );
        }
        return _react2['default'].createElement(
          'div',
          { className: 'SearchBox' },
          _react2['default'].createElement('img', { src: this.state.uploadedImage, style: { maxHeight: "300px", maxWidth: "500px" } }),
          _react2['default'].createElement(_CropControls2['default'], { crop: this.cropped, rotate: this.rotate, rotateRightIncrement: this.rotateRightIncrement, rotateLeftIncrement: this.rotateLeftIncrement })
        );
      }
    }]);
  
    var _SearchBox = SearchBox;
    SearchBox = (0, _decoratorsWithStyles2['default'])(_SearchBoxCss2['default'])(SearchBox) || SearchBox;
    return SearchBox;
  })(_react.Component);
  
  exports['default'] = SearchBox;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _SearchResultsCss = __webpack_require__(83);
  
  var _SearchResultsCss2 = _interopRequireDefault(_SearchResultsCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _Product = __webpack_require__(49);
  
  var _Product2 = _interopRequireDefault(_Product);
  
  var _ResultNavigator = __webpack_require__(55);
  
  var _ResultNavigator2 = _interopRequireDefault(_ResultNavigator);
  
  var _SearchBox = __webpack_require__(15);
  
  var _SearchBox2 = _interopRequireDefault(_SearchBox);
  
  var SearchResults = (function (_Component) {
  	_inherits(SearchResults, _Component);
  
  	function SearchResults(props) {
  		_classCallCheck(this, _SearchResults);
  
  		_get(Object.getPrototypeOf(_SearchResults.prototype), 'constructor', this).call(this, props);
  		this.state = {
  			products: this.props.products
  		};
  	}
  
  	_createClass(SearchResults, [{
  		key: 'render',
  		value: function render() {
  			var _this = this;
  
  			return _react2['default'].createElement(
  				'div',
  				null,
  				_react2['default'].createElement(_SearchBox2['default'], { setCropped: this.props.setCropped, setImageBlob: this.props.setImageBlob, fetchProducts: this.props.fetchProducts }),
  				_react2['default'].createElement(_ResultNavigator2['default'], { fetchPage: this.props.fetchPage, page: this.props.page, setPage: this.props.setPage }),
  				_react2['default'].createElement(
  					'div',
  					{ className: 'SearchResults' },
  					this.state.products.map(function (product) {
  						var product_url = product.value_map.product_url;
  						if (product_url.indexOf("http://") > -1) {
  							var _name = product.value_map.product_name;
  							var price = product.value_map.price;
  							var image = product.value_map.sm_im_url;
  							return _react2['default'].createElement(_Product2['default'], { key: product_url + Math.random(), name: _name, price: price, image: image, product_url: product_url, fetchVoila: _this.props.fetchVoila });
  						} else {
  							return null;
  						}
  					})
  				),
  				_react2['default'].createElement(_ResultNavigator2['default'], { fetchPage: this.props.fetchPage, page: this.props.page, setPage: this.props.setPage }),
  				_react2['default'].createElement('br', null)
  			);
  		}
  	}]);
  
  	var _SearchResults = SearchResults;
  	SearchResults = (0, _decoratorsWithStyles2['default'])(_SearchResultsCss2['default'])(SearchResults) || SearchResults;
  	return SearchResults;
  })(_react.Component);
  
  exports['default'] = SearchResults;
  module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _flux = __webpack_require__(101);
  
  var dispatcher = new _flux.Dispatcher();
  
  exports['default'] = dispatcher;
  module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _fbjsLibExecutionEnvironment = __webpack_require__(8);
  
  var _historyLibCreateBrowserHistory = __webpack_require__(104);
  
  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);
  
  var _historyLibCreateMemoryHistory = __webpack_require__(105);
  
  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);
  
  var _historyLibUseQueries = __webpack_require__(106);
  
  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);
  
  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();
  
  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  var _reqwest = __webpack_require__(22);
  
  var _reqwest2 = _interopRequireDefault(_reqwest);
  
  var _when = __webpack_require__(118);
  
  var _when2 = _interopRequireDefault(_when);
  
  var _actionsLoginActions = __webpack_require__(10);
  
  var _actionsLoginActions2 = _interopRequireDefault(_actionsLoginActions);
  
  var AuthService = (function () {
    function AuthService() {
      _classCallCheck(this, AuthService);
    }
  
    _createClass(AuthService, [{
      key: 'login',
      value: function login(username, password) {
        return this.handleAuth((0, _when2['default'])((0, _reqwest2['default'])({
          url: '/auth/local',
          method: 'POST',
          crossOrigin: true,
          type: 'json',
          data: {
            "email": username,
            "password": password
          }
        })));
      }
    }, {
      key: 'signup',
      value: function signup(name, email, password) {
        return this.handleAuth((0, _when2['default'])((0, _reqwest2['default'])({
          url: '/api/users/',
          method: 'POST',
          crossOrigin: true,
          type: 'json',
          data: {
            "name": name,
            "email": email,
            "password": password
          }
        })));
      }
    }, {
      key: 'handleAuth',
      //"role": "admin"
      value: function handleAuth(loginPromise) {
        return loginPromise.then(function (response) {
          var jwt = response.token;
          _actionsLoginActions2['default'].loginUser(jwt);
          return true;
        });
      }
    }]);
  
    return AuthService;
  })();
  
  exports['default'] = new AuthService();
  module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

  module.exports = require("jsonwebtoken");

/***/ },
/* 21 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 22 */
/***/ function(module, exports) {

  module.exports = require("reqwest");

/***/ },
/* 23 */
/***/ function(module, exports) {

  /**
   * React Routing | http://www.kriasoft.com/react-routing
   * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  var Match = function Match(route, path, keys, match) {
    _classCallCheck(this, Match);
  
    this.route = route;
    this.path = path;
    this.params = Object.create(null);
    for (var i = 1; i < match.length; i++) {
      this.params[keys[i - 1].name] = decodeParam(match[i]);
    }
  };
  
  function decodeParam(val) {
    if (!(typeof val === 'string' || val instanceof String)) {
      return val;
    }
  
    try {
      return decodeURIComponent(val);
    } catch (e) {
      var err = new TypeError('Failed to decode param \'' + val + '\'');
      err.status = 400;
      throw err;
    }
  }
  
  exports['default'] = Match;
  module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Routing | http://www.kriasoft.com/react-routing
   * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  var _pathToRegexp = __webpack_require__(86);
  
  var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);
  
  var _Match = __webpack_require__(23);
  
  var _Match2 = _interopRequireDefault(_Match);
  
  var Route = (function () {
    function Route(path, handlers) {
      _classCallCheck(this, Route);
  
      this.path = path;
      this.handlers = handlers;
      this.regExp = (0, _pathToRegexp2['default'])(path, this.keys = []);
    }
  
    _createClass(Route, [{
      key: 'match',
      value: function match(path) {
        var match = this.regExp.exec(path);
        return match ? new _Match2['default'](this, path, this.keys, match) : null;
      }
    }]);
  
    return Route;
  })();
  
  exports['default'] = Route;
  module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Routing | http://www.kriasoft.com/react-routing
   * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  var _Route = __webpack_require__(24);
  
  var _Route2 = _interopRequireDefault(_Route);
  
  var emptyFunction = function emptyFunction() {};
  
  var Router = (function () {
  
    /**
     * Creates a new instance of the `Router` class.
     */
  
    function Router(initialize) {
      _classCallCheck(this, Router);
  
      this.routes = [];
      this.events = Object.create(null);
  
      if (typeof initialize === 'function') {
        initialize(this.on.bind(this));
      }
    }
  
    /**
     * Adds a new route to the routing table or registers an event listener.
     *
     * @param {String} path A string in the Express format, an array of strings, or a regular expression.
     * @param {Function|Array} handlers Asynchronous route handler function(s).
     */
  
    _createClass(Router, [{
      key: 'on',
      value: function on(path) {
        for (var _len = arguments.length, handlers = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          handlers[_key - 1] = arguments[_key];
        }
  
        if (path === 'error') {
          this.events[path] = handlers[0];
        } else {
          this.routes.push(new _Route2['default'](path, handlers));
        }
      }
    }, {
      key: 'dispatch',
      value: function dispatch(state, cb) {
        var routes, handlers, value, result, done, next;
        return regeneratorRuntime.async(function dispatch$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              next = function next() {
                var _handlers$next;
  
                var _value, _value2, match, handler;
  
                return regeneratorRuntime.async(function next$(context$3$0) {
                  while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                      if (!((_handlers$next = handlers.next(), value = _handlers$next.value, done = _handlers$next.done, _handlers$next) && !done)) {
                        context$3$0.next = 16;
                        break;
                      }
  
                      _value = value;
                      _value2 = _slicedToArray(_value, 2);
                      match = _value2[0];
                      handler = _value2[1];
  
                      state.params = match.params;
  
                      if (!(handler.length > 1)) {
                        context$3$0.next = 12;
                        break;
                      }
  
                      context$3$0.next = 9;
                      return regeneratorRuntime.awrap(handler(state, next));
  
                    case 9:
                      context$3$0.t0 = context$3$0.sent;
                      context$3$0.next = 15;
                      break;
  
                    case 12:
                      context$3$0.next = 14;
                      return regeneratorRuntime.awrap(handler(state));
  
                    case 14:
                      context$3$0.t0 = context$3$0.sent;
  
                    case 15:
                      return context$3$0.abrupt('return', context$3$0.t0);
  
                    case 16:
                    case 'end':
                      return context$3$0.stop();
                  }
                }, null, this);
              };
  
              if (typeof state === 'string' || state instanceof String) {
                state = { path: state };
              }
              cb = cb || emptyFunction;
              routes = this.routes;
              handlers = regeneratorRuntime.mark(function callee$2$0() {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, route, match, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, handler;
  
                return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                  while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                      _iteratorNormalCompletion = true;
                      _didIteratorError = false;
                      _iteratorError = undefined;
                      context$3$0.prev = 3;
                      _iterator = routes[Symbol.iterator]();
  
                    case 5:
                      if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                        context$3$0.next = 38;
                        break;
                      }
  
                      route = _step.value;
                      match = route.match(state.path);
  
                      if (!match) {
                        context$3$0.next = 35;
                        break;
                      }
  
                      _iteratorNormalCompletion2 = true;
                      _didIteratorError2 = false;
                      _iteratorError2 = undefined;
                      context$3$0.prev = 12;
                      _iterator2 = match.route.handlers[Symbol.iterator]();
  
                    case 14:
                      if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                        context$3$0.next = 21;
                        break;
                      }
  
                      handler = _step2.value;
                      context$3$0.next = 18;
                      return [match, handler];
  
                    case 18:
                      _iteratorNormalCompletion2 = true;
                      context$3$0.next = 14;
                      break;
  
                    case 21:
                      context$3$0.next = 27;
                      break;
  
                    case 23:
                      context$3$0.prev = 23;
                      context$3$0.t0 = context$3$0['catch'](12);
                      _didIteratorError2 = true;
                      _iteratorError2 = context$3$0.t0;
  
                    case 27:
                      context$3$0.prev = 27;
                      context$3$0.prev = 28;
  
                      if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                        _iterator2['return']();
                      }
  
                    case 30:
                      context$3$0.prev = 30;
  
                      if (!_didIteratorError2) {
                        context$3$0.next = 33;
                        break;
                      }
  
                      throw _iteratorError2;
  
                    case 33:
                      return context$3$0.finish(30);
  
                    case 34:
                      return context$3$0.finish(27);
  
                    case 35:
                      _iteratorNormalCompletion = true;
                      context$3$0.next = 5;
                      break;
  
                    case 38:
                      context$3$0.next = 44;
                      break;
  
                    case 40:
                      context$3$0.prev = 40;
                      context$3$0.t1 = context$3$0['catch'](3);
                      _didIteratorError = true;
                      _iteratorError = context$3$0.t1;
  
                    case 44:
                      context$3$0.prev = 44;
                      context$3$0.prev = 45;
  
                      if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                      }
  
                    case 47:
                      context$3$0.prev = 47;
  
                      if (!_didIteratorError) {
                        context$3$0.next = 50;
                        break;
                      }
  
                      throw _iteratorError;
  
                    case 50:
                      return context$3$0.finish(47);
  
                    case 51:
                      return context$3$0.finish(44);
  
                    case 52:
                    case 'end':
                      return context$3$0.stop();
                  }
                }, callee$2$0, this, [[3, 40, 44, 52], [12, 23, 27, 35], [28,, 30, 34], [45,, 47, 51]]);
              })();
              value = undefined, result = undefined, done = false;
  
            case 6:
              if (done) {
                context$2$0.next = 16;
                break;
              }
  
              context$2$0.next = 9;
              return regeneratorRuntime.awrap(next());
  
            case 9:
              result = context$2$0.sent;
  
              if (!result) {
                context$2$0.next = 14;
                break;
              }
  
              state.statusCode = 200;
              cb(state, result);
              return context$2$0.abrupt('return');
  
            case 14:
              context$2$0.next = 6;
              break;
  
            case 16:
              if (!this.events.error) {
                context$2$0.next = 32;
                break;
              }
  
              context$2$0.prev = 17;
  
              state.statusCode = 404;
              context$2$0.next = 21;
              return regeneratorRuntime.awrap(this.events.error(state, new Error('Cannot found a route matching \'' + state.path + '\'.')));
  
            case 21:
              result = context$2$0.sent;
  
              cb(state, result);
              context$2$0.next = 32;
              break;
  
            case 25:
              context$2$0.prev = 25;
              context$2$0.t0 = context$2$0['catch'](17);
  
              state.statusCode = 500;
              context$2$0.next = 30;
              return regeneratorRuntime.awrap(this.events.error(state, context$2$0.t0));
  
            case 30:
              result = context$2$0.sent;
  
              cb(state, result);
  
            case 32:
            case 'end':
              return context$2$0.stop();
          }
        }, null, this, [[17, 25]]);
      }
    }]);
  
    return Router;
  })();
  
  exports['default'] = Router;
  module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _this = this;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _path = __webpack_require__(21);
  
  var _express = __webpack_require__(5);
  
  var _jade = __webpack_require__(107);
  
  var _jade2 = _interopRequireDefault(_jade);
  
  var _frontMatter = __webpack_require__(102);
  
  var _frontMatter2 = _interopRequireDefault(_frontMatter);
  
  var _utilsFs = __webpack_require__(63);
  
  var _utilsFs2 = _interopRequireDefault(_utilsFs);
  
  // A folder with Jade/Markdown/HTML content pages
  var CONTENT_DIR = (0, _path.join)(__dirname, './content');
  
  // Extract 'front matter' metadata and generate HTML
  var parseJade = function parseJade(path, jadeContent) {
    var fmContent = (0, _frontMatter2['default'])(jadeContent);
    var htmlContent = _jade2['default'].render(fmContent.body);
    return Object.assign({ path: path, content: htmlContent }, fmContent.attributes);
  };
  
  var router = new _express.Router();
  
  router.get('/', function callee$0$0(req, res, next) {
    var path, fileName, source, content;
    return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.prev = 0;
          path = req.query.path;
  
          if (!(!path || path === 'undefined')) {
            context$1$0.next = 5;
            break;
          }
  
          res.status(400).send({ error: 'The \'path\' query parameter cannot be empty.' });
          return context$1$0.abrupt('return');
  
        case 5:
          fileName = (0, _path.join)(CONTENT_DIR, (path === '/' ? '/index' : path) + '.jade');
          context$1$0.next = 8;
          return regeneratorRuntime.awrap(_utilsFs2['default'].exists(fileName));
  
        case 8:
          if (context$1$0.sent) {
            context$1$0.next = 10;
            break;
          }
  
          fileName = (0, _path.join)(CONTENT_DIR, path + '/index.jade');
  
        case 10:
          context$1$0.next = 12;
          return regeneratorRuntime.awrap(_utilsFs2['default'].exists(fileName));
  
        case 12:
          if (context$1$0.sent) {
            context$1$0.next = 16;
            break;
          }
  
          res.status(404).send({ error: 'The page \'' + path + '\' is not found.' });
          context$1$0.next = 21;
          break;
  
        case 16:
          context$1$0.next = 18;
          return regeneratorRuntime.awrap(_utilsFs2['default'].readFile(fileName, { encoding: 'utf8' }));
  
        case 18:
          source = context$1$0.sent;
          content = parseJade(path, source);
  
          res.status(200).send(content);
  
        case 21:
          context$1$0.next = 26;
          break;
  
        case 23:
          context$1$0.prev = 23;
          context$1$0.t0 = context$1$0['catch'](0);
  
          next(context$1$0.t0);
  
        case 26:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this, [[0, 23]]);
  });
  
  exports['default'] = router;
  module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var express = __webpack_require__(5);
  var controller = __webpack_require__(28);
  var auth = __webpack_require__(12);
  
  var router = express.Router();
  
  router.get('/', auth.hasRole('admin'), controller.index);
  router['delete']('/:id', auth.hasRole('admin'), controller.destroy);
  router.get('/me', auth.isAuthenticated(), controller.me);
  router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
  router.get('/:id', auth.isAuthenticated(), controller.show);
  router.post('/', controller.create);
  
  module.exports = router;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var User = __webpack_require__(11);
  var passport = __webpack_require__(4);
  var jwt = __webpack_require__(20);
  
  var validationError = function validationError(res, err) {
    return res.json(422, err);
  };
  
  /**
   * Get list of users
   * restriction: 'admin'
   */
  exports.index = function (req, res) {
    User.find({}, '-salt -hashedPassword', function (err, users) {
      if (err) return res.send(500, err);
      res.status(200).json(users);
    });
  };
  
  /**
   * Creates a new user
   */
  exports.create = function (req, res, next) {
    var newUser = new User(req.body);
    newUser.provider = 'local';
    //if (!req.body.role)
    newUser.role = 'user';
    newUser.save(function (err, user) {
      if (err) return validationError(res, err);
      var token = jwt.sign({ _id: user._id }, 'GetmeAllTHEshoesVoilahaha', { expiresInMinutes: 60 * 5 });
      res.json({ token: token });
    });
  };
  
  /**
   * Get a single user
   */
  exports.show = function (req, res, next) {
    var userId = req.params.id;
  
    User.findById(userId, function (err, user) {
      if (err) return next(err);
      if (!user) return res.send(401);
      res.json(user.profile);
    });
  };
  
  /**
   * Deletes a user
   * restriction: 'admin'
   */
  exports.destroy = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
      if (err) return res.send(500, err);
      return res.status(204);
    });
  };
  
  /**
   * Change a users password
   */
  exports.changePassword = function (req, res, next) {
    var userId = req.user._id;
    var oldPass = String(req.body.oldPassword);
    var newPass = String(req.body.newPassword);
  
    User.findById(userId, function (err, user) {
      if (user.authenticate(oldPass)) {
        user.password = newPass;
        user.save(function (err) {
          if (err) return validationError(res, err);
          res.status(200);
        });
      } else {
        res.status(403);
      }
    });
  };
  
  /**
   * Get my info
   */
  exports.me = function (req, res, next) {
    var userId = req.user._id;
    User.findOne({
      _id: userId
    }, '-salt -hashedPassword', function (err, user) {
      // don't ever give out the password or salt
      if (err) return next(err);
      if (!user) return res.json(401);
      res.json(user);
    });
  };
  
  /**
   * Authentication callback
   */
  exports.authCallback = function (req, res, next) {
    res.redirect('/');
  };

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var express = __webpack_require__(5);
  var controller = __webpack_require__(30);
  
  var router = express.Router();
  
  router.get('/', controller.index);
  router.get('/:id', controller.show);
  router.post('/', controller.create);
  router.put('/:deviceId', controller.update);
  router.patch('/:deviceId', controller.update);
  router['delete']('/:id', controller.destroy);
  
  module.exports = router;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _ = __webpack_require__(110);
  var Wishlist = __webpack_require__(31);
  
  // Get list of wishlists
  exports.index = function (req, res) {
    Wishlist.find(function (err, wishlists) {
      if (err) {
        return handleError(res, err);
      }
      return res.json(200, wishlists);
    });
  };
  
  // Get a single wishlist
  exports.show = function (req, res) {
    Wishlist.findById(req.params.id, function (err, wishlist) {
      if (err) {
        return handleError(res, err);
      }
      if (!wishlist) {
        return res.send(404);
      }
      return res.json(wishlist);
    });
  };
  
  // Creates a new wishlist in the DB.
  exports.create = function (req, res) {
    Wishlist.create(req.body, function (err, wishlist) {
      if (err) {
        return handleError(res, err);
      }
      return res.json(201, wishlist);
    });
  };
  
  // Updates an existing wishlist in the DB.
  exports.update = function (req, res) {
    if (req.body._id) {
      delete req.body._id;
    }
    Wishlist.find(req.params.deviceId, function (err, wishlist) {
      if (err) {
        return handleError(res, err);
      }
      if (!wishlist) {
        return res.send(404);
      }
      var updated = _.merge(wishlist, req.body);
      updated.save(function (err) {
        if (err) {
          return handleError(res, err);
        }
        return res.json(200, wishlist);
      });
    });
  };
  
  // Deletes a wishlist from the DB.
  exports.destroy = function (req, res) {
    Wishlist.findById(req.params.id, function (err, wishlist) {
      if (err) {
        return handleError(res, err);
      }
      if (!wishlist) {
        return res.send(404);
      }
      wishlist.remove(function (err) {
        if (err) {
          return handleError(res, err);
        }
        return res.send(204);
      });
    });
  };
  
  function handleError(res, err) {
    return res.send(500, err);
  }

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var mongoose = __webpack_require__(9),
      Schema = mongoose.Schema;
  
  var WishlistSchema = new Schema({
    deviceId: String,
    email: String,
    im_names: [String]
  });
  
  module.exports = mongoose.model('Wishlist', WishlistSchema);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var express = __webpack_require__(5);
  var passport = __webpack_require__(4);
  var auth = __webpack_require__(12);
  
  var router = express.Router();
  
  router.get('/', passport.authenticate('facebook', {
    scope: ['email', 'user_about_me'],
    failureRedirect: '/signup',
    session: false
  })).get('/callback', passport.authenticate('facebook', {
    failureRedirect: '/signup',
    session: false
  }), auth.setTokenCookie);
  
  module.exports = router;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var passport = __webpack_require__(4);
  var FacebookStrategy = __webpack_require__(112).Strategy;
  
  exports.setup = function (User, config) {
    passport.use(new FacebookStrategy({
      clientID: config.facebook.clientID,
      clientSecret: config.facebook.clientSecret,
      callbackURL: config.facebook.callbackURL
    }, function (accessToken, refreshToken, profile, done) {
      User.findOne({
        'facebook.id': profile.id
      }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          user = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            role: 'user',
            username: profile.username,
            provider: 'facebook',
            facebook: profile._json
          });
          user.save(function (err) {
            if (err) done(err);
            return done(err, user);
          });
        } else {
          return done(err, user);
        }
      });
    }));
  };

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var express = __webpack_require__(5);
  var passport = __webpack_require__(4);
  var User = __webpack_require__(11);
  
  // Passport Configuration
  __webpack_require__(36).setup(User);
  __webpack_require__(33).setup(User, { facebook: {
  		clientID: process.env.FACEBOOK_ID || '1609283866014176',
  		clientSecret: process.env.FACEBOOK_SECRET || '2692b42e963fc6cb30b5cfe2b06f3a13',
  		callbackURL: (process.env.DOMAIN || '') + '/auth/facebook/callback'
  	} });
  
  var router = express.Router();
  
  router.use('/local', __webpack_require__(35));
  router.use('/facebook', __webpack_require__(32));
  
  module.exports = router;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var express = __webpack_require__(5);
  var passport = __webpack_require__(4);
  var auth = __webpack_require__(12);
  
  var router = express.Router();
  
  router.post('/', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
      var error = err || info;
      if (error) return res.json(401, error);
      if (!user) return res.json(404, { message: 'Something went wrong, please try again.' });
  
      var token = auth.signToken(user._id, user.role);
      res.json({ token: token });
    })(req, res, next);
  });
  
  module.exports = router;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var passport = __webpack_require__(4);
  var LocalStrategy = __webpack_require__(113).Strategy;
  
  exports.setup = function (User) {
    passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password' // this is the virtual field on the model
    }, function (email, password, done) {
      User.findOne({
        email: email.toLowerCase()
      }, function (err, user) {
        if (err) return done(err);
  
        if (!user) {
          return done(null, false, { message: 'This email is not registered.' });
        }
        if (!user.authenticate(password)) {
          return done(null, false, { message: 'This password is not correct.' });
        }
        return done(null, user);
      });
    }));
  };

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _AppCss = __webpack_require__(64);
  
  var _AppCss2 = _interopRequireDefault(_AppCss);
  
  var _decoratorsWithContext = __webpack_require__(59);
  
  var _decoratorsWithContext2 = _interopRequireDefault(_decoratorsWithContext);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _Header = __webpack_require__(44);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _Feedback = __webpack_require__(42);
  
  var _Feedback2 = _interopRequireDefault(_Feedback);
  
  var _Footer = __webpack_require__(43);
  
  var _Footer2 = _interopRequireDefault(_Footer);
  
  var App = (function (_Component) {
    _inherits(App, _Component);
  
    function App() {
      _classCallCheck(this, _App);
  
      _get(Object.getPrototypeOf(_App.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(App, [{
      key: 'render',
      value: function render() {
        return !this.props.error ? _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_Header2['default'], null),
          this.props.children,
          _react2['default'].createElement(_Feedback2['default'], null),
          _react2['default'].createElement(_Footer2['default'], null)
        ) : this.props.children;
      }
    }], [{
      key: 'propTypes',
      value: {
        children: _react.PropTypes.element.isRequired,
        error: _react.PropTypes.object
      },
      enumerable: true
    }]);
  
    var _App = App;
    App = (0, _decoratorsWithStyles2['default'])(_AppCss2['default'])(App) || App;
    App = (0, _decoratorsWithContext2['default'])(App) || App;
    return App;
  })(_react.Component);
  
  exports['default'] = App;
  module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _ContactPageCss = __webpack_require__(65);
  
  var _ContactPageCss2 = _interopRequireDefault(_ContactPageCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var ContactPage = (function (_Component) {
    _inherits(ContactPage, _Component);
  
    function ContactPage() {
      _classCallCheck(this, _ContactPage);
  
      _get(Object.getPrototypeOf(_ContactPage.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(ContactPage, [{
      key: 'render',
      value: function render() {
        var title = 'Contact Us';
        this.context.onSetTitle(title);
        return _react2['default'].createElement(
          'div',
          { className: 'ContactPage' },
          _react2['default'].createElement(
            'div',
            { className: 'ContactPage-container' },
            _react2['default'].createElement(
              'h1',
              null,
              title
            ),
            _react2['default'].createElement(
              'p',
              null,
              'We appreciate all types fo feedback! You can express any ',
              _react2['default'].createElement(
                'i',
                null,
                'questions'
              ),
              ', ',
              _react2['default'].createElement(
                'i',
                null,
                'suggestions'
              ),
              ', or ',
              _react2['default'].createElement(
                'i',
                null,
                'requests'
              ),
              ' through social media, or email us at ',
              _react2['default'].createElement(
                'a',
                { href: 'mailto:contact@voila.love' },
                'contact@voila.love'
              ),
              '.'
            )
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    var _ContactPage = ContactPage;
    ContactPage = (0, _decoratorsWithStyles2['default'])(_ContactPageCss2['default'])(ContactPage) || ContactPage;
    return ContactPage;
  })(_react.Component);
  
  exports['default'] = ContactPage;
  module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _ContentPageCss = __webpack_require__(66);
  
  var _ContentPageCss2 = _interopRequireDefault(_ContentPageCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var ContentPage = (function (_Component) {
    _inherits(ContentPage, _Component);
  
    function ContentPage() {
      _classCallCheck(this, _ContentPage);
  
      _get(Object.getPrototypeOf(_ContentPage.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(ContentPage, [{
      key: 'render',
      value: function render() {
        this.context.onSetTitle(this.props.title);
        return _react2['default'].createElement(
          'div',
          { className: 'ContentPage' },
          _react2['default'].createElement(
            'div',
            { className: 'ContentPage-container' },
            this.props.path === '/' ? null : _react2['default'].createElement(
              'h1',
              null,
              this.props.title
            ),
            _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: this.props.content || '' } })
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        path: _react.PropTypes.string.isRequired,
        content: _react.PropTypes.string.isRequired,
        title: _react.PropTypes.string
      },
      enumerable: true
    }, {
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    var _ContentPage = ContentPage;
    ContentPage = (0, _decoratorsWithStyles2['default'])(_ContentPageCss2['default'])(ContentPage) || ContentPage;
    return ContentPage;
  })(_react.Component);
  
  exports['default'] = ContentPage;
  module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _CropControlsCss = __webpack_require__(67);
  
  var _CropControlsCss2 = _interopRequireDefault(_CropControlsCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var CropControls = (function (_Component) {
    _inherits(CropControls, _Component);
  
    function CropControls(props) {
      _classCallCheck(this, _CropControls);
  
      _get(Object.getPrototypeOf(_CropControls.prototype), 'constructor', this).call(this, props);
    }
  
    _createClass(CropControls, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'crop-controls' },
          _react2['default'].createElement(
            'div',
            { className: 'rotate-button', onClick: this.props.rotateLeftIncrement },
            _react2['default'].createElement(
              'span',
              { className: 'rotate-icon' },
              _react2['default'].createElement('i', { className: 'fa fa-undo' })
            ),
            _react2['default'].createElement(
              'p',
              { className: 'rotate-text' },
              'Incremental Rotate'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'rotate-button', onClick: this.props.rotate },
            _react2['default'].createElement(
              'span',
              { className: 'rotate-icon' },
              _react2['default'].createElement('i', { className: 'fa fa-level-down' })
            ),
            _react2['default'].createElement(
              'p',
              { className: 'rotate-text' },
              '90º Rotate'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'rotate-button', onClick: this.props.rotateRightIncrement },
            _react2['default'].createElement(
              'span',
              { className: 'rotate-icon' },
              _react2['default'].createElement('i', { className: 'fa fa-repeat' })
            ),
            _react2['default'].createElement(
              'p',
              { className: 'rotate-text' },
              'Incremental Rotate'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'search-container' },
            _react2['default'].createElement(
              'div',
              { className: 'search-button', onClick: this.props.crop },
              _react2['default'].createElement(
                'span',
                { className: 'search-icon' },
                _react2['default'].createElement('i', { className: 'fa fa-search' })
              ),
              _react2['default'].createElement(
                'p',
                { className: 'search-text' },
                'Search'
              )
            )
          )
        );
      }
    }]);
  
    var _CropControls = CropControls;
    CropControls = (0, _decoratorsWithStyles2['default'])(_CropControlsCss2['default'])(CropControls) || CropControls;
    return CropControls;
  })(_react.Component);
  
  exports['default'] = CropControls;
  module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _ErrorPageCss = __webpack_require__(68);
  
  var _ErrorPageCss2 = _interopRequireDefault(_ErrorPageCss);
  
  var ErrorPage = (function (_Component) {
    _inherits(ErrorPage, _Component);
  
    function ErrorPage() {
      _classCallCheck(this, _ErrorPage);
  
      _get(Object.getPrototypeOf(_ErrorPage.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(ErrorPage, [{
      key: 'render',
      value: function render() {
        var title = 'Error';
        this.context.onSetTitle(title);
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            title
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Sorry, an critical error occurred on this page.'
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired,
        onPageNotFound: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    var _ErrorPage = ErrorPage;
    ErrorPage = (0, _decoratorsWithStyles2['default'])(_ErrorPageCss2['default'])(ErrorPage) || ErrorPage;
    return ErrorPage;
  })(_react.Component);
  
  exports['default'] = ErrorPage;
  module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _FeedbackCss = __webpack_require__(69);
  
  var _FeedbackCss2 = _interopRequireDefault(_FeedbackCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var Feedback = (function (_Component) {
    _inherits(Feedback, _Component);
  
    function Feedback() {
      _classCallCheck(this, _Feedback);
  
      _get(Object.getPrototypeOf(_Feedback.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Feedback, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Feedback' },
          _react2['default'].createElement(
            'div',
            { className: 'Feedback-container' },
            _react2['default'].createElement(
              'a',
              { className: 'Feedback-link', target: '__blank', href: 'https://www.facebook.com/TheVoilaApp' },
              _react2['default'].createElement('i', { className: 'fa fa-facebook-square' })
            ),
            _react2['default'].createElement(
              'a',
              { className: 'Feedback-link', target: '__blank', href: 'https://twitter.com/Voila_App' },
              _react2['default'].createElement('i', { className: 'fa fa-twitter-square' })
            ),
            _react2['default'].createElement(
              'a',
              { className: 'Feedback-link', target: '__blank', href: 'https://instagram.com/voila.app/' },
              _react2['default'].createElement('i', { className: 'fa fa-instagram' })
            )
          )
        );
      }
    }]);
  
    var _Feedback = Feedback;
    Feedback = (0, _decoratorsWithStyles2['default'])(_FeedbackCss2['default'])(Feedback) || Feedback;
    return Feedback;
  })(_react.Component);
  
  exports['default'] = Feedback;
  module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _FooterCss = __webpack_require__(70);
  
  var _FooterCss2 = _interopRequireDefault(_FooterCss);
  
  var _decoratorsWithViewport = __webpack_require__(60);
  
  var _decoratorsWithViewport2 = _interopRequireDefault(_decoratorsWithViewport);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _Link = __webpack_require__(6);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var Footer = (function (_Component) {
    _inherits(Footer, _Component);
  
    function Footer() {
      _classCallCheck(this, _Footer);
  
      _get(Object.getPrototypeOf(_Footer.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Footer, [{
      key: 'render',
  
      // static propTypes = {
      //   viewport: PropTypes.shape({
      //     width: PropTypes.number.isRequired,
      //     height: PropTypes.number.isRequired,
      //   }).isRequired,
      // };
  
      value: function render() {
        // This is just an example how one can render CSS
        // const { width, height } = this.props.viewport;
        // this.renderCss(`.Footer-viewport:after {content:' ${width}x${height}';}`);
  
        return _react2['default'].createElement(
          'div',
          { className: 'Footer' },
          _react2['default'].createElement(
            'div',
            { className: 'Footer-container' },
            _react2['default'].createElement(
              'span',
              { className: 'Footer-text' },
              '© Voila'
            ),
            _react2['default'].createElement(
              'span',
              { className: 'Footer-spacer' },
              '·'
            ),
            _react2['default'].createElement(
              'a',
              { className: 'Footer-link', href: '/', onClick: _Link2['default'].handleClick },
              'Home'
            ),
            _react2['default'].createElement(
              'span',
              { className: 'Footer-spacer' },
              '·'
            ),
            _react2['default'].createElement(
              'a',
              { className: 'Footer-link', href: '/privacy', onClick: _Link2['default'].handleClick },
              'Privacy'
            ),
            _react2['default'].createElement(
              'span',
              { className: 'Footer-spacer' },
              '·'
            ),
            _react2['default'].createElement(
              'a',
              { className: 'Footer-link', href: '/#', onClick: _Link2['default'].handleClick },
              'Share'
            ),
            _react2['default'].createElement(
              'span',
              { className: 'Footer-spacer' },
              ' | '
            ),
            _react2['default'].createElement(
              'span',
              { className: 'Footer-text Footer-text--muted' },
              _react2['default'].createElement('i', { className: 'fa fa-globe' }),
              ' v 1.5 '
            )
          )
        );
      }
    }]);
  
    var _Footer = Footer;
    Footer = (0, _decoratorsWithStyles2['default'])(_FooterCss2['default'])(Footer) || Footer;
    Footer = (0, _decoratorsWithViewport2['default'])(Footer) || Footer;
    return Footer;
  })(_react.Component);
  
  exports['default'] = Footer;
  module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _HeaderCss = __webpack_require__(71);
  
  var _HeaderCss2 = _interopRequireDefault(_HeaderCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _Link = __webpack_require__(6);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _Navigation = __webpack_require__(47);
  
  var _Navigation2 = _interopRequireDefault(_Navigation);
  
  var Header = (function (_Component) {
    _inherits(Header, _Component);
  
    function Header() {
      _classCallCheck(this, _Header);
  
      _get(Object.getPrototypeOf(_Header.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Header, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        window.mixpanel.track("Webapp Visited");
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Header' },
          _react2['default'].createElement(
            'div',
            { className: 'Header-container' },
            _react2['default'].createElement(
              'a',
              { className: 'Header-brand', href: '/', onClick: _Link2['default'].handleClick },
              _react2['default'].createElement('img', { className: 'Header-brandImg', src: __webpack_require__(88), width: '224', height: '75', alt: 'React' })
            ),
            _react2['default'].createElement(_Navigation2['default'], { className: 'Header-nav' }),
            _react2['default'].createElement(
              'div',
              { className: 'Header-banner' },
              _react2['default'].createElement(
                'h1',
                { className: 'Header-bannerTitle' },
                'Visual Search'
              ),
              _react2['default'].createElement(
                'p',
                { className: 'Header-bannerDesc' },
                'The best visual search app for shoe shopping'
              )
            )
          )
        );
      }
    }]);
  
    var _Header = Header;
    Header = (0, _decoratorsWithStyles2['default'])(_HeaderCss2['default'])(Header) || Header;
    return Header;
  })(_react.Component);
  
  exports['default'] = Header;
  module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _config = __webpack_require__(57);
  
  var Html = (function (_Component) {
    _inherits(Html, _Component);
  
    function Html() {
      _classCallCheck(this, Html);
  
      _get(Object.getPrototypeOf(Html.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Html, [{
      key: 'trackingCode',
      value: function trackingCode() {
        return { __html: '(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=' + 'function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;' + 'e=o.createElement(i);r=o.getElementsByTagName(i)[0];' + 'e.src=\'https://www.google-analytics.com/analytics.js\';' + 'r.parentNode.insertBefore(e,r)}(window,document,\'script\',\'ga\'));' + ('ga(\'create\',\'' + _config.googleAnalyticsId + '\',\'auto\');ga(\'send\',\'pageview\');')
        };
      }
    }, {
      key: 'mixinPanel',
      value: function mixinPanel() {
        return { __html: '<!-- start Mixpanel --><script type="text/javascript">(function(e,b){if(!b.__SV){var a,f,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");' + '2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};' + 'c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");' + 'for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=e.createElement("script");a.type="text/javascript";a.async=!0;a.src="//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";' + 'f=e.getElementsByTagName("script")[0];f.parentNode.insertBefore(a,f)}})(document,window.mixpanel||[]);' + 'mixpanel.init("662c895728a788556d9d39886bf1a3a9");</script><!-- end Mixpanel -->'
        };
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'html',
          { className: 'no-js', lang: '' },
          _react2['default'].createElement(
            'head',
            null,
            _react2['default'].createElement('meta', { charSet: 'utf-8' }),
            _react2['default'].createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }),
            _react2['default'].createElement(
              'title',
              null,
              this.props.title
            ),
            _react2['default'].createElement('meta', { name: 'description', content: this.props.description }),
            _react2['default'].createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }),
            _react2['default'].createElement('link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' }),
            _react2['default'].createElement('link', { href: 'https://cdnjs.cloudflare.com/ajax/libs/cropper/1.0.0/cropper.css', rel: 'stylesheet' }),
            _react2['default'].createElement('link', { rel: 'stylesheet', href: '//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css' }),
            _react2['default'].createElement('style', { id: 'css', dangerouslySetInnerHTML: { __html: this.props.css } })
          ),
          _react2['default'].createElement(
            'body',
            null,
            _react2['default'].createElement('div', { dangerouslySetInnerHTML: this.mixinPanel() }),
            _react2['default'].createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: this.props.body } }),
            _react2['default'].createElement('script', { src: '/app.js' }),
            _react2['default'].createElement('script', { dangerouslySetInnerHTML: this.trackingCode() })
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        title: _react.PropTypes.string,
        description: _react.PropTypes.string,
        css: _react.PropTypes.string,
        body: _react.PropTypes.string.isRequired
      },
      enumerable: true
    }, {
      key: 'defaultProps',
      value: {
        title: '',
        description: ''
      },
      enumerable: true
    }]);
  
    return Html;
  })(_react.Component);
  
  exports['default'] = Html;
  module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _LoginPageCss = __webpack_require__(72);
  
  var _LoginPageCss2 = _interopRequireDefault(_LoginPageCss);
  
  var _decoratorsWithAuthentication = __webpack_require__(7);
  
  var _decoratorsWithAuthentication2 = _interopRequireDefault(_decoratorsWithAuthentication);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _utilsAuthService = __webpack_require__(19);
  
  var _utilsAuthService2 = _interopRequireDefault(_utilsAuthService);
  
  var _reactMixin = __webpack_require__(116);
  
  var _reactMixin2 = _interopRequireDefault(_reactMixin);
  
  var LoginPage = (function (_React$Component) {
    _inherits(LoginPage, _React$Component);
  
    _createClass(LoginPage, null, [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react2['default'].PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    function LoginPage() {
      _classCallCheck(this, _LoginPage);
  
      _get(Object.getPrototypeOf(_LoginPage.prototype), 'constructor', this).call(this);
      this.state = {
        email: '',
        password: '',
        wrongCredentials: false
      };
      this.wrongCredentials = this.wrongCredentials.bind(this);
    }
  
    _createClass(LoginPage, [{
      key: 'login',
      value: function login(e) {
        var _this = this;
  
        e.preventDefault();
        _utilsAuthService2['default'].login(this.state.email, this.state.password)['catch'](function (err) {
          console.log(err);
          _this.wrongCredentials();
        });
      }
    }, {
      key: 'handleEmailChange',
      value: function handleEmailChange(event) {
        this.setState({
          email: event.target.value,
          wrongCredentials: false
        });
      }
    }, {
      key: 'handlePasswordChange',
      value: function handlePasswordChange(event) {
        this.setState({
          password: event.target.value,
          wrongCredentials: false
        });
      }
    }, {
      key: 'wrongCredentials',
      value: function wrongCredentials() {
        this.setState({
          password: "",
          wrongCredentials: true
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var title = 'Log In';
        this.context.onSetTitle(title);
        var wrongCredentials = this.state.wrongCredentials ? _react2['default'].createElement(
          'span',
          { className: 'login-wrong-credentials' },
          'Incorrect email or password'
        ) : null;
  
        if (!this.props.userLoggedIn) {
          return _react2['default'].createElement(
            'div',
            { className: 'LoginPage' },
            _react2['default'].createElement(
              'div',
              { className: 'LoginPage-container' },
              _react2['default'].createElement(
                'h1',
                null,
                title
              ),
              wrongCredentials,
              _react2['default'].createElement(
                'form',
                { role: 'form' },
                _react2['default'].createElement(
                  'div',
                  { className: 'form-group' },
                  _react2['default'].createElement('input', { type: 'text', value: this.state.email, onChange: this.handleEmailChange.bind(this), id: 'username', placeholder: 'Username' })
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'form-group' },
                  _react2['default'].createElement('input', { type: 'password', value: this.state.password, onChange: this.handlePasswordChange.bind(this), id: 'password', ref: 'password', placeholder: 'Password' })
                ),
                _react2['default'].createElement(
                  'button',
                  { type: 'submit', className: 'btn btn-default', onClick: this.login.bind(this) },
                  'Submit'
                )
              )
            )
          );
        } else {
          return _react2['default'].createElement(
            'div',
            { className: 'LoginPage' },
            _react2['default'].createElement(
              'div',
              { className: 'LoginPage-container' },
              _react2['default'].createElement(
                'h1',
                null,
                title
              ),
              _react2['default'].createElement(
                'h4',
                null,
                'You\'re already logged in!'
              )
            )
          );
        }
      }
    }]);
  
    var _LoginPage = LoginPage;
    LoginPage = (0, _decoratorsWithAuthentication2['default'])(LoginPage) || LoginPage;
    LoginPage = (0, _decoratorsWithStyles2['default'])(_LoginPageCss2['default'])(LoginPage) || LoginPage;
    return LoginPage;
  })(_react2['default'].Component);
  
  exports['default'] = LoginPage;
  module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(91);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _decoratorsWithAuthentication = __webpack_require__(7);
  
  var _decoratorsWithAuthentication2 = _interopRequireDefault(_decoratorsWithAuthentication);
  
  var _NavigationCss = __webpack_require__(73);
  
  var _NavigationCss2 = _interopRequireDefault(_NavigationCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _actionsLoginActions = __webpack_require__(10);
  
  var _actionsLoginActions2 = _interopRequireDefault(_actionsLoginActions);
  
  var _Link = __webpack_require__(6);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var Navigation = (function (_Component) {
    _inherits(Navigation, _Component);
  
    function Navigation() {
      _classCallCheck(this, _Navigation);
  
      _get(Object.getPrototypeOf(_Navigation.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(Navigation, [{
      key: 'render',
      value: function render() {
        var loginOut = this.props.userLoggedIn ? _react2['default'].createElement(
          'a',
          { className: 'Navigation-link', href: '/', onClick: _actionsLoginActions2['default'].logoutUser },
          'Log out'
        ) : _react2['default'].createElement(
          'span',
          null,
          _react2['default'].createElement(
            'a',
            { className: 'Navigation-link', href: '/login', onClick: _Link2['default'].handleClick },
            'Log in'
          ),
          _react2['default'].createElement(
            'span',
            { className: 'Navigation-spacer' },
            'or'
          ),
          _react2['default'].createElement(
            'a',
            { className: 'Navigation-link Navigation-link--highlight', href: '/register', onClick: _Link2['default'].handleClick },
            'Sign up'
          )
        );
        return _react2['default'].createElement(
          'div',
          { className: (0, _classnames2['default'])(this.props.className, 'Navigation'), role: 'navigation' },
          _react2['default'].createElement(
            'a',
            { className: 'Navigation-link', href: '/about', onClick: _Link2['default'].handleClick },
            'About'
          ),
          _react2['default'].createElement(
            'a',
            { className: 'Navigation-link', href: '/contact', onClick: _Link2['default'].handleClick },
            'Contact'
          ),
          _react2['default'].createElement(
            'span',
            { className: 'Navigation-spacer' },
            ' | '
          ),
          loginOut,
          _react2['default'].createElement(
            'span',
            { className: 'Navigation-spacer' },
            ' | '
          ),
          _react2['default'].createElement(
            'a',
            { className: 'Navigation-link Navigation-link muted', href: '#' },
            _react2['default'].createElement('i', { className: 'fa fa-share' })
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        className: _react.PropTypes.string
      },
      enumerable: true
    }]);
  
    var _Navigation = Navigation;
    Navigation = (0, _decoratorsWithAuthentication2['default'])(Navigation) || Navigation;
    Navigation = (0, _decoratorsWithStyles2['default'])(_NavigationCss2['default'])(Navigation) || Navigation;
    return Navigation;
  })(_react.Component);
  
  exports['default'] = Navigation;
  module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _NotFoundPageCss = __webpack_require__(74);
  
  var _NotFoundPageCss2 = _interopRequireDefault(_NotFoundPageCss);
  
  var _Link = __webpack_require__(6);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var NotFoundPage = (function (_Component) {
    _inherits(NotFoundPage, _Component);
  
    function NotFoundPage() {
      _classCallCheck(this, _NotFoundPage);
  
      _get(Object.getPrototypeOf(_NotFoundPage.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(NotFoundPage, [{
      key: 'render',
      value: function render() {
        var title = 'Page Not Found';
        this.context.onSetTitle(title);
        this.context.onPageNotFound();
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            title
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Sorry, but the page you were trying to view does not exist.'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Click ',
            _react2['default'].createElement(
              'a',
              { href: '/', onCLick: _Link2['default'].handleClick },
              'here'
            ),
            ' to go back home.'
          )
        );
      }
    }], [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired,
        onPageNotFound: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    var _NotFoundPage = NotFoundPage;
    NotFoundPage = (0, _decoratorsWithStyles2['default'])(_NotFoundPageCss2['default'])(NotFoundPage) || NotFoundPage;
    return NotFoundPage;
  })(_react.Component);
  
  exports['default'] = NotFoundPage;
  module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _ProductCss = __webpack_require__(75);
  
  var _ProductCss2 = _interopRequireDefault(_ProductCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _ProductImage = __webpack_require__(51);
  
  var _ProductImage2 = _interopRequireDefault(_ProductImage);
  
  var _ProductDescription = __webpack_require__(50);
  
  var _ProductDescription2 = _interopRequireDefault(_ProductDescription);
  
  var Product = (function (_Component) {
    _inherits(Product, _Component);
  
    function Product(props) {
      _classCallCheck(this, _Product);
  
      _get(Object.getPrototypeOf(_Product.prototype), 'constructor', this).call(this, props);
      this.fetchVoila = this.fetchVoila.bind(this);
    }
  
    _createClass(Product, [{
      key: 'fetchVoila',
      value: function fetchVoila() {
        this.props.fetchVoila(this.props.image);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'Product' },
          _react2['default'].createElement(
            'a',
            { href: this.props.product_url, target: '_blank' },
            _react2['default'].createElement(_ProductImage2['default'], { imageUrl: this.props.image })
          ),
          _react2['default'].createElement(_ProductDescription2['default'], { name: this.props.name, price: this.props.price, fetchVoila: this.fetchVoila })
        );
      }
    }]);
  
    var _Product = Product;
    Product = (0, _decoratorsWithStyles2['default'])(_ProductCss2['default'])(Product) || Product;
    return Product;
  })(_react.Component);
  
  exports['default'] = Product;
  module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _ProductDescriptionCss = __webpack_require__(76);
  
  var _ProductDescriptionCss2 = _interopRequireDefault(_ProductDescriptionCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _Tutorial = __webpack_require__(13);
  
  var _Tutorial2 = _interopRequireDefault(_Tutorial);
  
  var _ProductInfo = __webpack_require__(52);
  
  var _ProductInfo2 = _interopRequireDefault(_ProductInfo);
  
  var _ProductLike = __webpack_require__(53);
  
  var _ProductLike2 = _interopRequireDefault(_ProductLike);
  
  var ProductDescription = (function (_Component) {
    _inherits(ProductDescription, _Component);
  
    function ProductDescription() {
      _classCallCheck(this, _ProductDescription);
  
      _get(Object.getPrototypeOf(_ProductDescription.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(ProductDescription, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'ProductDescription' },
          _react2['default'].createElement(_ProductInfo2['default'], { name: this.props.name, price: this.props.price }),
          _react2['default'].createElement(_ProductLike2['default'], { fetchVoila: this.props.fetchVoila })
        );
      }
    }]);
  
    var _ProductDescription = ProductDescription;
    ProductDescription = (0, _decoratorsWithStyles2['default'])(_ProductDescriptionCss2['default'])(ProductDescription) || ProductDescription;
    return ProductDescription;
  })(_react.Component);
  
  exports['default'] = ProductDescription;
  module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _ProductImageCss = __webpack_require__(77);
  
  var _ProductImageCss2 = _interopRequireDefault(_ProductImageCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _Tutorial = __webpack_require__(13);
  
  var _Tutorial2 = _interopRequireDefault(_Tutorial);
  
  var ProductImage = (function (_Component) {
    _inherits(ProductImage, _Component);
  
    function ProductImage() {
      _classCallCheck(this, _ProductImage);
  
      _get(Object.getPrototypeOf(_ProductImage.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(ProductImage, [{
      key: 'render',
      value: function render() {
        var imageUrl = this.props.imageUrl;
  
        return _react2['default'].createElement(
          'div',
          { className: 'ProductImage' },
          _react2['default'].createElement('img', { src: imageUrl })
        );
      }
    }]);
  
    var _ProductImage = ProductImage;
    ProductImage = (0, _decoratorsWithStyles2['default'])(_ProductImageCss2['default'])(ProductImage) || ProductImage;
    return ProductImage;
  })(_react.Component);
  
  exports['default'] = ProductImage;
  module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _ProductInfoCss = __webpack_require__(78);
  
  var _ProductInfoCss2 = _interopRequireDefault(_ProductInfoCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var ProductInfo = (function (_Component) {
    _inherits(ProductInfo, _Component);
  
    function ProductInfo(props) {
      _classCallCheck(this, _ProductInfo);
  
      _get(Object.getPrototypeOf(_ProductInfo.prototype), 'constructor', this).call(this, props);
  
      //getting price
      var price = props.price;
      if (price !== undefined) {
        if (!(price.indexOf("$") > -1)) {
          price = "$" + price;
        }
        if (!(price.indexOf(".") > -1)) {
          price = price + ".00";
        }
      }
  
      //getting name
      var name = props.name;
  
      if (name.length > 20) {
        name = name.substring(0, 19) + "...";
      }
  
      this.state = {
        price: price,
        name: name
      };
    }
  
    _createClass(ProductInfo, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'ProductInfo' },
          _react2['default'].createElement(
            'div',
            { className: 'ProductInfo-name' },
            this.state.name
          ),
          _react2['default'].createElement(
            'div',
            { className: 'ProductInfo-price' },
            this.state.price
          )
        );
      }
    }]);
  
    var _ProductInfo = ProductInfo;
    ProductInfo = (0, _decoratorsWithStyles2['default'])(_ProductInfoCss2['default'])(ProductInfo) || ProductInfo;
    return ProductInfo;
  })(_react.Component);
  
  exports['default'] = ProductInfo;
  module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _ProductLikeCss = __webpack_require__(79);
  
  var _ProductLikeCss2 = _interopRequireDefault(_ProductLikeCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var ProductLike = (function (_Component) {
    _inherits(ProductLike, _Component);
  
    function ProductLike() {
      _classCallCheck(this, _ProductLike);
  
      _get(Object.getPrototypeOf(_ProductLike.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(ProductLike, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'ProductLike' },
          _react2['default'].createElement(
            'div',
            { className: 'ProductLike-voila', onClick: this.props.fetchVoila },
            'Voilà!'
          ),
          _react2['default'].createElement(
            'div',
            { className: 'ProductLike-heart' },
            _react2['default'].createElement(
              'i',
              { className: 'fa fa-heart-o' },
              ' '
            )
          )
        );
      }
    }]);
  
    var _ProductLike = ProductLike;
    ProductLike = (0, _decoratorsWithStyles2['default'])(_ProductLikeCss2['default'])(ProductLike) || ProductLike;
    return ProductLike;
  })(_react.Component);
  
  exports['default'] = ProductLike;
  module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _decoratorsWithAuthentication = __webpack_require__(7);
  
  var _decoratorsWithAuthentication2 = _interopRequireDefault(_decoratorsWithAuthentication);
  
  var _RegisterPageCss = __webpack_require__(80);
  
  var _RegisterPageCss2 = _interopRequireDefault(_RegisterPageCss);
  
  var _utilsAuthService = __webpack_require__(19);
  
  var _utilsAuthService2 = _interopRequireDefault(_utilsAuthService);
  
  var RegisterPage = (function (_Component) {
    _inherits(RegisterPage, _Component);
  
    _createClass(RegisterPage, null, [{
      key: 'contextTypes',
      value: {
        onSetTitle: _react.PropTypes.func.isRequired
      },
      enumerable: true
    }]);
  
    function RegisterPage() {
      _classCallCheck(this, _RegisterPage);
  
      _get(Object.getPrototypeOf(_RegisterPage.prototype), 'constructor', this).call(this);
      this.state = {
        name: '',
        email: '',
        password: '',
        errors: ''
      };
    }
  
    _createClass(RegisterPage, [{
      key: 'signup',
      value: function signup(e) {
        var _this = this;
  
        e.preventDefault();
        _utilsAuthService2['default'].signup(this.state.name, this.state.email, this.state.password)['catch'](function (err) {
          if (JSON.parse(err.response).errors) _this.registerError(JSON.parse(err.response).errors);
        });
      }
    }, {
      key: 'registerError',
      value: function registerError(errors) {
        console.log(errors);
        this.setState({
          errors: errors
        });
      }
    }, {
      key: 'nameChange',
      value: function nameChange(event) {
        this.setState({
          name: event.target.value,
          errors: ''
        });
      }
    }, {
      key: 'emailChange',
      value: function emailChange(event) {
        this.setState({
          email: event.target.value,
          errors: ''
        });
      }
    }, {
      key: 'passwordChange',
      value: function passwordChange(event) {
        this.setState({
          password: event.target.value,
          errors: ''
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;
  
        var title = 'New User Registration';
        var errs = new Array();
        this.context.onSetTitle(title);
        return _react2['default'].createElement(
          'div',
          { className: 'RegisterPage' },
          _react2['default'].createElement(
            'div',
            { className: 'RegisterPage-container' },
            _react2['default'].createElement(
              'h1',
              null,
              title
            ),
            this.state.errors ? Object.keys(this.state.errors).forEach(function (key) {
              errs.push(_this2.state.errors[key].message);
            }) : null,
            errs.map(function (err) {
              return _react2['default'].createElement(
                'p',
                { className: 'signupt-error' },
                err
              );
            }),
            _react2['default'].createElement(
              'form',
              { role: 'form' },
              _react2['default'].createElement(
                'div',
                { className: 'form-group' },
                _react2['default'].createElement('input', { type: 'text', value: this.state.name, onChange: this.nameChange.bind(this), id: 'name', placeholder: 'Name' })
              ),
              _react2['default'].createElement(
                'div',
                { className: 'form-group' },
                _react2['default'].createElement('input', { type: 'email', value: this.state.email, onChange: this.emailChange.bind(this), id: 'email', ref: 'email', placeholder: 'Email' })
              ),
              _react2['default'].createElement(
                'div',
                { className: 'form-group' },
                _react2['default'].createElement('input', { type: 'password', value: this.state.password, onChange: this.passwordChange.bind(this), id: 'password', ref: 'password', placeholder: 'Password' })
              ),
              _react2['default'].createElement(
                'button',
                { type: 'submit', className: 'btn btn-default', onClick: this.signup.bind(this) },
                'Submit'
              )
            )
          )
        );
      }
    }]);
  
    var _RegisterPage = RegisterPage;
    RegisterPage = (0, _decoratorsWithAuthentication2['default'])(RegisterPage) || RegisterPage;
    RegisterPage = (0, _decoratorsWithStyles2['default'])(_RegisterPageCss2['default'])(RegisterPage) || RegisterPage;
    return RegisterPage;
  })(_react.Component);
  
  exports['default'] = RegisterPage;
  module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _ResultNavigatorCss = __webpack_require__(81);
  
  var _ResultNavigatorCss2 = _interopRequireDefault(_ResultNavigatorCss);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var ResultNavigator = (function (_Component) {
  	_inherits(ResultNavigator, _Component);
  
  	function ResultNavigator(props) {
  		_classCallCheck(this, _ResultNavigator);
  
  		_get(Object.getPrototypeOf(_ResultNavigator.prototype), 'constructor', this).call(this, props);
  		this.getPrevious = this.getPrevious.bind(this);
  		this.getNext = this.getNext.bind(this);
  
  		this.state = {
  			page: this.props.page,
  			prevIsAvailable: this.props.page > 1,
  			nextIsAvailable: this.props.page < 20
  		};
  	}
  
  	_createClass(ResultNavigator, [{
  		key: 'getPrevious',
  		value: function getPrevious() {
  			var _this = this;
  
  			if (this.state.prevIsAvailable) {
  				new Promise(function (resolve, reject) {
  					_this.props.setPage(_this.state.page - 1);
  					resolve("page changed");
  				}).then(function () {
  					return _this.props.fetchPage(_this.state.page);
  				});
  			}
  		}
  	}, {
  		key: 'getNext',
  		value: function getNext() {
  			var _this2 = this;
  
  			if (this.state.nextIsAvailable) {
  				new Promise(function (resolve, reject) {
  					_this2.props.setPage(_this2.state.page + 1);
  					resolve("page changed");
  				}).then(function () {
  					return _this2.props.fetchPage(_this2.state.page);
  				});
  			}
  		}
  	}, {
  		key: 'render',
  		value: function render() {
  			if (!this.state.prevIsAvailable) {
  				return _react2['default'].createElement(
  					'div',
  					{ className: 'ResultNavigator' },
  					_react2['default'].createElement('i', { className: 'fa fa-arrow-left arrowButton disabled', onClick: this.getPrevious }),
  					this.state.page,
  					_react2['default'].createElement('i', { className: 'fa fa-arrow-right arrowButton', onClick: this.getNext })
  				);
  			} else if (!this.state.nextIsAvailable) {
  				return _react2['default'].createElement(
  					'div',
  					{ className: 'ResultNavigator' },
  					_react2['default'].createElement('i', { className: 'fa fa-arrow-left arrowButton', onClick: this.getPrevious }),
  					this.state.page,
  					_react2['default'].createElement('i', { className: 'fa fa-arrow-right arrowButton disabled', onClick: this.getNext })
  				);
  			} else {
  				return _react2['default'].createElement(
  					'div',
  					{ className: 'ResultNavigator' },
  					_react2['default'].createElement('i', { className: 'fa fa-arrow-left arrowButton', onClick: this.getPrevious }),
  					this.state.page,
  					_react2['default'].createElement('i', { className: 'fa fa-arrow-right arrowButton', onClick: this.getNext })
  				);
  			}
  		}
  	}]);
  
  	var _ResultNavigator = ResultNavigator;
  	ResultNavigator = (0, _decoratorsWithStyles2['default'])(_ResultNavigatorCss2['default'])(ResultNavigator) || ResultNavigator;
  	return ResultNavigator;
  })(_react.Component);
  
  exports['default'] = ResultNavigator;
  module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _VisualSearchCss = __webpack_require__(85);
  
  var _VisualSearchCss2 = _interopRequireDefault(_VisualSearchCss);
  
  var _decoratorsWithAuthentication = __webpack_require__(7);
  
  var _decoratorsWithAuthentication2 = _interopRequireDefault(_decoratorsWithAuthentication);
  
  var _decoratorsWithStyles = __webpack_require__(2);
  
  var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);
  
  var _Tutorial = __webpack_require__(13);
  
  var _Tutorial2 = _interopRequireDefault(_Tutorial);
  
  var _SearchBox = __webpack_require__(15);
  
  var _SearchBox2 = _interopRequireDefault(_SearchBox);
  
  var _SearchResults = __webpack_require__(16);
  
  var _SearchResults2 = _interopRequireDefault(_SearchResults);
  
  var _jquery = __webpack_require__(108);
  
  var _jquery2 = _interopRequireDefault(_jquery);
  
  var _storesLoginStore = __webpack_require__(14);
  
  var _storesLoginStore2 = _interopRequireDefault(_storesLoginStore);
  
  /*
  	Search Box <<
  	IF: Results
  		Results <<
  	ELSE:
  		Tutorial <<
  
          <Tutorial /> << This will hopefully be made with adobe edje animations
          <Product /> << This will be inside the Results Page
  */
  
  var VisualSearch = (function (_Component) {
  	_inherits(VisualSearch, _Component);
  
  	function VisualSearch() {
  		_classCallCheck(this, _VisualSearch);
  
  		_get(Object.getPrototypeOf(_VisualSearch.prototype), 'constructor', this).call(this);
  		this.fetchVoila = this.fetchVoila.bind(this);
  		this.fetchProducts = this.fetchProducts.bind(this);
  		this.setImageBlob = this.setImageBlob.bind(this);
  		this.setPage = this.setPage.bind(this);
  		this.setCropped = this.setCropped.bind(this);
  		this.state = {
  			resultsReceived: false,
  			searching: false,
  			productList: "",
  			imageBlob: "",
  			page: 1,
  			uploadTutorial: true
  		};
  	}
  
  	_createClass(VisualSearch, [{
  		key: 'setImageBlob',
  		value: function setImageBlob(image) {
  			this.setState({
  				imageBlob: image
  			});
  		}
  	}, {
  		key: 'setPage',
  		value: function setPage(page) {
  			this.setState({
  				page: page
  			});
  		}
  	}, {
  		key: 'setCropped',
  		value: function setCropped() {
  			this.setState({
  				uploadTutorial: false
  			});
  		}
  
  		/*
    * Get image by URL
    * PARAMS:
    	imageURL - The url of the image to search for. 
    * MANIPULTES STATES:
    	resultsRecieved
    	productList
    */
  	}, {
  		key: 'fetchVoila',
  		value: function fetchVoila(imageURL) {
  			mixpanel.track("Voila!", { "Searched URL": imageURL });
  			var formData = new FormData();
  			formData.append('im_url', imageURL);
  			formData.append('limit', '12');
  			formData.append('page', this.state.page);
  			formData.append('fl', 'product_name');
  			formData.append('fl', 'price');
  			formData.append('fl', 'sm_im_url');
  			formData.append('fl', 'product_url');
  			_jquery2['default'].ajax({
  				url: "http://visearch.visenze.com/uploadsearch",
  				type: 'POST',
  				beforeSend: function beforeSend(req) {
  					req.setRequestHeader('Authorization', 'Basic ' + btoa('c020d19b9872438002393de4d68b141b:4b7182bf60c3f6870361db3add002523'));
  				},
  				data: formData,
  				processData: false,
  				contentType: false,
  				success: (function (data) {
  					if (data.result.length > 0) {
  						this.setState({
  							resultsReceived: true,
  							searching: false,
  							productList: data.result
  						});
  					} else {
  						this.setState({
  							searching: false
  						});
  					}
  				}).bind(this),
  				error: (function (xhr, status, err) {
  					console.err(this.props.url, status, err.toString());
  				}).bind(this)
  			});
  			this.setState({
  				searching: true,
  				resultsReceived: false
  			});
  		}
  
  		/*
    * Connects to Visenze and fetches the products that compare to the image that was sent. 
    * PARAMS: 
    	imageURI - Image to upload to ViSenze for comparison.
    	start - Index of results to start searching from.
    	limit - the limit to results you want.
    * MANIPULATES STATES:
    	resultsReceived - Default is false, after results are received or changed it becomes true.
    	productList - The list of products that are returned by the ViSenze API.
    */
  	}, {
  		key: 'fetchProducts',
  		value: function fetchProducts() {
  			if (this.state.imageBlob == "") {
  				console.err("Image Blob must be set.");
  			}
  			var formData = new FormData();
  			formData.append('image', this.state.imageBlob, 'upload.jpg');
  			formData.append('limit', '12');
  			formData.append('page', this.state.page);
  			formData.append('fl', 'product_name');
  			formData.append('fl', 'price');
  			formData.append('fl', 'sm_im_url');
  			formData.append('fl', 'product_url');
  			_jquery2['default'].ajax({
  				url: "http://visearch.visenze.com/uploadsearch",
  				type: 'POST',
  				beforeSend: function beforeSend(req) {
  					req.setRequestHeader('Authorization', 'Basic ' + btoa('c020d19b9872438002393de4d68b141b:4b7182bf60c3f6870361db3add002523'));
  				},
  				data: formData,
  				processData: false,
  				contentType: false,
  				success: (function (data) {
  					if (data.result !== undefined) {
  						this.setState({
  							resultsReceived: true,
  							searching: false,
  							productList: data.result
  						});
  						mixpanel.track("Searched Images", { "Result Set": data.result });
  					} else {
  						this.setState({
  							searching: false
  						});
  					}
  				}).bind(this),
  				error: (function (xhr, status, err) {
  					console.err(this.props.url, status, err.toString());
  				}).bind(this)
  			});
  			this.setState({
  				searching: true,
  				resultsReceived: false
  			});
  		}
  	}, {
  		key: 'render',
  		value: function render() {
  			if (this.state.resultsReceived) {
  				return _react2['default'].createElement(
  					'div',
  					{ className: 'VisualSearch container' },
  					_react2['default'].createElement(_SearchResults2['default'], { setCropped: this.setCropped, setImageBlob: this.setImageBlob, fetchProducts: this.fetchProducts, fetchVoila: this.fetchVoila, products: this.state.productList, fetchPage: this.fetchProducts, setPage: this.setPage, page: this.state.page })
  				);
  			} else if (this.state.searching) {
  				return _react2['default'].createElement(
  					'div',
  					{ className: 'loadingGif container' },
  					_react2['default'].createElement('img', { className: 'loadingImage', src: 'http://martabech.com/images/loading.gif' }),
  					_react2['default'].createElement(
  						'p',
  						null,
  						'Searching...'
  					)
  				);
  			}
  			var welcome = this.props.userLoggedIn ? _react2['default'].createElement(
  				'h3',
  				{ className: 'welcome-message' },
  				' Happy shopping, ',
  				this.props.userName,
  				'!'
  			) : '';
  			return _react2['default'].createElement(
  				'div',
  				{ className: 'VisualSearch container' },
  				welcome,
  				_react2['default'].createElement(_Tutorial2['default'], { uploadTutorial: this.state.uploadTutorial }),
  				_react2['default'].createElement(_SearchBox2['default'], { setCropped: this.setCropped, setImageBlob: this.setImageBlob, fetchProducts: this.fetchProducts })
  			);
  		}
  	}]);
  
  	var _VisualSearch = VisualSearch;
  	VisualSearch = (0, _decoratorsWithAuthentication2['default'])(VisualSearch) || VisualSearch;
  	VisualSearch = (0, _decoratorsWithStyles2['default'])(_VisualSearchCss2['default'])(VisualSearch) || VisualSearch;
  	return VisualSearch;
  })(_react.Component);
  
  exports['default'] = VisualSearch;
  module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = {
    googleAnalyticsId: 'UA-XXXXX-X'
  };
  module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _superagent = __webpack_require__(117);
  
  var _superagent2 = _interopRequireDefault(_superagent);
  
  var _fbjsLibExecutionEnvironment = __webpack_require__(8);
  
  function getUrl(path) {
    if (path.startsWith('http') || _fbjsLibExecutionEnvironment.canUseDOM) {
      return path;
    }
  
    return process.env.WEBSITE_HOSTNAME ? 'http://' + process.env.WEBSITE_HOSTNAME + path : 'http://127.0.0.1:' + global.server.get('port') + path;
  }
  
  var HttpClient = {
  
    get: function get(path) {
      return new Promise(function (resolve, reject) {
        _superagent2['default'].get(getUrl(path)).accept('application/json').end(function (err, res) {
          if (err) {
            if (err.status === 404) {
              resolve(null);
            } else {
              reject(err);
            }
          } else {
            resolve(res.body);
          }
        });
      });
    }
  
  };
  
  exports['default'] = HttpClient;
  module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  // eslint-disable-line no-unused-vars
  
  var _fbjsLibEmptyFunction = __webpack_require__(99);
  
  var _fbjsLibEmptyFunction2 = _interopRequireDefault(_fbjsLibEmptyFunction);
  
  function withContext(ComposedComponent) {
    return (function (_Component) {
      _inherits(WithContext, _Component);
  
      function WithContext() {
        _classCallCheck(this, WithContext);
  
        _get(Object.getPrototypeOf(WithContext.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(WithContext, [{
        key: 'getChildContext',
        value: function getChildContext() {
          var context = this.props.context;
          return {
            onInsertCss: context.onInsertCss || _fbjsLibEmptyFunction2['default'],
            onSetTitle: context.onSetTitle || _fbjsLibEmptyFunction2['default'],
            onSetMeta: context.onSetMeta || _fbjsLibEmptyFunction2['default'],
            onPageNotFound: context.onPageNotFound || _fbjsLibEmptyFunction2['default']
          };
        }
      }, {
        key: 'render',
        value: function render() {
          var _props = this.props;
          var context = _props.context;
  
          var other = _objectWithoutProperties(_props, ['context']);
  
          // eslint-disable-line no-unused-vars
          return _react2['default'].createElement(ComposedComponent, other);
        }
      }], [{
        key: 'propTypes',
        value: {
          context: _react.PropTypes.shape({
            onInsertCss: _react.PropTypes.func,
            onSetTitle: _react.PropTypes.func,
            onSetMeta: _react.PropTypes.func,
            onPageNotFound: _react.PropTypes.func
          })
        },
        enumerable: true
      }, {
        key: 'childContextTypes',
        value: {
          onInsertCss: _react.PropTypes.func.isRequired,
          onSetTitle: _react.PropTypes.func.isRequired,
          onSetMeta: _react.PropTypes.func.isRequired,
          onPageNotFound: _react.PropTypes.func.isRequired
        },
        enumerable: true
      }]);
  
      return WithContext;
    })(_react.Component);
  }
  
  exports['default'] = withContext;
  module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  // eslint-disable-line no-unused-vars
  
  var _eventemitter3 = __webpack_require__(96);
  
  var _eventemitter32 = _interopRequireDefault(_eventemitter3);
  
  var _fbjsLibExecutionEnvironment = __webpack_require__(8);
  
  var EE = undefined;
  var viewport = { width: 1366, height: 768 }; // Default size for server-side rendering
  var RESIZE_EVENT = 'resize';
  
  function handleWindowResize() {
    if (viewport.width !== window.innerWidth || viewport.height !== window.innerHeight) {
      viewport = { width: window.innerWidth, height: window.innerHeight };
      EE.emit(RESIZE_EVENT, viewport);
    }
  }
  
  function withViewport(ComposedComponent) {
    return (function (_Component) {
      _inherits(WithViewport, _Component);
  
      function WithViewport() {
        _classCallCheck(this, WithViewport);
  
        _get(Object.getPrototypeOf(WithViewport.prototype), 'constructor', this).call(this);
  
        this.state = {
          viewport: _fbjsLibExecutionEnvironment.canUseDOM ? { width: window.innerWidth, height: window.innerHeight } : viewport
        };
      }
  
      _createClass(WithViewport, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (!EE) {
            EE = new _eventemitter32['default']();
            window.addEventListener('resize', handleWindowResize);
            window.addEventListener('orientationchange', handleWindowResize);
          }
  
          EE.on(RESIZE_EVENT, this.handleResize, this);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          EE.removeListener(RESIZE_EVENT, this.handleResize, this);
          if (!EE.listeners(RESIZE_EVENT, true)) {
            window.removeEventListener('resize', handleWindowResize);
            window.removeEventListener('orientationchange', handleWindowResize);
            EE = null;
          }
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2['default'].createElement(ComposedComponent, _extends({}, this.props, { viewport: this.state.viewport }));
        }
      }, {
        key: 'handleResize',
        value: function handleResize(value) {
          this.setState({ viewport: value }); // eslint-disable-line react/no-set-state
        }
      }]);
  
      return WithViewport;
    })(_react.Component);
  }
  
  exports['default'] = withViewport;
  module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _this = this;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _react = __webpack_require__(1);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRoutingSrcRouter = __webpack_require__(25);
  
  var _reactRoutingSrcRouter2 = _interopRequireDefault(_reactRoutingSrcRouter);
  
  var _coreHttpClient = __webpack_require__(58);
  
  var _coreHttpClient2 = _interopRequireDefault(_coreHttpClient);
  
  var _componentsApp = __webpack_require__(37);
  
  var _componentsApp2 = _interopRequireDefault(_componentsApp);
  
  var _componentsContentPage = __webpack_require__(39);
  
  var _componentsContentPage2 = _interopRequireDefault(_componentsContentPage);
  
  var _componentsContactPage = __webpack_require__(38);
  
  var _componentsContactPage2 = _interopRequireDefault(_componentsContactPage);
  
  var _componentsLoginPage = __webpack_require__(46);
  
  var _componentsLoginPage2 = _interopRequireDefault(_componentsLoginPage);
  
  var _componentsRegisterPage = __webpack_require__(54);
  
  var _componentsRegisterPage2 = _interopRequireDefault(_componentsRegisterPage);
  
  var _componentsNotFoundPage = __webpack_require__(48);
  
  var _componentsNotFoundPage2 = _interopRequireDefault(_componentsNotFoundPage);
  
  var _componentsErrorPage = __webpack_require__(41);
  
  var _componentsErrorPage2 = _interopRequireDefault(_componentsErrorPage);
  
  var _componentsVisualSearch = __webpack_require__(56);
  
  var _componentsVisualSearch2 = _interopRequireDefault(_componentsVisualSearch);
  
  var router = new _reactRoutingSrcRouter2['default'](function (on) {
    on('*', function callee$1$0(state, next) {
      var component;
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return regeneratorRuntime.awrap(next());
  
          case 2:
            component = context$2$0.sent;
            return context$2$0.abrupt('return', component && _react2['default'].createElement(
              _componentsApp2['default'],
              { context: state.context },
              component
            ));
  
          case 4:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
  
    on('/contact', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_componentsContactPage2['default'], null));
  
          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
  
    on('/login', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_componentsLoginPage2['default'], null));
  
          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
  
    on('/register', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_componentsRegisterPage2['default'], null));
  
          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
  
    on('/', function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            return context$2$0.abrupt('return', _react2['default'].createElement(_componentsVisualSearch2['default'], null));
  
          case 1:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
  
    on('*', function callee$1$0(state) {
      var content;
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return regeneratorRuntime.awrap(_coreHttpClient2['default'].get('/api/content?path=' + state.path));
  
          case 2:
            content = context$2$0.sent;
            return context$2$0.abrupt('return', content && _react2['default'].createElement(_componentsContentPage2['default'], content));
  
          case 4:
          case 'end':
            return context$2$0.stop();
        }
      }, null, _this);
    });
  
    on('error', function (state, error) {
      return state.statusCode === 404 ? _react2['default'].createElement(
        _componentsApp2['default'],
        { context: state.context, error: error },
        _react2['default'].createElement(_componentsNotFoundPage2['default'], null)
      ) : _react2['default'].createElement(
        _componentsApp2['default'],
        { context: state.context, error: error },
        _react2['default'].createElement(_componentsErrorPage2['default'], null)
      );
    });
  });
  
  exports['default'] = router;
  module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _events = __webpack_require__(97);
  
  var _coreDispatcher = __webpack_require__(17);
  
  var _coreDispatcher2 = _interopRequireDefault(_coreDispatcher);
  
  var BaseStore = (function (_EventEmitter) {
    _inherits(BaseStore, _EventEmitter);
  
    function BaseStore() {
      _classCallCheck(this, BaseStore);
  
      _get(Object.getPrototypeOf(BaseStore.prototype), 'constructor', this).call(this);
    }
  
    _createClass(BaseStore, [{
      key: 'subscribe',
      value: function subscribe(actionSubscribe) {
        this._dispatchToken = _coreDispatcher2['default'].register(actionSubscribe());
      }
    }, {
      key: 'emitChange',
      value: function emitChange() {
        this.emit('CHANGE');
      }
    }, {
      key: 'addChangeListener',
      value: function addChangeListener(cb) {
        this.on('CHANGE', cb);
      }
    }, {
      key: 'removeChangeListener',
      value: function removeChangeListener(cb) {
        this.removeListener('CHANGE', cb);
      }
    }, {
      key: 'dispatchToken',
      get: function get() {
        return this._dispatchToken;
      }
    }]);
  
    return BaseStore;
  })(_events.EventEmitter);
  
  exports['default'] = BaseStore;
  module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

  /*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _fs = __webpack_require__(103);
  
  var _fs2 = _interopRequireDefault(_fs);
  
  var exists = function exists(filename) {
    return new Promise(function (resolve) {
      _fs2['default'].exists(filename, resolve);
    });
  };
  
  var readFile = function readFile(filename) {
    return new Promise(function (resolve, reject) {
      _fs2['default'].readFile(filename, 'utf8', function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };
  
  exports['default'] = { exists: exists, readFile: readFile };
  module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  box-sizing: content-box; /* 2 */\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.members {\n  list-style: none;\n  text-align: center;\n}\n\n.member {\n  display: inline-block;\n  width: 200px;\n  height: 215px;\n  overflow: hidden;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.5);\n  padding: 20px;\n  margin: 10px;\n  box-shadow: inset 0px 2px 5px 0px rgba(0,0,0,0.75);\n}\n\n.member img{\n  width: 120px;\n  height: 120px;\n  border-radius: 110px;\n  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);\n}\n\n.member .name {\n  font-size: 18px;\n  margin-bottom: 0px;\n}\n\n.member .position {\n  color: #783E98;\n  font-size: 20px;\n  margin: 0;\n}\n\n.member .positionContainer {\n  display: table;\n  height: 100px;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n\ninput {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  padding: 10px 10px;\n  color: #783E98;\n  border: none;\n}\n\n\ninput::-webkit-input-placeholder {\n  color: #783E98;\n}\n\n\ninput::-moz-placeholder {\n  color: #783E98;\n}\n\n\ninput:-ms-input-placeholder {\n  color: #783E98;\n}\n\n\ninput::placeholder {\n  color: #783E98;\n}\n\n\ninput:focus{\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n  outline: none;\n}\n\nbutton {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  padding: 10px;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  color: #783E98;\n  border: none;\n}\n\nbutton:focus {\n  outline: none;\n}\n\nbutton:hover {\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n}\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375; /* ~22px */\n  background: -webkit-linear-gradient(270deg, #783E98 50%, #DD2476);\n  background: linear-gradient(180deg, #783E98 50%, #DD2476 );\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", ""]);
  
  // exports


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.members {\n  list-style: none;\n  text-align: center;\n}\n\n.member {\n  display: inline-block;\n  width: 200px;\n  height: 215px;\n  overflow: hidden;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.5);\n  padding: 20px;\n  margin: 10px;\n  box-shadow: inset 0px 2px 5px 0px rgba(0,0,0,0.75);\n}\n\n.member img{\n  width: 120px;\n  height: 120px;\n  border-radius: 110px;\n  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);\n\n}\n\n.member .name {\n  font-size: 18px;\n  margin-bottom: 0px;\n\n}\n\n.member .position {\n  color: #783E98;\n  font-size: 20px;\n  margin: 0;\n\n}\n\n.member .positionContainer {\n  display: table;\n  height: 100px;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n}\n\n\ninput {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  padding: 10px 10px;\n  color: #783E98;\n  border: none;\n}\n\n\ninput::-webkit-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::-moz-placeholder {\n  color: #783E98;\n\n}\n\n\ninput:-ms-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::placeholder {\n  color: #783E98;\n\n}\n\n\ninput:focus{\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n  outline: none;\n\n}\n\nbutton {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  padding: 10px;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  color: #783E98;\n  border: none;\n}\n\nbutton:focus {\n  outline: none;\n\n}\n\nbutton:hover {\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n\n}\n\n.ContactPage-container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n  color: white;\n}\n\n.ContactPage-container h1 {\n  font-weight: normal;\n\n}\n\n.ContactPage-container a{\n  text-decoration: none;\n  color: white;\n  -webkit-transition-timing-function: ease-in-out;\n          transition-timing-function: ease-in-out;\n  -webkit-transition: all .2s;\n          transition: all .2s;\n\n}\n\n.ContactPage-container a:hover{\n  text-shadow: 0 2px 5px rgba(0,0,0,0.75);\n\n}\n", ""]);
  
  // exports


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.members {\n  list-style: none;\n  text-align: center;\n}\n\n.member {\n  display: inline-block;\n  width: 200px;\n  height: 215px;\n  overflow: hidden;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.5);\n  padding: 20px;\n  margin: 10px;\n  box-shadow: inset 0px 2px 5px 0px rgba(0,0,0,0.75);\n}\n\n.member img{\n  width: 120px;\n  height: 120px;\n  border-radius: 110px;\n  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);\n\n}\n\n.member .name {\n  font-size: 18px;\n  margin-bottom: 0px;\n\n}\n\n.member .position {\n  color: #783E98;\n  font-size: 20px;\n  margin: 0;\n\n}\n\n.member .positionContainer {\n  display: table;\n  height: 100px;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n}\n\n\ninput {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  padding: 10px 10px;\n  color: #783E98;\n  border: none;\n}\n\n\ninput::-webkit-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::-moz-placeholder {\n  color: #783E98;\n\n}\n\n\ninput:-ms-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::placeholder {\n  color: #783E98;\n\n}\n\n\ninput:focus{\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n  outline: none;\n\n}\n\nbutton {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  padding: 10px;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  color: #783E98;\n  border: none;\n}\n\nbutton:focus {\n  outline: none;\n\n}\n\nbutton:hover {\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n\n}\n\n.ContentPage-container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n  color: white;\n}\n\n.ContentPage-container h1 {\n  font-weight: normal;\n\n}\n", ""]);
  
  // exports


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.members {\n  list-style: none;\n  text-align: center;\n}\n\n.member {\n  display: inline-block;\n  width: 200px;\n  height: 215px;\n  overflow: hidden;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.5);\n  padding: 20px;\n  margin: 10px;\n  box-shadow: inset 0px 2px 5px 0px rgba(0,0,0,0.75);\n}\n\n.member img{\n  width: 120px;\n  height: 120px;\n  border-radius: 110px;\n  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);\n\n}\n\n.member .name {\n  font-size: 18px;\n  margin-bottom: 0px;\n\n}\n\n.member .position {\n  color: #783E98;\n  font-size: 20px;\n  margin: 0;\n\n}\n\n.member .positionContainer {\n  display: table;\n  height: 100px;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n}\n\n\ninput {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  padding: 10px 10px;\n  color: #783E98;\n  border: none;\n}\n\n\ninput::-webkit-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::-moz-placeholder {\n  color: #783E98;\n\n}\n\n\ninput:-ms-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::placeholder {\n  color: #783E98;\n\n}\n\n\ninput:focus{\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n  outline: none;\n\n}\n\nbutton {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  padding: 10px;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  color: #783E98;\n  border: none;\n}\n\nbutton:focus {\n  outline: none;\n\n}\n\nbutton:hover {\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n\n}\n\n.crop-controls {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-flex-wrap: wrap;\n\t    -ms-flex-wrap: wrap;\n\t        flex-wrap: wrap;\n\t-webkit-box-pack: center;\n\t-webkit-justify-content: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\tcolor: white;\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t    -ms-user-select: none;\n\t        user-select: none;\n\tmargin-bottom: 80px;\n}\n\n.crop-controls .search-container {\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n}\n\n.crop-controls .search-button {\n  cursor: pointer;\n  display: block;\n  text-align: center;\n  width: 420px;\n  padding-top: 5px;\n  -webkit-transition: all .1s;\n          transition: all .1s;\n  -webkit-transition-timing-function: ease-in;\n          transition-timing-function: ease-in;\n\n}\n\n.crop-controls .search-button .search-icon {\n  padding: 10px;\n\n}\n\n.crop-controls .search-button .search-text {\n  margin: 5px;\n\n}\n\n.crop-controls .search-button:hover {\n  color: #783E98;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,0.5);\n\n}\n\n.crop-controls .rotate-button {\n  cursor: pointer;\n  display: inline-block;\n  text-align: center;\n  padding-top: 5px;\n  padding: 0 1%;\n  -webkit-transition: all .1s;\n          transition: all .1s;\n  -webkit-transition-timing-function: ease-in;\n          transition-timing-function: ease-in;\n\n}\n\n.crop-controls .rotate-button .rotate-icon {\n  padding: 10px;\n\n}\n\n.crop-controls .rotate-button .rotate-text {\n  margin: 5px;\n\n}\n\n.crop-controls .rotate-button:hover {\n  color: #783E98;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,0.5);\n\n}", ""]);
  
  // exports


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n* {\n  margin: 0;\n  line-height: 1.2;\n}\n\nhtml {\n  display: table;\n  width: 100%;\n  height: 100%;\n  color: #888;\n  text-align: center;\n  font-family: sans-serif;\n}\n\nbody {\n  display: table-cell;\n  margin: 2em auto;\n  vertical-align: middle;\n}\n\nh1 {\n  color: #555;\n  font-weight: 400;\n  font-size: 2em;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\n@media only screen and (max-width: 280px) {\n\n  body, p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n\n  }\n\n}\n", ""]);
  
  // exports


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.members {\n  list-style: none;\n  text-align: center;\n}\n\n.member {\n  display: inline-block;\n  width: 200px;\n  height: 215px;\n  overflow: hidden;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.5);\n  padding: 20px;\n  margin: 10px;\n  box-shadow: inset 0px 2px 5px 0px rgba(0,0,0,0.75);\n}\n\n.member img{\n  width: 120px;\n  height: 120px;\n  border-radius: 110px;\n  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);\n\n}\n\n.member .name {\n  font-size: 18px;\n  margin-bottom: 0px;\n\n}\n\n.member .position {\n  color: #783E98;\n  font-size: 20px;\n  margin: 0;\n\n}\n\n.member .positionContainer {\n  display: table;\n  height: 100px;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n}\n\n\ninput {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  padding: 10px 10px;\n  color: #783E98;\n  border: none;\n}\n\n\ninput::-webkit-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::-moz-placeholder {\n  color: #783E98;\n\n}\n\n\ninput:-ms-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::placeholder {\n  color: #783E98;\n\n}\n\n\ninput:focus{\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n  outline: none;\n\n}\n\nbutton {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  padding: 10px;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  color: #783E98;\n  border: none;\n}\n\nbutton:focus {\n  outline: none;\n\n}\n\nbutton:hover {\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n\n}\n\n.Feedback {\n  background: #FFFFFF;\n  background: rgba(255,255,255,.80);\n  color: #333;\n}\n\n.Feedback-container {\n  margin: 0 auto;\n  padding: 8px;\n  max-width: 1000px;\n  text-align: center;\n  font-size: 3em; /* ~24px */\n}\n\n.Feedback-link{\n  -webkit-transition-timing-function: ease-in;\n          transition-timing-function: ease-in;\n  -webkit-transition: all .1s;\n          transition: all .1s;\n  margin: auto 5%;\n  color: #DD2476;\n  text-decoration: none;\n}\n.Feedback-link:active,\n.Feedback-link:visited {\n  margin: auto 5%;\n  color: #DD2476;\n  text-decoration: none;\n}\n\n.Feedback-link:hover {\n  text-decoration: underline;\n}\n\n.Feedback-spacer {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.Feedback-link:hover{\n  margin: auto 5%;\n  color: #783E98;\n  text-decoration: none;\n}\n", ""]);
  
  // exports


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.members {\n  list-style: none;\n  text-align: center;\n}\n\n.member {\n  display: inline-block;\n  width: 200px;\n  height: 215px;\n  overflow: hidden;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.5);\n  padding: 20px;\n  margin: 10px;\n  box-shadow: inset 0px 2px 5px 0px rgba(0,0,0,0.75);\n}\n\n.member img{\n  width: 120px;\n  height: 120px;\n  border-radius: 110px;\n  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);\n\n}\n\n.member .name {\n  font-size: 18px;\n  margin-bottom: 0px;\n\n}\n\n.member .position {\n  color: #783E98;\n  font-size: 20px;\n  margin: 0;\n\n}\n\n.member .positionContainer {\n  display: table;\n  height: 100px;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n}\n\n\ninput {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  padding: 10px 10px;\n  color: #783E98;\n  border: none;\n}\n\n\ninput::-webkit-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::-moz-placeholder {\n  color: #783E98;\n\n}\n\n\ninput:-ms-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::placeholder {\n  color: #783E98;\n\n}\n\n\ninput:focus{\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n  outline: none;\n\n}\n\nbutton {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  padding: 10px;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  color: #783E98;\n  border: none;\n}\n\nbutton:focus {\n  outline: none;\n\n}\n\nbutton:hover {\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n\n}\n\n.Footer {\n  background: #333;\n  color: #fff;\n  bottom: 0;\n}\n\n.Footer-container {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: 1000px;\n  text-align: center;\n}\n\n.Footer-text {\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, .5);\n}\n\n.Footer-text--muted {\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, .3);\n}\n\n.Footer-spacer {\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, .3);\n}\n\n.Footer-text,\n.Footer-link {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.Footer-link,\n.Footer-link:active,\n.Footer-link:visited {\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, .6);\n  text-decoration: none;\n}\n\n.Footer-link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n", ""]);
  
  // exports


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.members {\n  list-style: none;\n  text-align: center;\n}\n\n.member {\n  display: inline-block;\n  width: 200px;\n  height: 215px;\n  overflow: hidden;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.5);\n  padding: 20px;\n  margin: 10px;\n  box-shadow: inset 0px 2px 5px 0px rgba(0,0,0,0.75);\n}\n\n.member img{\n  width: 120px;\n  height: 120px;\n  border-radius: 110px;\n  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);\n\n}\n\n.member .name {\n  font-size: 18px;\n  margin-bottom: 0px;\n\n}\n\n.member .position {\n  color: #783E98;\n  font-size: 20px;\n  margin: 0;\n\n}\n\n.member .positionContainer {\n  display: table;\n  height: 100px;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n}\n\n\ninput {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  padding: 10px 10px;\n  color: #783E98;\n  border: none;\n}\n\n\ninput::-webkit-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::-moz-placeholder {\n  color: #783E98;\n\n}\n\n\ninput:-ms-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::placeholder {\n  color: #783E98;\n\n}\n\n\ninput:focus{\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n  outline: none;\n\n}\n\nbutton {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  padding: 10px;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  color: #783E98;\n  border: none;\n}\n\nbutton:focus {\n  outline: none;\n\n}\n\nbutton:hover {\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n\n}\n\n.Header {\n  background: #783E98;\n  color: #fff;\n}\n\n.Header-container {\n  margin: 0 auto;\n  padding: 20px 0;\n  max-width: 1000px;\n}\n\n.Header-brand {\n  color: rgb(146, 229, 252);\n  text-decoration: none;\n  font-size: 1.75em; /* ~28px */\n}\n\n.Header-brandTxt {\n  margin-left: 10px;\n}\n\n.Header-nav {\n  float: right;\n  margin-top: 20px;\n}\n\n.Header-banner {\n  text-align: center;\n}\n\n.Header-bannerTitle {\n  margin: 0;\n  padding: 10px;\n  font-weight: normal;\n  font-size: 2.5em;\n  line-height: 1em;\n}\n\n.Header-bannerDesc {\n  padding: 0;\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, .5);\n  font-size: 1.25em;\n  margin: 0;\n}\n", ""]);
  
  // exports


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.members {\n  list-style: none;\n  text-align: center;\n}\n\n.member {\n  display: inline-block;\n  width: 200px;\n  height: 215px;\n  overflow: hidden;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.5);\n  padding: 20px;\n  margin: 10px;\n  box-shadow: inset 0px 2px 5px 0px rgba(0,0,0,0.75);\n}\n\n.member img{\n  width: 120px;\n  height: 120px;\n  border-radius: 110px;\n  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);\n\n}\n\n.member .name {\n  font-size: 18px;\n  margin-bottom: 0px;\n\n}\n\n.member .position {\n  color: #783E98;\n  font-size: 20px;\n  margin: 0;\n\n}\n\n.member .positionContainer {\n  display: table;\n  height: 100px;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n}\n\n\ninput {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  padding: 10px 10px;\n  color: #783E98;\n  border: none;\n}\n\n\ninput::-webkit-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::-moz-placeholder {\n  color: #783E98;\n\n}\n\n\ninput:-ms-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::placeholder {\n  color: #783E98;\n\n}\n\n\ninput:focus{\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n  outline: none;\n\n}\n\nbutton {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  padding: 10px;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  color: #783E98;\n  border: none;\n}\n\nbutton:focus {\n  outline: none;\n\n}\n\nbutton:hover {\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n\n}\n\n.LoginPage-container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n  color: white;\n}\n\n.LoginPage-container h1 {\n  font-weight: normal;\n\n}\n\n.LoginPage-container input {\n  margin-bottom: 10px;\n\n}\n", ""]);
  
  // exports


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n.Navigation-link {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.Navigation-link,\n.Navigation-link:active,\n.Navigation-link:visited {\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, .6);\n}\n\n.Navigation-link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n.Navigation-link--highlight {\n  margin-right: 8px;\n  margin-left: 8px;\n  border-radius: 3px;\n  background: #000000;\n  background: rgba(0, 0, 0, .15);\n  color: #fff;\n}\n\n.Navigation-link--highlight:hover {\n  background: #000000;\n  background: rgba(0, 0, 0, .3);\n}\n\n.Navigation-spacer {\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, .3);\n}\n.muted {\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, .1);\n  cursor: pointer;\n}\n.muted:hover{\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, .1);\n}\n", ""]);
  
  // exports


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n* {\n  margin: 0;\n  line-height: 1.2;\n}\n\nhtml {\n  display: table;\n  width: 100%;\n  height: 100%;\n  color: #888;\n  text-align: center;\n  font-family: sans-serif;\n}\n\nbody {\n  display: table-cell;\n  margin: 2em auto;\n  vertical-align: middle;\n}\n\nh1 {\n  color: white;\n  font-weight: 400;\n  font-size: 2em;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n  color: #FFFFFF;\n  color: rgba(255,255,255,.5);\n}\n\n@media only screen and (max-width: 280px) {\n\n  body, p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n\n}\n", ""]);
  
  // exports


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.members {\n  list-style: none;\n  text-align: center;\n}\n\n.member {\n  display: inline-block;\n  width: 200px;\n  height: 215px;\n  overflow: hidden;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.5);\n  padding: 20px;\n  margin: 10px;\n  box-shadow: inset 0px 2px 5px 0px rgba(0,0,0,0.75);\n}\n\n.member img{\n  width: 120px;\n  height: 120px;\n  border-radius: 110px;\n  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);\n\n}\n\n.member .name {\n  font-size: 18px;\n  margin-bottom: 0px;\n\n}\n\n.member .position {\n  color: #783E98;\n  font-size: 20px;\n  margin: 0;\n\n}\n\n.member .positionContainer {\n  display: table;\n  height: 100px;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n}\n\n\ninput {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  padding: 10px 10px;\n  color: #783E98;\n  border: none;\n}\n\n\ninput::-webkit-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::-moz-placeholder {\n  color: #783E98;\n\n}\n\n\ninput:-ms-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::placeholder {\n  color: #783E98;\n\n}\n\n\ninput:focus{\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n  outline: none;\n\n}\n\nbutton {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  padding: 10px;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  color: #783E98;\n  border: none;\n}\n\nbutton:focus {\n  outline: none;\n\n}\n\nbutton:hover {\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n\n}\n\n.Product {\n\tbackground-color: #FFFFFF;\n\tbackground-color: rgba(255,255,255,.80);\n    bottom: 0;\n    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.3);\n    height: 305px;\n    margin: 20px;\n    overflow: hidden;\n    width: 250px;\n    display: inline-block;\n}", ""]);
  
  // exports


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, ".ProductDescription {\n\tcolor: black;\n}", ""]);
  
  // exports


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, ".ProductImage {;\n\n\ttext-align: center;\n\toverflow: hidden;\n\tpadding: 10px 0;\n}\n.ProductImage img {;\n\n\twidth: 230px;;\n\n\tpadding: 1px;;\n\n\tborder: 1px solid white;;\n\n\tmax-height: 230px;\n}", ""]);
  
  // exports


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, ".ProductInfo {\n\tmargin: 0 10px;\n\tposition: relative;\n}\n.ProductInfo-name {\n\tdisplay: inline-block;\n}\n.ProductInfo-price {\n\tdisplay: inline-block;\n\tright: 0;\n\tposition: absolute;\n}", ""]);
  
  // exports


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, ".ProductLike {\n\tmargin: 0 10px;\n\tposition: relative;\n}\n.ProductLike-voila {\n\tdisplay: inline-block;\n\tcolor: #783E98;\n\tfont-weight: 600;\n\tcursor: pointer;\n}\n.ProductLike-heart {\n\tcolor: #000000;\n\tcolor: rgba(0,0,0,.3);\n\tdisplay: inline-block;\n\tright: 0;\n\tposition: absolute;\n}", ""]);
  
  // exports


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.members {\n  list-style: none;\n  text-align: center;\n}\n\n.member {\n  display: inline-block;\n  width: 200px;\n  height: 215px;\n  overflow: hidden;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.5);\n  padding: 20px;\n  margin: 10px;\n  box-shadow: inset 0px 2px 5px 0px rgba(0,0,0,0.75);\n}\n\n.member img{\n  width: 120px;\n  height: 120px;\n  border-radius: 110px;\n  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);\n\n}\n\n.member .name {\n  font-size: 18px;\n  margin-bottom: 0px;\n\n}\n\n.member .position {\n  color: #783E98;\n  font-size: 20px;\n  margin: 0;\n\n}\n\n.member .positionContainer {\n  display: table;\n  height: 100px;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n}\n\n\ninput {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  padding: 10px 10px;\n  color: #783E98;\n  border: none;\n}\n\n\ninput::-webkit-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::-moz-placeholder {\n  color: #783E98;\n\n}\n\n\ninput:-ms-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::placeholder {\n  color: #783E98;\n\n}\n\n\ninput:focus{\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n  outline: none;\n\n}\n\nbutton {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  padding: 10px;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  color: #783E98;\n  border: none;\n}\n\nbutton:focus {\n  outline: none;\n\n}\n\nbutton:hover {\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n\n}\n\n.RegisterPage-container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n  color: white;\n}\n\n.RegisterPage-container h1 {\n  font-weight: normal;\n\n}\n\n.RegisterPage-container input {\n  margin-bottom: 10px;\n\n}\n.registerContainer {\n\tmargin-bottom: 40px;\n\toverflow: scroll;\n\twidth: 100%;\n\tmax-height: 650px;\n\tbox-shadow: 0px 0px 10px 2px rgba(0,0,0,0.3);\n }\n .registerFrame {\n\tmargin-top: -50px;\n\theight: 830px;\n\twidth: 100%;\n}\n", ""]);
  
  // exports


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.members {\n  list-style: none;\n  text-align: center;\n}\n\n.member {\n  display: inline-block;\n  width: 200px;\n  height: 215px;\n  overflow: hidden;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.5);\n  padding: 20px;\n  margin: 10px;\n  box-shadow: inset 0px 2px 5px 0px rgba(0,0,0,0.75);\n}\n\n.member img{\n  width: 120px;\n  height: 120px;\n  border-radius: 110px;\n  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);\n\n}\n\n.member .name {\n  font-size: 18px;\n  margin-bottom: 0px;\n\n}\n\n.member .position {\n  color: #783E98;\n  font-size: 20px;\n  margin: 0;\n\n}\n\n.member .positionContainer {\n  display: table;\n  height: 100px;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n}\n\n\ninput {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  padding: 10px 10px;\n  color: #783E98;\n  border: none;\n}\n\n\ninput::-webkit-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::-moz-placeholder {\n  color: #783E98;\n\n}\n\n\ninput:-ms-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::placeholder {\n  color: #783E98;\n\n}\n\n\ninput:focus{\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n  outline: none;\n\n}\n\nbutton {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  padding: 10px;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  color: #783E98;\n  border: none;\n}\n\nbutton:focus {\n  outline: none;\n\n}\n\nbutton:hover {\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n\n}\n\n.ResultNavigator {\n\tpadding: 5px;\n\ttext-align: center;\n\tfont-size: 20px;\n\tcolor: white;\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t    -ms-user-select: none;\n\t        user-select: none;\n\tcursor: default;\n}\n\n.ResultNavigator .arrowButton {\n  padding: 5px;\n  margin: 0 5%;\n  cursor: pointer;\n\n}\n\n.ResultNavigator .disabled {\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, .5);\n  cursor: default;\n\n}", ""]);
  
  // exports


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.members {\n  list-style: none;\n  text-align: center;\n}\n\n.member {\n  display: inline-block;\n  width: 200px;\n  height: 215px;\n  overflow: hidden;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.5);\n  padding: 20px;\n  margin: 10px;\n  box-shadow: inset 0px 2px 5px 0px rgba(0,0,0,0.75);\n}\n\n.member img{\n  width: 120px;\n  height: 120px;\n  border-radius: 110px;\n  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);\n\n}\n\n.member .name {\n  font-size: 18px;\n  margin-bottom: 0px;\n\n}\n\n.member .position {\n  color: #783E98;\n  font-size: 20px;\n  margin: 0;\n\n}\n\n.member .positionContainer {\n  display: table;\n  height: 100px;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n}\n\n\ninput {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  padding: 10px 10px;\n  color: #783E98;\n  border: none;\n}\n\n\ninput::-webkit-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::-moz-placeholder {\n  color: #783E98;\n\n}\n\n\ninput:-ms-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::placeholder {\n  color: #783E98;\n\n}\n\n\ninput:focus{\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n  outline: none;\n\n}\n\nbutton {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  padding: 10px;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  color: #783E98;\n  border: none;\n}\n\nbutton:focus {\n  outline: none;\n\n}\n\nbutton:hover {\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n\n}\n\n.SearchBox {\n\twidth: 100%;\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-flex-wrap: wrap;\n\t    -ms-flex-wrap: wrap;\n\t        flex-wrap: wrap;\n\t-webkit-box-pack: center;\n\t-webkit-justify-content: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n}\n\n@media screen and (min-width: 480px) {\n\n  .SearchBox .cropper-container {\n    margin: 35px 20% 35px 20%;\n    outline: solid 20px #FFFFFF;\n    outline: solid 20px rgba(255, 255, 255, .5);\n\n  }\n\n}\n\n.SearchBox .crop-controls {\n  width: 100%;\n\n}\n\n.SearchBox .drop-zone {\n  border: 1px dashed white;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: 10px;\n  max-width: 300px;\n  padding: 60px;\n  color: #FFFFFF;\n  color: rgba(255, 255, 255, .5);\n  font-size: 1.25em;\n  text-align: center;\n  background-color: #323232;\n  background-color: rgba(50,50,50,.1);\n  box-shadow: inset 0px 0px 20px -3px rgba(0,0,0,0.75);\n  margin: 20px;\n  margin-top: 40px;\n  cursor: crosshair;\n  margin-bottom: 80px;\n\n}", ""]);
  
  // exports


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.members {\n  list-style: none;\n  text-align: center;\n}\n\n.member {\n  display: inline-block;\n  width: 200px;\n  height: 215px;\n  overflow: hidden;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.5);\n  padding: 20px;\n  margin: 10px;\n  box-shadow: inset 0px 2px 5px 0px rgba(0,0,0,0.75);\n}\n\n.member img{\n  width: 120px;\n  height: 120px;\n  border-radius: 110px;\n  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);\n\n}\n\n.member .name {\n  font-size: 18px;\n  margin-bottom: 0px;\n\n}\n\n.member .position {\n  color: #783E98;\n  font-size: 20px;\n  margin: 0;\n\n}\n\n.member .positionContainer {\n  display: table;\n  height: 100px;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n}\n\n\ninput {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  padding: 10px 10px;\n  color: #783E98;\n  border: none;\n}\n\n\ninput::-webkit-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::-moz-placeholder {\n  color: #783E98;\n\n}\n\n\ninput:-ms-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::placeholder {\n  color: #783E98;\n\n}\n\n\ninput:focus{\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n  outline: none;\n\n}\n\nbutton {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  padding: 10px;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  color: #783E98;\n  border: none;\n}\n\nbutton:focus {\n  outline: none;\n\n}\n\nbutton:hover {\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n\n}\n\n.SearchResults {\n\tmargin: 10px;\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-flex-wrap: wrap;\n\t    -ms-flex-wrap: wrap;\n\t        flex-wrap: wrap;\n\t-webkit-box-pack: center;\n\t-webkit-justify-content: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n}", ""]);
  
  // exports


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, ".edgeFrame {\n\tborder: none;\n}\n.Tutorial {\n\theight: 400px;\n\ttext-align: center;\n\twidth: 100% !important;\n\toverflow: hidden;\n}", ""]);
  
  // exports


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, "/* React Starter Kit | MIT License | http://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Colors\n   * ======================================================================== */ /* #222 */   /* #404040 */ /* #555 */ /* #777 */ /* #eee */\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Animations\n   * ======================================================================== */\n\n}\n\n.members {\n  list-style: none;\n  text-align: center;\n}\n\n.member {\n  display: inline-block;\n  width: 200px;\n  height: 215px;\n  overflow: hidden;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.5);\n  padding: 20px;\n  margin: 10px;\n  box-shadow: inset 0px 2px 5px 0px rgba(0,0,0,0.75);\n}\n\n.member img{\n  width: 120px;\n  height: 120px;\n  border-radius: 110px;\n  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);\n\n}\n\n.member .name {\n  font-size: 18px;\n  margin-bottom: 0px;\n\n}\n\n.member .position {\n  color: #783E98;\n  font-size: 20px;\n  margin: 0;\n\n}\n\n.member .positionContainer {\n  display: table;\n  height: 100px;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n}\n\n\ninput {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  padding: 10px 10px;\n  color: #783E98;\n  border: none;\n}\n\n\ninput::-webkit-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::-moz-placeholder {\n  color: #783E98;\n\n}\n\n\ninput:-ms-input-placeholder {\n  color: #783E98;\n\n}\n\n\ninput::placeholder {\n  color: #783E98;\n\n}\n\n\ninput:focus{\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n  outline: none;\n\n}\n\nbutton {\n  -webkit-transition: all 0.2s ease-in-out;\n          transition: all 0.2s ease-in-out;\n  padding: 10px;\n  background-color: #FFFFFF;\n  background-color: rgba(255,255,255,.6);\n  color: #783E98;\n  border: none;\n}\n\nbutton:focus {\n  outline: none;\n\n}\n\nbutton:hover {\n  box-shadow: 0px 2px 22px -4px rgba(0,0,0,0.75);\n\n}\n.loadingGif {\n\twidth: 100vw;\n\tmin-height: 300px;\n\ttext-align: center;\n\toverflow: hidden;\n}\n.loadingGif .loadingImage {\n  margin-top: 30px;\n  max-width: 99%;\n\n}\n.loadingGif p {\n  color: white;\n  font-size: 1.25em;\n  margin-bottom: 50px;\n  line-height: 20px;\n\n}\n.welcome-message {\n\tcolor: #FFFFFF;\n\tcolor: rgba(255,255,255,.7);\n\tfont-weight: 500;\n\ttext-align: center;\n}", ""]);
  
  // exports


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

  var isarray = __webpack_require__(87)
  
  /**
   * Expose `pathToRegexp`.
   */
  module.exports = pathToRegexp
  module.exports.parse = parse
  module.exports.compile = compile
  module.exports.tokensToFunction = tokensToFunction
  module.exports.tokensToRegExp = tokensToRegExp
  
  /**
   * The main path matching regexp utility.
   *
   * @type {RegExp}
   */
  var PATH_REGEXP = new RegExp([
    // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    '(\\\\.)',
    // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
    // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
    // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
    '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'
  ].join('|'), 'g')
  
  /**
   * Parse a string for the raw tokens.
   *
   * @param  {String} str
   * @return {Array}
   */
  function parse (str) {
    var tokens = []
    var key = 0
    var index = 0
    var path = ''
    var res
  
    while ((res = PATH_REGEXP.exec(str)) != null) {
      var m = res[0]
      var escaped = res[1]
      var offset = res.index
      path += str.slice(index, offset)
      index = offset + m.length
  
      // Ignore already escaped sequences.
      if (escaped) {
        path += escaped[1]
        continue
      }
  
      // Push the current path onto the tokens.
      if (path) {
        tokens.push(path)
        path = ''
      }
  
      var prefix = res[2]
      var name = res[3]
      var capture = res[4]
      var group = res[5]
      var suffix = res[6]
      var asterisk = res[7]
  
      var repeat = suffix === '+' || suffix === '*'
      var optional = suffix === '?' || suffix === '*'
      var delimiter = prefix || '/'
      var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')
  
      tokens.push({
        name: name || key++,
        prefix: prefix || '',
        delimiter: delimiter,
        optional: optional,
        repeat: repeat,
        pattern: escapeGroup(pattern)
      })
    }
  
    // Match any characters still remaining.
    if (index < str.length) {
      path += str.substr(index)
    }
  
    // If the path exists, push it onto the end.
    if (path) {
      tokens.push(path)
    }
  
    return tokens
  }
  
  /**
   * Compile a string to a template function for the path.
   *
   * @param  {String}   str
   * @return {Function}
   */
  function compile (str) {
    return tokensToFunction(parse(str))
  }
  
  /**
   * Expose a method for transforming tokens into the path function.
   */
  function tokensToFunction (tokens) {
    // Compile all the tokens into regexps.
    var matches = new Array(tokens.length)
  
    // Compile all the patterns before compilation.
    for (var i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] === 'object') {
        matches[i] = new RegExp('^' + tokens[i].pattern + '$')
      }
    }
  
    return function (obj) {
      var path = ''
      var data = obj || {}
  
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i]
  
        if (typeof token === 'string') {
          path += token
  
          continue
        }
  
        var value = data[token.name]
        var segment
  
        if (value == null) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to be defined')
          }
        }
  
        if (isarray(value)) {
          if (!token.repeat) {
            throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + value + '"')
          }
  
          if (value.length === 0) {
            if (token.optional) {
              continue
            } else {
              throw new TypeError('Expected "' + token.name + '" to not be empty')
            }
          }
  
          for (var j = 0; j < value.length; j++) {
            segment = encodeURIComponent(value[j])
  
            if (!matches[i].test(segment)) {
              throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
            }
  
            path += (j === 0 ? token.prefix : token.delimiter) + segment
          }
  
          continue
        }
  
        segment = encodeURIComponent(value)
  
        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
        }
  
        path += token.prefix + segment
      }
  
      return path
    }
  }
  
  /**
   * Escape a regular expression string.
   *
   * @param  {String} str
   * @return {String}
   */
  function escapeString (str) {
    return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1')
  }
  
  /**
   * Escape the capturing group by escaping special characters and meaning.
   *
   * @param  {String} group
   * @return {String}
   */
  function escapeGroup (group) {
    return group.replace(/([=!:$\/()])/g, '\\$1')
  }
  
  /**
   * Attach the keys as a property of the regexp.
   *
   * @param  {RegExp} re
   * @param  {Array}  keys
   * @return {RegExp}
   */
  function attachKeys (re, keys) {
    re.keys = keys
    return re
  }
  
  /**
   * Get the flags for a regexp from the options.
   *
   * @param  {Object} options
   * @return {String}
   */
  function flags (options) {
    return options.sensitive ? '' : 'i'
  }
  
  /**
   * Pull out keys from a regexp.
   *
   * @param  {RegExp} path
   * @param  {Array}  keys
   * @return {RegExp}
   */
  function regexpToRegexp (path, keys) {
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g)
  
    if (groups) {
      for (var i = 0; i < groups.length; i++) {
        keys.push({
          name: i,
          prefix: null,
          delimiter: null,
          optional: false,
          repeat: false,
          pattern: null
        })
      }
    }
  
    return attachKeys(path, keys)
  }
  
  /**
   * Transform an array into a regexp.
   *
   * @param  {Array}  path
   * @param  {Array}  keys
   * @param  {Object} options
   * @return {RegExp}
   */
  function arrayToRegexp (path, keys, options) {
    var parts = []
  
    for (var i = 0; i < path.length; i++) {
      parts.push(pathToRegexp(path[i], keys, options).source)
    }
  
    var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))
  
    return attachKeys(regexp, keys)
  }
  
  /**
   * Create a path regexp from string input.
   *
   * @param  {String} path
   * @param  {Array}  keys
   * @param  {Object} options
   * @return {RegExp}
   */
  function stringToRegexp (path, keys, options) {
    var tokens = parse(path)
    var re = tokensToRegExp(tokens, options)
  
    // Attach keys back to the regexp.
    for (var i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] !== 'string') {
        keys.push(tokens[i])
      }
    }
  
    return attachKeys(re, keys)
  }
  
  /**
   * Expose a function for taking tokens and returning a RegExp.
   *
   * @param  {Array}  tokens
   * @param  {Array}  keys
   * @param  {Object} options
   * @return {RegExp}
   */
  function tokensToRegExp (tokens, options) {
    options = options || {}
  
    var strict = options.strict
    var end = options.end !== false
    var route = ''
    var lastToken = tokens[tokens.length - 1]
    var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)
  
    // Iterate over the tokens and create our regexp string.
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]
  
      if (typeof token === 'string') {
        route += escapeString(token)
      } else {
        var prefix = escapeString(token.prefix)
        var capture = token.pattern
  
        if (token.repeat) {
          capture += '(?:' + prefix + capture + ')*'
        }
  
        if (token.optional) {
          if (prefix) {
            capture = '(?:' + prefix + '(' + capture + '))?'
          } else {
            capture = '(' + capture + ')?'
          }
        } else {
          capture = prefix + '(' + capture + ')'
        }
  
        route += capture
      }
    }
  
    // In non-strict mode we allow a slash at the end of match. If the path to
    // match already ends with a slash, we remove it for consistency. The slash
    // is valid at the end of a path match, not in the middle. This is important
    // in non-ending mode, where "/test/" shouldn't match "/test//route".
    if (!strict) {
      route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
    }
  
    if (end) {
      route += '$'
    } else {
      // In non-ending mode, we need the capturing groups to match as much as
      // possible by using a positive lookahead to the end or next path segment.
      route += strict && endsWithSlash ? '' : '(?=\\/|$)'
    }
  
    return new RegExp('^' + route, flags(options))
  }
  
  /**
   * Normalize the given path string, returning a regular expression.
   *
   * An empty array can be passed in for the keys, which will hold the
   * placeholder key descriptions. For example, using `/user/:id`, `keys` will
   * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
   *
   * @param  {(String|RegExp|Array)} path
   * @param  {Array}                 [keys]
   * @param  {Object}                [options]
   * @return {RegExp}
   */
  function pathToRegexp (path, keys, options) {
    keys = keys || []
  
    if (!isarray(keys)) {
      options = keys
      keys = []
    } else if (!options) {
      options = {}
    }
  
    if (path instanceof RegExp) {
      return regexpToRegexp(path, keys, options)
    }
  
    if (isarray(path)) {
      return arrayToRegexp(path, keys, options)
    }
  
    return stringToRegexp(path, keys, options)
  }


/***/ },
/* 87 */
/***/ function(module, exports) {

  module.exports = Array.isArray || function (arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
  };


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "5d10c6a6cf72d6ffbad2b6851c4fe8e6.png"

/***/ },
/* 89 */
/***/ function(module, exports) {

  module.exports = require("babel-core/polyfill");

/***/ },
/* 90 */
/***/ function(module, exports) {

  module.exports = require("body-parser");

/***/ },
/* 91 */
/***/ function(module, exports) {

  module.exports = require("classnames");

/***/ },
/* 92 */
/***/ function(module, exports) {

  module.exports = require("composable-middleware");

/***/ },
/* 93 */
/***/ function(module, exports) {

  module.exports = require("cookie-parser");

/***/ },
/* 94 */
/***/ function(module, exports) {

  module.exports = require("cropperjs");

/***/ },
/* 95 */
/***/ function(module, exports) {

  module.exports = require("crypto");

/***/ },
/* 96 */
/***/ function(module, exports) {

  module.exports = require("eventemitter3");

/***/ },
/* 97 */
/***/ function(module, exports) {

  module.exports = require("events");

/***/ },
/* 98 */
/***/ function(module, exports) {

  module.exports = require("express-jwt");

/***/ },
/* 99 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/emptyFunction");

/***/ },
/* 100 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/invariant");

/***/ },
/* 101 */
/***/ function(module, exports) {

  module.exports = require("flux");

/***/ },
/* 102 */
/***/ function(module, exports) {

  module.exports = require("front-matter");

/***/ },
/* 103 */
/***/ function(module, exports) {

  module.exports = require("fs");

/***/ },
/* 104 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 105 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 106 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 107 */
/***/ function(module, exports) {

  module.exports = require("jade");

/***/ },
/* 108 */
/***/ function(module, exports) {

  module.exports = require("jquery");

/***/ },
/* 109 */
/***/ function(module, exports) {

  module.exports = require("jwt-decode");

/***/ },
/* 110 */
/***/ function(module, exports) {

  module.exports = require("lodash");

/***/ },
/* 111 */
/***/ function(module, exports) {

  module.exports = require("method-override");

/***/ },
/* 112 */
/***/ function(module, exports) {

  module.exports = require("passport-facebook");

/***/ },
/* 113 */
/***/ function(module, exports) {

  module.exports = require("passport-local");

/***/ },
/* 114 */
/***/ function(module, exports) {

  module.exports = require("react-dom/server");

/***/ },
/* 115 */
/***/ function(module, exports) {

  module.exports = require("react-dropzone");

/***/ },
/* 116 */
/***/ function(module, exports) {

  module.exports = require("react-mixin");

/***/ },
/* 117 */
/***/ function(module, exports) {

  module.exports = require("superagent");

/***/ },
/* 118 */
/***/ function(module, exports) {

  module.exports = require("when");

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map