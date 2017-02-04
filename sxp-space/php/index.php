<?php
/**
 * Created by PhpStorm.
 * User: shanxiaoping
 * Date: 2017/1/19
 * Time: 23:36
 */
session_start();
if (isset($_SESSION['user_name'])) {
    header("Location: ../html/index.html");
} else {
    header("Location: ../html/login.html");
}
exit();
?>