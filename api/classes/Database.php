<?php
class Database {
	private static $mysqli;
	public static function getConnection() {
		if(!self::$mysqli) {
			self::$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME) or die('Failed to connect to MySQL Database');
    }
		return self::$mysqli;
	}
}
?>
