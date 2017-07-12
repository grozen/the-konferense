import { forall, assert, nat, Options } from 'jsverify';
import { diagramArbitrary, withTime } from 'cyclejs-test-helpers';
const htmlLooksLike = require('html-looks-like');
const toHtml = require('snabbdom-to-html'); //snabbdom-to-html's typings are broken

import xs, { Stream } from 'xstream';
import { mockDOMSource, VNode } from '@cycle/dom';
import { mockTimeSource } from '@cycle/time';
import onionify from 'cycle-onionify';

import { App } from '../src/app';

// Maybe I'll add some tests here at some point...?
