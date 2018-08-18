/*
    ES 6 Modules

    Import
    Export
    Default

*/

import firstModule from './ordinaryModule';
import {add, subtract} from './math';

add(1,2);
subtract(1,2);
firstModule('mehmet');

//-------------------------------------------------
//-------------------------------------------------

import * as math from './math';
math.add(1, 2);
math.subtract(1, 2);

import greetings, {add, subtract} from './math';
greetings();
add(1,2);
subtract(1,2);