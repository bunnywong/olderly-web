<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'tim.cc');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'xaJgC@$,6xH6~eQ|+~frnBIT3m4{*s~,rBB9;buM|0 P<:W~y<u0GAsCL&}3X ZV');
define('SECURE_AUTH_KEY',  '!ENzM+Xa!u-8+&OgVUV2sz<na;;c0Ny6B2^Ms4-!nB(%h|D#([/]I}9nOf@%91@(');
define('LOGGED_IN_KEY',    'Ks,5kN3lZIhuLIW<Qnu{b<3{+~e9aGWS+ wi+{L4W- B~`{{q6b%u-AA5)MW*/cg');
define('NONCE_KEY',        '(oZ,B!tW3G.?tTy=R_9nBn6dZ~p5+&N?;O+Gs]d=WJ)hw[k9O0OwW5SG0BKl,8fQ');
define('AUTH_SALT',        '|uDWXfJG0<&@d>+t9IP?Iu+I(e+6fS/2z]ylqY-v5@;E<_Pu[/R6:@&sKeI|rFA}');
define('SECURE_AUTH_SALT', 'Wse RS3L6oIo:8be%8l,0:w&B:!yY>cyWQq-s/J13r^3+@}[G0o7B>fcZq![D*~.');
define('LOGGED_IN_SALT',   'z;wp7D{T>rwkP|v4PTmElG>H^)y^dbn5&C|d2#[=zn|guGOoEa(s?W1^3THW(+:j');
define('NONCE_SALT',       'E;1-$fk+*.|>c3R^|z<x+A@i @FZs ?2^XzM;(en;Nh*kXpw/s$;Z/n/X|6RpaAw');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
