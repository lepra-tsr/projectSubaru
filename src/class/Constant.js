"use strict";

/*
 * 定数モジュール
 */

const SQRT2 = Math.sqrt(2);


/*
 * canvas config
 */
export const CANVAS_ID = 'subaru';

/*
 * indicator
 */
export const INDICATOR_X          = 400;
export const INDICATOR_Y          = 0;
export const INDICATOR_FONT_STYLE = 'bold 9px Arial';

/*
 * stage
 */
export const STAGE_WIDTH       = 700;
export const STAGE_HEIGHT      = 500;
export const STAGE_PADDING_X   = 20;
export const STAGE_PADDING_Y   = 20;
export const STAGE_MARGIN_X   = 50;
export const STAGE_MARGIN_Y   = 50;
export const STAGE_EDGE_LEFT   = 0 + STAGE_PADDING_X;
export const STAGE_EDGE_RIGHT  = STAGE_WIDTH - STAGE_PADDING_X;
export const STAGE_EDGE_TOP    = 0 + STAGE_PADDING_Y;
export const STAGE_EDGE_BOTTOM = STAGE_HEIGHT - STAGE_PADDING_Y;
export const STAGE_FRAME_LEFT   = 0 - STAGE_MARGIN_X;
export const STAGE_FRAME_RIGHT  = STAGE_WIDTH + STAGE_MARGIN_X;
export const STAGE_FRAME_TOP    = 0 - STAGE_MARGIN_Y;
export const STAGE_FRAME_BOTTOM = STAGE_HEIGHT + STAGE_MARGIN_Y;

/*
 * wave
 */
export const WAVE_TIME_LIMIT = 10 * 1000;

/*
 * aircraft
 */
export const AIRCRAFT_INITIAL_X         = 50;
export const AIRCRAFT_INITIAL_Y         = 250;
export const AIRCRAFT_WIDTH             = 30;
export const AIRCRAFT_HEIGHT            = 10;
export const AIRCRAFT_HIT_AREA          = 2;
export const AIRCRAFT_VELOCITY          = 3;
export const AIRCRAFT_DIAGONAL_VELOCITY = AIRCRAFT_VELOCITY / SQRT2;

/*
 * gatling
 */
export const GATLING_COOL_TIME              = 400;
export const GATLING_BULLET_WIDTH          = 5;
export const GATLING_BULLET_HEIGHT         = 2;
export const GATLING_BULLET_SPEED          = 8;
export const GATLING_BULLET_STOPPING_POWER = 1;


/*
 * >>>>> enemies
 */
export const GUNPOWDER_BULLET_WIDTH  = 8;
export const GUNPOWDER_BULLET_HEIGHT = 4;
export const GUNPOWDER_BULLET_SPEED  = 4;


/*
 * battery
 */
export const BATTERY_WIDTH         = 30;
export const BATTERY_HEIGHT        = 30;
export const BATTERY_BULLET_WIDTH  = 4;
export const BATTERY_BULLET_HEIGHT = 2;
export const BATTERY_BULLET_SPEED  = 4;


/*
 * debris
 */
export const DEBRIS_WIDTH  = 20;
export const DEBRIS_HEIGHT = 20;

/*
 * amplifier
 */
export const AMPLIFIER_WIDTH  = 20;
export const AMPLIFIER_HEIGHT = 20;

/*
 * bomber
 */
export const BOMBER_WIDTH           = 20;
export const BOMBER_HEIGHT          = 20;
export const BOMBER_LAST_SHOT_COUNT = 30;
export const BOMBER_LAST_SHOT_DEPTH = 2;
export const BOMBER_SHOT_COUNT = 3;
export const BOMBER_SHOT_DEPTH = 8;

/*
 * marker
 */
export const MARKER_SPEED = 6;
export const MARKER_SHAPE_RADIUS = 40;
export const MARKER_HITAREA_RADIUS = 10;

/*
 * sign
 */
export const SIGN_RADIUS = 40;

/*
 * launcher
 */
export const LAUNCHER_WIDTH  = 20;
export const LAUNCHER_HEIGHT = 20;

/*
 * noise
 */
export const NOISE_WIDTH  = 20;
export const NOISE_HEIGHT = 20;