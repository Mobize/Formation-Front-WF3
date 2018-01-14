<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'wp-portfolio');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', '');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '0UR=,&_k~xR5eR|RT5U[;*BEzH]w=;J`z] xO%d;]|C;>6XN=yCZ q: SSKvICgg');
define('SECURE_AUTH_KEY',  '2tR23jX:t5D$R?0NrcRI0EEofvB!fI>+[{y }&*5IJq9r9EOX`r~{RMG^8c[@YLU');
define('LOGGED_IN_KEY',    'sp@0_nC)x-v^>H [p!B[{]u)`($D)}m`-H,3C5C*}Db?:[DOqj;_OJC+UC-/hC-c');
define('NONCE_KEY',        'Vwp3zYQF.!WZkd5y0S]We5>lrO`U,tPw4;QEvw_Z<L?y<4L=P,}m-)9IX2j)IZzI');
define('AUTH_SALT',        'mC)rfDnE$q1M}F~62}O!fb228NI<kJy*|E{&!PtqWO,@F[f^[81*sUC0cu uzRld');
define('SECURE_AUTH_SALT', '.z;uFc~?CXKYm~T.ZNxN.B9XAgrQe+F<pL#cJCeB.-~J(&6bPdz+6w#bBZ<`^IhY');
define('LOGGED_IN_SALT',   '1x5;JIsy])bZgj/>q>4OxF:vk)j#&~149pWNhiv4sM.Yo`In]dN!:#Idew.>cevn');
define('NONCE_SALT',       ';tr}W)0a>xeGw/`x+W.2gQbNo2X$C[h#ZIn&;/#~HAJaEC!(5BQ^9|S4}<?80Iu,');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');